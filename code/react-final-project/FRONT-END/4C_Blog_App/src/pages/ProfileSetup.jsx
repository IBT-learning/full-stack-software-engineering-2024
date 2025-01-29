import { useState, useContext } from "react"
import { UserContext } from "../Context"
import { useNavigate } from "react-router-dom"

function ProfileSetup() {
  const {
    token,
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
  } = useContext(UserContext)
  const navigate = useNavigate()

  const handleAddDetails = () => {
    // because this endpoint requires user authentication
    // we must include the token under the "authorization" header
    // we'll only even attempt to hit this enpoint if there's a token
    if (token) {
      fetch("http://localhost:4000/4C/profile/set_up", {
        method: "PUT",
        // when naming the values for the post body make sure you name
        // the fields going to the body the way you named them in the
        // schema. that also means since the state is the value being
        // sent, state should also be named the same as the keys of
        // the body being sent/created because these:
        // { posttitle, postbody } represent the value of
        // posttitle/postbody with the keys of posttitle/postbody
        // or you can name the state differently and then send it to
        // the body as eg. body: JSON.stringify({ posttitle: createdPost, postbody: createdBody }) with the createdPost and createdBody
        // reperesenting the values of state
        body: JSON.stringify({ location, hairtype, porosity, bio }),
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // // when a user logs in, we'll save their JWT to localStorage
          // localStorage.setItem(TOKEN_KEY, data.token)
          // // and save it to state/context
          // setToken(data.token)
          if (data.message) {
            if (data.status === 201) {
              setSuccessMessage(data.message)
              setErrorMessage("") //clears any prior error message
            } else {
              setErrorMessage(data.message) // Show the error message from the backend
              setSuccessMessage("") // Clear any prior success message
            }
            setTimeout(() => {
              navigate("/profile") //goes to the home page
              // after creating post
            }, 2000)
          }
        })
        .catch((error) => {
          console.error(error)
          setErrorMessage("Something went wrong! Please try again...")
          setSuccessMessage("") //clears any prior success message
        })
    }
  }

  return (
    <>
      <div className="profile-entry">
        <p>
          Completing your profile helps other users connect with you and builds
          credibility on the platform.
        </p>
        <p>Complete now...</p>
      </div>
      <div className="add-to-profile">
        <input
          className="location"
          type="text"
          placeholder="location..."
          required
          value={location} // two-way binding---bind input value to state
          onChange={(e) => {
            setLocation(e.target.value)
          }}
        />
        <input
          className="hairtype"
          type="text"
          placeholder="hairtype..."
          required
          value={hairtype} // two-way binding---bind input value to state
          onChange={(e) => {
            setHairType(e.target.value)
          }}
        />
        <input
          className="porosity"
          type="text"
          placeholder="porosity..."
          required
          value={porosity} // two-way binding---bind input value to state
          onChange={(e) => {
            setPorosity(e.target.value)
          }}
        />
        <textarea
          className="about-user"
          type="text"
          placeholder="about me..."
          required
          value={bio} // two-way binding---bind input value to state
          onChange={(e) => {
            setBio(e.target.value)
          }}
        ></textarea>
        <button className="submit-profile" onClick={handleAddDetails}>
          ADD TO PROFILE
        </button>
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

export default ProfileSetup
