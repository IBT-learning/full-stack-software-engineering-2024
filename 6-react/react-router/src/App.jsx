import "./App.css"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import AboutLayout from "./layouts/AboutLayout"
import AppLayout from "./layouts/AppLayout"

import About from "./pages/about/About"
import Books from "./pages/Books"
import BookDetail from "./pages/BookDetail"
import Contact from "./pages/Contact"
import FAQ from "./pages/about/FAQ"
import Home from "./pages/Home"
import Staff from "./pages/about/Staff"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="books">
        <Route path="" element={<Books />} />
        <Route path=":id" element={<BookDetail />} />
      </Route>
      <Route path="about" element={<AboutLayout />}>
        <Route index element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="staff" element={<Staff />} />
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
