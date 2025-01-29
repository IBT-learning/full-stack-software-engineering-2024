import { NavLink, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "../Context"

function Posts() {
  const [editPostTitle, setEditPostTitle] = useState("")
  const [editPostBody, setEditPostBody] = useState("")
  const [postID, setPostID] = useState("")
  const [allPosts, setAllPosts] = useState([])

  const {
    token,
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
  } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    // because this endpoint requires user authentication
    // we must include the token under the "authorization" header
    // we'll only even attempt to hit this enpoint if there's a token
    if (token) {
      fetch("http://localhost:4000/4C/posts/", {
        headers: {
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((allRecentPosts) => setAllPosts(allRecentPosts))
        .catch((err) => console.error(err))
    }
  }, [])

  const handleEdit = (post) => {
    // setIsEditing(true)
    setPostID(post._id) //sets the ID of the post that was retrieved from
    // allPosts.map as the ID of the post that we want to edit
    setEditPostTitle(post.posttitle) // sets/prefills the field to be edited with
    // the current posttitle of that post
    setEditPostBody(post.postbody) // sets/prefills the field to be edited with
    // the current postbody of that post
  }

  const handleSavingEdit = (postId) => {
    if (token) {
      fetch(`http://localhost:4000/4C/posts/update/${postId}`, {
        method: "PUT",
        // when naming the values for the post body make sure you name
        // the fields going to the body the way you named them in the
        // schema. that also means since the state is the value being
        // sent, state should also be named the same as the keys of
        // the body being sent/created because these:
        // { posttitle, postbody } represent the value of
        // posttitle/postbody with the keys of posttitle/postbody
        // or you can name the state differently and then send it to
        // the body as eg. body: JSON.stringify({ posttitle: createdPost, postbody: createdBody })
        // with the createdPost and createdBody reperesenting the values of state
        body: JSON.stringify({
          posttitle: editPostTitle,
          postbody: editPostBody,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          if (data.message) {
            if (data.status === 200) {
              setSuccessMessage(data.message)
              setErrorMessage("") //clears any prior error message

              setAllPosts((initialPosts) =>
                initialPosts.map((post) =>
                  postID === post._id
                    ? {
                        ...post,
                        posttitle: editPostTitle,
                        postbody: editPostBody,
                      }
                    : post
                )
              )
              // TODO: how do i make the settimeout below to work
              setTimeout(() => {
                setPostID("") // exit edit mode
                setSuccessMessage("") // Clear success message
                console.log(postID)
                console.log(successMessage)
                navigate("/")
              }, 2000)
            } else {
              setErrorMessage(data.message) // Show the error message from the backend
              setSuccessMessage("") // Clear any prior success message
            }
          }
        })
        .catch((error) => {
          console.error(error)
          setErrorMessage("Something went wrong! Please try again...")
          setSuccessMessage("") //clears any prior success message
        })
    }
  }

  const handleDelete = (postId) => {
    if (token) {
      fetch(`http://localhost:4000/4C/posts/delete/${postId}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          if (data.message) {
            if (data.status === 200) {
              setSuccessMessage(data.message)
              setErrorMessage("") //clears any prior error message
              // TODO:why is this filter not working, deleted post still remians
              setAllPosts(
                // Remove the post from the UI by filtering it out
                (prevPosts) => prevPosts.filter((post) => post._id !== postId)
              )
            } else {
              setErrorMessage(data.message) // Show the error message from the backend
              setSuccessMessage("") // Clear any prior success message
            }
            setTimeout(() => {
              navigate("/") //goes to the home page
              // after deleting post
            }, 2000)
          }
        })
        .catch((error) => {
          console.error(error)
          setErrorMessage("Something went wrong! Please try again...")
          setSuccessMessage("") //clears any prior success message
        })
    }
  }

  return (
    <>
      <div className="posts-layout">
        <NavLink to="create">
          <button className="create-post-btn">Create a new post...</button>
        </NavLink>
      </div>
      <div className="posts">
        <h4>See what others have to say about 4C natural hair...</h4>
        <p>From tips, to peoples' journey, and more...</p>
        <p>
          Remember, we may all share the 4C hair type, but our hair is as unique
          as we are! What works wonders for one might not be the magic solution
          for another—and that's perfectly okay.
        </p>
        <p>Go with what your hair loves and thrives on!</p>
      </div>
      <div>
        <h2 className="allposts-title">POSTS</h2>
        <div className="allposts-wrapper">
          {allPosts.map((post) => (
            <>
              <div key={post._id} className="individual-post-wrapper">
                {/* if the postID saved to state is equal to the id
              of the post we are on, then display input fields for edit */}
                {postID === post._id ? (
                  <div className="edit-post">
                    <input
                      className="post-title"
                      type="text"
                      placeholder="post title..."
                      required
                      value={editPostTitle} // two-way binding---bind input value to state
                      onChange={(e) => {
                        setEditPostTitle(e.target.value)
                      }}
                    />
                    <textarea
                      className="post-body"
                      type="text"
                      placeholder="post body..."
                      required
                      value={editPostBody} // two-way binding---bind input value to state
                      onChange={(e) => {
                        setEditPostBody(e.target.value)
                      }}
                    ></textarea>
                    <button
                      className="save-edit-btn"
                      onClick={() => {
                        handleSavingEdit(post._id)
                      }}
                    >
                      Save Post
                    </button>
                    <button
                      className="cancel-edit-btn"
                      onClick={() => {
                        setPostID("")
                      }}
                    >
                      Cancel Edit
                    </button>
                    {/* this prevents rendering empty divs when there's no
                    message for that div */}
                    {successMessage && (
                      <div className="success-message">{successMessage}</div>
                    )}
                    {errorMessage && (
                      <div className="error-message">{errorMessage}</div>
                    )}
                  </div>
                ) : (
                  <div className="view-post">
                    <h4 className="allpost-title">{post.posttitle}</h4>
                    <p>{post.postbody}</p>
                    <div className="btn-wrapper">
                      <button
                        className="edit-btn"
                        onClick={() => {
                          handleEdit(post)
                        }}
                      >
                        Edit Post
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => {
                          handleDelete(post._id)
                        }}
                      >
                        Delete Post
                      </button>
                    </div>
                    <hr className="posts-divider" />
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Posts

// TODO: QUESTION
// when i click on edit post and make a change, it shows
// the success message but it doesn't exit edit mode and clear
// the message as I'm trying to with my settimeout, i have to
// navigate to another page and resume posts page in order to see
// the change. also with delete, i noticed with the delete post,
// the change doesn't show unless i load the page, that is why i
// added the settimeout to navigate to another page---how
// do i handle that?

// TODO: THESE ARE MINE TO TACKLE
// TODO: add a prompt for when user click delete, with
// yes and no buttons for comfirmation
// TODO: how do you show who created the post---
// handle this on the backend first
// TODO: make the name of the person who created the post to be
// a link that leads to their profile
// TODO: how to handle comments on a post.
