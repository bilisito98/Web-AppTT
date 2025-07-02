import React, { useState, useEffect } from 'react';
import './Profilecard.css';

export default function ProfileDetails() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => date.toLocaleTimeString();

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const toggleLike = () => setLiked(prev => !prev);

  return (
    <div className="profile-details-container">
      <h3>Detalles del Perfil</h3>

      <p className="counter-text">Contador: {count}</p>

      <div className="buttons-container">
        <button onClick={() => setCount(count + 1)}>
          Incrementar
        </button>
        <button onClick={handleDecrement}>
          Disminuir
        </button>
      </div>

      <div className="time-container">
        <p>Hora actual: {formatTime(currentTime)}</p>
        <p>Segundos transcurridos: {seconds}</p>
      </div>

      <div className="music-card">

        <img
          src="https://via.placeholder.com/80"
          alt="Album"
          className="album-image"
        />

        <div className="song-info">
          <div className="song-title">Nombre de la Canción</div>
          <div className="song-artist">Solista</div>
          <div className="song-full-title">Nombre completo de la canción con más detalle</div>
          <div className="song-year">(2025)</div>
          <button className="genre-button">#dance</button>
        </div>

        <button onClick={toggleLike} aria-label="Like" className="like-button">
          {liked ? (
            <img
              src="https://pplx-res.cloudinary.com/image/private/user_uploads/36308309/d5824e26-a2a7-4449-a717-5dbd57f99863/HeartLike.jpg"
              alt="Corazón lleno"
              width={32}
              height={32}
              style={{ display: 'block' }}
            />
          ) : (
            <img
              src="https://pplx-res.cloudinary.com/image/private/user_uploads/36308309/015f6757-03c4-4285-8d77-129c12a1a400/Heartdislike.jpg"
              alt="Corazón borde"
              width={32}
              height={32}
              style={{ display: 'block' }}
            />
          )}
        </button>
      </div>
    </div>
  );
}
