import React from 'react';
import userPic from './assets/user-3.jpg';  // Make sure the path to the image is correct

const UserProfilePage = () => (
  <div className="user-profile">
    <div className="user-img">
      <img src={userPic} alt="User" />
    </div>
    <div className="user-bio">
      <p>Name: Nanny Ray</p>
      <p>Email: Nanny@gmail.com</p>
      <p>
        Bio: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi vitae vel unde quis illo
        numquam, quod sequi eaque, non magni sint voluptates. Quas modi repellendus voluptate illum expedita, sequi facere?
      </p>
    </div>
  </div>
);

export default UserProfilePage;
