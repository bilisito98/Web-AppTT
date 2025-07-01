import React from 'react';
import './Profilecard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img
        src="src\components\vitalik-buterin-creador-ethereum.jpg" 
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