import { Outlet } from "react-router-dom"

function ProfileLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default ProfileLayout
