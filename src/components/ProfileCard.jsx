import React from 'react';
import './Profilecard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img
        src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/uploads/2021-10/66d58839-fb8d-4fee-9d8d-ba91de8a469f.jpg" 
        alt="Perfil"
        className="profile-image"
      />
      <h2 className="profile-name">William Vargas</h2>
      <div className="stars">
        {'★'.repeat(5)}
      </div>
      <p className="profile-description">
        Global Shaper and Fullstack developer working at Zebra Technologies and Somos Networks. I love mentoring currently working on Make It Real.
      </p>
      <div className="buttons">
        <button className="profile-button">Read More</button>
        <button className="profile-button">Contact</button>
      </div>
    </div>
  );
};

export default ProfileCard;