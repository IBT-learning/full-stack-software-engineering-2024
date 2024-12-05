import { useEffect, useState } from "react"

function Post({ post, selectedPostId, setSelectedPostId }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    // here is an example of using async functions instead of resolvers
    // to perform fetches inside useEffect
    const fetchComments = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      )
      const json = await data.json()
      setComments(json)
    }

    if (selectedPostId === post.id) {
      fetchComments().catch((err) => console.warn(err))
    }
  }, [selectedPostId])
  // here the dependency is a prop, so the component will re-render
  // when the parent's state changes / when the parent passes a different prop value

  return (
    <>
      <div className="post-card">
        <span className="card-title">{post.title}</span>
        <p>{post.body}</p>
        <span
          className="comment-link"
          onClick={() => setSelectedPostId(post.id)}
        >
          Open Comments
        </span>
      </div>
      {selectedPostId === post.id && (
        <div className="comment-wrapper">
          {comments.map((c) => (
            <div className="comment post-card" key={`comment-${c.id}`}>
              <span className="card-title">{c.name}</span>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Post
