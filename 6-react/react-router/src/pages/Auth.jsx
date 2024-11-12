import { UserContext } from "../App"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { TOKEN_KEY } from "../constants/authConstants"

function Auth() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { token, setToken, user, setUser } = useContext(UserContext)
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
        localStorage.setItem(TOKEN_KEY, data.token)
        setToken(data.token)
        setUser(data.user)
        console.log(data.user)
      })
      .catch((err) => console.error(err))
  }

  const handleLogout = () => {
    setToken("")
    localStorage.removeItem(TOKEN_KEY)
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
