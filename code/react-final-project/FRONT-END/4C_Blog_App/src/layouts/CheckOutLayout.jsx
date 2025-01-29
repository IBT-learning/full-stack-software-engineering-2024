import { Outlet } from "react-router-dom"

function CheckOutLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default CheckOutLayout
