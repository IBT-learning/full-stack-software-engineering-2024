import { useState, useEffect, useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../Context"

function Profile() {
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
    isEditing,
    setIsEditing,
  } = useContext(UserContext)
  const [profile, setProfile] = useState({})
  const [userPosts, setUserPosts] = useState([])

  // i want the user to see the complete btn when profile is
  // incomplete but when they complete their profile, the btn
  // should change to edit profile, so i add this check
  const isProfileComplete =
    profile.location && profile.hairtype && profile.porosity && profile.bio

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

  useEffect(() => {
    // because this endpoint requires user authentication
    // we must include the token under the "authorization" header
    // we'll only even attempt to hit this enpoint if there's a token
    if (token) {
      fetch("http://localhost:4000/4C/posts/specific_user_posts", {
        headers: {
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((myPosts) => setUserPosts(myPosts))
        .catch((err) => console.error(err))
    }
  }, [token])

  const handleEditProfile = (profile) => {
    setIsEditing(true)

    setEditDisplayName(profile.displayname) // sets/prefills the field to be edited with the current posttitle of that post
    setEditLocation(profile.location) // sets/prefills the field to be edited with the current postbody of that post
    setEditHairType(profile.hairtype) // sets/prefills the field to be edited with the current postbody of that post
    setEditPorosity(profile.porosity) // sets/prefills the field to be edited with the current postbody of that post
    setEditBio(profile.bio) // sets/prefills the field to be edited with the current postbody of that post
  }

  return (
    <>
      <div className="profile-layout">
        {isProfileComplete ? (
          <NavLink to="edit_profile">
            <button
              className="complete-profile-btn"
              onClick={() => {
                handleEditProfile(profile)
              }}
            >
              Edit your profile...
            </button>
          </NavLink>
        ) : (
          <NavLink to="complete_profile">
            <button className="complete-profile-btn">
              Complete your profile...
            </button>
          </NavLink>
        )}
      </div>
      <h3 className="profile-title">My Details</h3>
      <div className="profile-details">
        <div className="span-wrapper">
          <span className="username-details">
            <p>Username:</p>
            <p className="fetched-user">{profile.username}</p>
          </span>
          <span className="displayname-details">
            <p>Displayname:</p>
            <p className="fetched-user-display">{profile.displayname}</p>
          </span>
          <span className="location-details">
            <p>Location:</p>
            <p className="fetched-user">{profile.location}</p>
          </span>
          <span className="hairtype-details">
            <p>Hairtype:</p>
            <p className="fetched-user">{profile.hairtype}</p>
          </span>
          <span className="porosity-details">
            <p>Porosity:</p>
            <p className="fetched-user">{profile.porosity}</p>
          </span>
        </div>
        <span className="about-me">
          <h3 className="about-me-title">About me:</h3>
          <p>{profile.bio}</p>
        </span>
      </div>
      <h3 className="profile-title">My Posts</h3>
      <div className="myposts">
        {userPosts.map((post) => (
          <>
            <h4 className="my-post-title">{post.posttitle}</h4>
            <p>{post.postbody}</p>
          </>
        ))}
      </div>
    </>
  )
}

export default Profile
