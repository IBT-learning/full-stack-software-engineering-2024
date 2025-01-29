import { useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "../Context"

function EditProfile() {
  const [profile, setProfile] = useState({})

  const {
    token,
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
    successMessage,
    errorMessage,
    setIsEditing,
    setSuccessMessage,
    setErrorMessage,
  } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    // because this endpoint requires user authentication
    // we must include the token under the "authorization" header
    // we'll only even attempt to hit this enpoint if there's a token
    if (token) {
      fetch("http://localhost:4000/4C/profile", {
        headers: {
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((profileDetails) => setProfile(profileDetails))
        .catch((err) => console.error(err))
    }
  }, [token])

  const handleSaveProfileEdit = (profile) => {
    if (token) {
      if (profile.displayname) {
        fetch("http://localhost:4000/4C/profile/display_name", {
          method: "PATCH",
          body: JSON.stringify({
            displayname: profile.displayname,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (data.message) {
              if (data.status === 200) {
                setSuccessMessage(data.message)
                setProfile({ displayname: data.user.displayname })
                setErrorMessage("") //clears any prior error message

                // TODO: how do i make the settimeout below to work, it's
                // not clearing the message or going back to /profile
                setTimeout(() => {
                  setSuccessMessage("") // Clear success message
                  setIsEditing(false) // exit edit mode

                  navigate("/profile")
                }, 2000)
              } else {
                setErrorMessage(data.message) // Show the error message from the backend
                setSuccessMessage("") // Clear any prior success message
              }
            }
          })
          .catch((error) => {
            console.error(error)
            setErrorMessage("Something went wrong! Please try again...")
            setSuccessMessage("") //clears any prior success message
          })
      } else if (profile.location) {
        fetch("http://localhost:4000/4C/profile/location", {
          method: "PATCH",
          body: JSON.stringify({
            location: profile.location,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (data.message) {
              if (data.status === 200) {
                setSuccessMessage(data.message)
                setProfile({ displayname: data.user.displayname })
                setErrorMessage("") //clears any prior error message

                // TODO: how do i make the settimeout below to work, it's
                // not clearing the message or going back to /profile
                setTimeout(() => {
                  setSuccessMessage("") // Clear success message
                  setIsEditing(false) // exit edit mode

                  navigate("/profile")
                }, 2000)
              } else {
                setErrorMessage(data.message) // Show the error message from the backend
                setSuccessMessage("") // Clear any prior success message
              }
            }
          })
          .catch((error) => {
            console.error(error)
            setErrorMessage("Something went wrong! Please try again...")
            setSuccessMessage("") //clears any prior success message
          })
      } else if (profile.hairtype) {
        fetch("http://localhost:4000/4C/profile/display_name", {
          method: "PATCH",
          body: JSON.stringify({
            displayname: profile.displayname,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (data.message) {
              if (data.status === 200) {
                setSuccessMessage(data.message)
                setProfile({ displayname: data.user.displayname })
                setErrorMessage("") //clears any prior error message

                // TODO: how do i make the settimeout below to work, it's
                // not clearing the message or going back to /profile
                setTimeout(() => {
                  setSuccessMessage("") // Clear success message
                  setIsEditing(false) // exit edit mode

                  navigate("/profile")
                }, 2000)
              } else {
                setErrorMessage(data.message) // Show the error message from the backend
                setSuccessMessage("") // Clear any prior success message
              }
            }
          })
          .catch((error) => {
            console.error(error)
            setErrorMessage("Something went wrong! Please try again...")
            setSuccessMessage("") //clears any prior success message
          })
      } else if (profile.porosity) {
        fetch("http://localhost:4000/4C/profile/display_name", {
          method: "PATCH",
          body: JSON.stringify({
            displayname: profile.displayname,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (data.message) {
              if (data.status === 200) {
                setSuccessMessage(data.message)
                setProfile({ displayname: data.user.displayname })
                setErrorMessage("") //clears any prior error message

                // TODO: how do i make the settimeout below to work, it's
                // not clearing the message or going back to /profile
                setTimeout(() => {
                  setSuccessMessage("") // Clear success message
                  setIsEditing(false) // exit edit mode

                  navigate("/profile")
                }, 2000)
              } else {
                setErrorMessage(data.message) // Show the error message from the backend
                setSuccessMessage("") // Clear any prior success message
              }
            }
          })
          .catch((error) => {
            console.error(error)
            setErrorMessage("Something went wrong! Please try again...")
            setSuccessMessage("") //clears any prior success message
          })
      } else {
        fetch("http://localhost:4000/4C/profile/display_name", {
          method: "PATCH",
          body: JSON.stringify({
            displayname: profile.displayname,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (data.message) {
              if (data.status === 200) {
                setSuccessMessage(data.message)
                setProfile({ displayname: data.user.displayname })
                setErrorMessage("") //clears any prior error message

                // TODO: how do i make the settimeout below to work, it's
                // not clearing the message or going back to /profile
                setTimeout(() => {
                  setSuccessMessage("") // Clear success message
                  setIsEditing(false) // exit edit mode

                  navigate("/profile")
                }, 2000)
              } else {
                setErrorMessage(data.message) // Show the error message from the backend
                setSuccessMessage("") // Clear any prior success message
              }
            }
          })
          .catch((error) => {
            console.error(error)
            setErrorMessage("Something went wrong! Please try again...")
            setSuccessMessage("") //clears any prior success message
          })
      }
    }
  }

  return (
    <>
      <div className="profile-wrapper">
        <input
          className="displayname-title"
          type="text"
          placeholder="edit displayname..."
          required
          value={editDisplayName} // two-way binding---bind input value to state
          onChange={(e) => {
            setEditDisplayName(e.target.value)
          }}
        />
        <input
          className="location"
          type="text"
          placeholder="edit location..."
          required
          value={editLocation} // two-way binding---bind input value to state
          onChange={(e) => {
            setEditLocation(e.target.value)
          }}
        />
        <input
          className="hairtype"
          type="text"
          placeholder="edit hairtype..."
          required
          value={editHairType} // two-way binding---bind input value to state
          onChange={(e) => {
            setEditHairType(e.target.value)
          }}
        />
        <input
          className="porosity"
          type="text"
          placeholder="edit porosity..."
          required
          value={editPorosity} // two-way binding---bind input value to state
          onChange={(e) => {
            setEditPorosity(e.target.value)
          }}
        />
        <textarea
          className="about-user"
          type="text"
          placeholder="edit bio..."
          required
          value={editBio} // two-way binding---bind input value to state
          onChange={(e) => {
            setEditBio(e.target.value)
          }}
        ></textarea>
        <button
          className="save-edit-btn"
          onClick={() => {
            handleSaveProfileEdit(profile)
          }}
        >
          Save Profile
        </button>
        <button
          className="cancel-edit-btn"
          onClick={() => {
            setIsEditing(false)
            navigate("/profile")
          }}
        >
          Cancel Edit
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

export default EditProfile

// TODO: QUESTION
// my save edit btn is not working at all
// my browser console shows that the request is successful
// everytime ie. it shows the fetch happened, even when
// there's no update/ when the change doesn't satify the validation
// like the displayname validators
// also, when i edit other fields, i keep getting the message for
// successful diplayname edit and not the success message for editing
// the other individual fields, from their respective API calls
// how do i correct that
