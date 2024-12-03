import React from "react";
//import "./Navbar.css";

const Navbar = () => (
  <div className="navbar">
    <div className="logo">
      <a href="/">
        <img
          src="https://bloggingwizard.com/wp-content/uploads/2023/03/Inspiring-Food-Blog-Examples-Featured.png"
          alt="Logo"
        />
      </a>
    </div>
    <div className="profile-picture">
      <a href="/profile">
        <img
          src="https://secure.gravatar.com/avatar/5bb636402aee5e0871a56701a5ce28c4?s=192&d=mm&r=g"
          alt="User Profile"
        />
      </a>
    </div>
  </div>
);

export default Navbar;
