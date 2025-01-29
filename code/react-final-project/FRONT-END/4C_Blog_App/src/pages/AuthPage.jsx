import { NavLink } from "react-router-dom"

function AuthPage() {
  return (
    <>
      <div className="auth-wrapper">
        <h4 className="about-title">Welcome to 4C</h4>
        <p className="auth-about">Your natural hair journey starts here!</p>
        <p className="auth-about">
          We celebrate the beauty of natural hair and empower our community of
          natural sisters.
        </p>
        <p className="auth-about">
          Discover expert tips, inspiration, and tools tailored to your 4C hair
          needs.
        </p>
        <p className="auth-about">
          Join us to unlock endless possibilities for embracing your natural
          beauty through our platform.
        </p>
        <p className="auth-about">🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟</p>
        <hr className="hr" />
        <div className="auth-form">
          <p className="call-to-action">Are you a new user?</p>
          <div>
            <NavLink to="sign_up">
              <button className="auth-btn">Create Account</button>
            </NavLink>
          </div>
          <p className="call-to-action">Do you have an account?</p>
          <div>
            <NavLink to="sign_in">
              <button className="auth-btn">Log In</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthPage
