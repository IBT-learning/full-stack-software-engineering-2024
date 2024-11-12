import { Outlet } from "react-router-dom"
import Auth from "../components/Auth"

function BookLayout() {
  return (
    <>
      <Auth />
      <Outlet />
    </>
  )
}

export default BookLayout
