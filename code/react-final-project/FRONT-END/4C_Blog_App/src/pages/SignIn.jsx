import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../Context"
import { TOKEN_KEY } from "../App"

function SignIn() {
  const {
    setToken,
    username,
    setUserName,
    password,
    setPassword,
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
  } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSignIn = () => {
    fetch("http://localhost:4000/4C/auth/sign_in", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        // when a user logs in, we'll save their JWT to localStorage
        localStorage.setItem(TOKEN_KEY, data.token)
        // and save it to state/context
        setToken(data.token)
        if (data.message) {
          if (data.status === 200) {
            setSuccessMessage(data.message)
            setErrorMessage("") //clears any prior error message
          } else {
            setErrorMessage(data.message) // Show the error message from the backend
            setSuccessMessage("") // Clear any prior success message
          }
          setTimeout(() => {
            navigate("/") //goes to the home page
            // after logging in
          }, 2000)
        }
      })
      .catch((error) => {
        console.error(error)
        setErrorMessage("Something went wrong! Please try again...")
        setSuccessMessage("") //clears any prior success message
      })
  }

  return (
    <>
      <div className="login-wrapper">
        <div className="about-wrapper">
          <h4>Hi, {username}...</h4>
          <p>
            We're excited to have you back! Sign in to continue your natural
            hair journey and stay connected with a community that celebrates
            your beauty.
          </p>
        </div>
        <div className="title-wrapper">
          <h3>Enter your details below...</h3>
        </div>

        <div className="login">
          <input
            className="username"
            type="text"
            placeholder="Enter username..."
            required
            value={username} // two-way binding
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
          <input
            className="password"
            type="password"
            placeholder="Enter password..."
            required
            value={password} // two-way binding
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <div className="login-btn-wrapper">
          <button className="login-btn" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
        <div className="about-wrapper">
          <p>
            Don't worry! If you're new, you can
            <a href="/auth/sign_up" className="link">
              sign up here
            </a>
            to become part of a welcoming community that celebrates all things
            4C hair...
          </p>
        </div>
        {/* this prevents rendering empty divs when there's no
        message for that div */}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </>
  )
}

export default SignIn
