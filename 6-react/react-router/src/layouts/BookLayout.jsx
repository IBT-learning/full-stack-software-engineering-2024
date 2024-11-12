import { Outlet } from "react-router-dom"
import Auth from "../pages/Auth"

function BookLayout() {
  return (
    <>
      <Auth />
      <Outlet />
    </>
  )
}

export default BookLayout
