import { UserContext } from "../App"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { TOKEN_KEY } from "../constants/authConstants"

// This component will handle the login/logout operations
// and display differently depending on login state
function Auth() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { token, setToken, user, setUser } = useContext(UserContext)

  // this nav function will change the current route
  // to whatever string we pass as its argument
  const nav = useNavigate()

  const handleLogin = () => {
    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // when a user logs in, we'll save their JWT to localStorage
        localStorage.setItem(TOKEN_KEY, data.token)
        // ... and save it to state/context
        setToken(data.token)
        // ... and save the user's info to state/context
        setUser(data.user)
      })
      .catch((err) => console.error(err))
  }

  const handleLogout = () => {
    // set the state/context token as ""
    setToken("")
    // remove JWT from localStorage
    localStorage.removeItem(TOKEN_KEY)
    // navigate to the books home page
    nav("")
  }

  if (token) {
    return (
      <>
        <span>Hello, {user.username}</span>
        <button onClick={handleLogout}>Log Out</button>
      </>
    )
  } else {
    return (
      <>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Log In</button>
      </>
    )
  }
}

export default Auth
