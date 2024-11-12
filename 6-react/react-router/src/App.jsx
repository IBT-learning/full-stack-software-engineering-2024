/* 

React Router creates the illusion of a multi-page application
while still loading the app as a Single Page Application

The user experiences different pages with different URLs, 
but under the hood React is still just swapping out components, 
not making new HTTP requests on page loads

*/

import "./App.css"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import { createContext, useEffect, useState } from "react"

import { TOKEN_KEY } from "./constants/authConstants"

import AboutLayout from "./layouts/AboutLayout"
import AppLayout from "./layouts/AppLayout"
import BookLayout from "./layouts/BookLayout"

import About from "./pages/about/About"
import Books from "./pages/Books"
import BookDetail from "./pages/BookDetail"
import Contact from "./pages/Contact"
import FAQ from "./pages/about/FAQ"
import Home from "./pages/Home"
import Staff from "./pages/about/Staff"

// the router object defined how the different URLs are related to each other
const router = createBrowserRouter(
  createRoutesFromElements(
    // We create a nested hierarchy of routes
    // The root is always "/" (which is the root domain with nothing else)
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="books" element={<BookLayout />}>
        <Route path="" element={<Books />} />
        {/* URL parameters are delineated with a colon, just like in Express */}
        <Route path=":id" element={<BookDetail />} />
      </Route>
      <Route path="about" element={<AboutLayout />}>
        {/* The "index" route is the same as the parent route */}
        <Route index element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="staff" element={<Staff />} />
      </Route>
    </Route>
  )
)

// This is a "context" object that will keep track of state across the whole app
// it can be accessed by any component that it's provided to
export const UserContext = createContext("")

function App() {
  const [token, setToken] = useState("")
  const [user, setUser] = useState({})

  useEffect(() => {
    // one time, when the app loads, we will check localStorage for a JWT
    const savedToken = localStorage.getItem(TOKEN_KEY)
    setToken(savedToken)
  }, [])

  return (
    // The context's "Provider" is a component that wraps some or all of the app
    // anything inside the provider will have access to the context
    // just by importing it
    <UserContext.Provider value={{ token, setToken, user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  )
}

export default App
