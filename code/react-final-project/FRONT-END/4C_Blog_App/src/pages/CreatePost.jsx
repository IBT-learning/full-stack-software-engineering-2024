import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../Context"

function CreatePost() {
  const [posttitle, setPostTitle] = useState("")
  const [postbody, setPostBody] = useState("")

  const {
    token,
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
  } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (token) {
      fetch("http://localhost:4000/4C/posts/create", {
        method: "POST",
        // when naming the values for the post body make sure you name
        // the fields going to the body the way you named them in the
        // schema. that also means since the state is the value being
        // sent, state should also be named the same as the keys of
        // the body being sent/created because these:
        // { posttitle, postbody } represent the value of
        // posttitle/postbody with the keys of posttitle/postbody
        // or you can name the state differently and then send it to
        // the body as eg. body:
        // JSON.stringify({ posttitle: createdPost, postbody: createdBody })
        // with the createdPost and createdBody
        // reperesenting the values of state
        body: JSON.stringify({ posttitle, postbody }),
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
            if (data.status === 201) {
              setSuccessMessage(data.message)
              setErrorMessage("") //clears any prior error message
            } else {
              setErrorMessage(data.message) // Show the error message from the backend
              setSuccessMessage("") // Clear any prior success message
            }
            setTimeout(() => {
              navigate("/posts") //goes to the home page
              // after creating post
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
      <div className="create-post-entry">
        <p>What do you have in mind today?</p>
        <p>Share some insights, tips, practical steps etc...</p>
        <p>Let's grow this space together!</p>
      </div>
      <div className="create-post">
        <input
          className="post-title"
          type="text"
          placeholder="post title..."
          required
          value={posttitle} // two-way binding---bind input value to state
          onChange={(e) => {
            setPostTitle(e.target.value)
          }}
        />
        <textarea
          className="post-body"
          type="text"
          placeholder="post body..."
          required
          value={postbody} // two-way binding---bind input value to state
          onChange={(e) => {
            setPostBody(e.target.value)
          }}
        ></textarea>
        <button className="submit-post" onClick={handleSubmit}>
          SUBMIT POST
        </button>
        {/* this prevents rendering empty divs when there's no
        message for that div */}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </>
  )
}

export default CreatePost
