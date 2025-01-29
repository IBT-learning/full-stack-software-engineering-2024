import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../Context"

function SignUp() {
  const {
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
  } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSignUp = () => {
    fetch("http://localhost:4000/4C/auth/sign_up", {
      method: "POST",
      body: JSON.stringify({ username, email, password, displayname }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json()
        // }
      })
      .then((data) => {
        if (data.message) {
          if (data.status === 201) {
            setSuccessMessage(data.message)
            setErrorMessage("") //clears any prior error message
          } else {
            setErrorMessage(data.message) // Show the error message from the backend
            setSuccessMessage("") // Clear any prior success message
          }
          setTimeout(() => {
            navigate("/auth/sign_in") //goes to the sign_in page
            // after creating account
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
      <div className="create-account-wrapper">
        <div className="about-wrapper">
          <h4>Let's get started...</h4>
          <p>
            You're about to take the first step in a journey filled with tips,
            support, and growth.
          </p>
          <p>
            You're not just creating an account — you're becoming part of a
            movement where we embrace, celebrate, and empower each other’s
            natural beauty. You're also contributing to a space where real
            stories and real hair care experiences can thrive. Your input will
            help us grow and improve our platform, making it even more valuable
            to others just like you!
          </p>
        </div>
        <div className="title-wrapper">
          <h3>Join our community...</h3>
        </div>

        <div className="create-account">
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
            className="email"
            type="email"
            placeholder="Enter email..."
            required
            value={email} // two-way binding
            onChange={(e) => {
              setEmail(e.target.value)
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
          <input
            className="displayname"
            type="text"
            placeholder="Enter displayname..."
            required
            value={displayname} // two-way binding
            onChange={(e) => {
              setDisplayName(e.target.value)
            }}
          />
        </div>
        <div className="create-account-btn-wrapper">
          <button className="create-account-btn" onClick={handleSignUp}>
            Sign Up
          </button>
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

export default SignUp
