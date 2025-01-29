import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom"

import { useState, useEffect } from "react"
export const TOKEN_KEY = "my_jwt"
import { UserContext } from "./Context"

import "./App.css"

import ParentLayout from "./layouts/ParentLayout"
import PostsLayout from "./layouts/PostsLayout"
import MembershipLayout from "./layouts/MembershipLayout"
import CheckOutLayout from "./layouts/CheckoutLayout"
import AuthLayout from "./layouts/AuthLayout"
import ProfileLayout from "./layouts/ProfileLayout"

import AuthPage from "./pages/AuthPage"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import CreatePost from "./pages/CreatePost"
import Membership from "./pages/Membership"
import PaymentDetails from "./pages/PaymentDetails"
import CheckOut from "./pages/CheckOut"
import Profile from "./pages/Profile"
import ProfileSetup from "./pages/ProfileSetup"
import EditProfile from "./pages/EditProfile"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthPage />}></Route>
        <Route path="sign_up" element={<SignUp />}></Route>
        <Route path="sign_in" element={<SignIn />}></Route>
      </Route>
      {/* this ensures when anyone tries to access the home page
      without logging in/ signing up, they are taken to the auth page */}
      <Route
        path="/"
        element={
          localStorage.getItem(TOKEN_KEY) ? (
            <ParentLayout />
          ) : (
            <Navigate to="/auth" />
          )
        }
      ></Route>
      <Route path="/" element={<ParentLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="posts" element={<PostsLayout />}>
          {/* The "index" route is the same as the parent route */}
          <Route index element={<Posts />}></Route>
          <Route path="create" element={<CreatePost />}></Route>
        </Route>
        <Route path="membership" element={<MembershipLayout />}>
          <Route index element={<Membership />}></Route>
          <Route path="payment" element={<CheckOutLayout />}>
            <Route index element={<PaymentDetails />}></Route>
            <Route path="checkout" element={<CheckOut />}></Route>
          </Route>
        </Route>
        <Route path="profile" element={<ProfileLayout />}>
          <Route index element={<Profile />}></Route>
          <Route path="complete_profile" element={<ProfileSetup />}></Route>
          <Route path="edit_profile" element={<EditProfile />}></Route>
        </Route>
      </Route>
    </>
  )
)

function App() {
  const [token, setToken] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [displayname, setDisplayName] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [location, setLocation] = useState("")
  const [hairtype, setHairType] = useState("")
  const [porosity, setPorosity] = useState("")
  const [bio, setBio] = useState("")
  const [editDisplayName, setEditDisplayName] = useState("")
  const [editLocation, setEditLocation] = useState("")
  const [editHairType, setEditHairType] = useState("")
  const [editPorosity, setEditPorosity] = useState("")
  const [editBio, setEditBio] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // this is one time, when the app loads, 
    // we check localStorage for a JWT
    const savedToken = localStorage.getItem(TOKEN_KEY)
    setToken(savedToken)
  }, [])

  return (
    <>
      <UserContext.Provider
        value={{
          token,
          setToken,
          username,
          setUserName,
          email,
          setEmail,
          password,
          setPassword,
          displayname,
          setDisplayName,
          successMessage,
          setSuccessMessage,
          errorMessage,
          setErrorMessage,
          location,
          setLocation,
          hairtype,
          setHairType,
          porosity,
          setPorosity,
          bio,
          setBio,
          editDisplayName,
          setEditDisplayName,
          editLocation,
          setEditLocation,
          editHairType,
          setEditHairType,
          editPorosity,
          setEditPorosity,
          editBio,
          setEditBio,
          isEditing,
          setIsEditing,
        }}
      >
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  )
}

export default App

// To quickly create a React component snippet in VSCode, you can use:
// For functional components:

// rafce - React Arrow Function Component with Export
// rfc - React Function Component
// rfce - React Function Component with Export

// For class components:

// rcc - React Class Component
// rce - React Class Export Component

// then hit the tabkey
// Note: You need the ES7+ React/Redux/React-Native snippets
// VSCode extension installed for these shortcuts to work.
// Without the extension, these shortcuts won't do anything.
