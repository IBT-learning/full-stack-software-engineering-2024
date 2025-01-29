import { Outlet } from "react-router-dom"

function PostsLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default PostsLayout
