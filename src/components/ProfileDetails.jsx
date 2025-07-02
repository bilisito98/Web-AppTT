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

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const toggleLike = () => {
    setLiked(prev => !prev);
  };

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

      {/* Tarjeta de música */}
      <div className="music-card">
        {/* Imagen del álbum */}
        <img
          src="https://via.placeholder.com/80"
          alt="Album"
          className="album-image"
        />

        {/* Texto de la canción */}
        <div className="song-info">
          <div className="song-title">Nombre de la Canción</div>
          <div className="song-artist">Solista</div>
          <div className="song-full-title">Nombre completo de la canción con más detalle</div>
          <div className="song-year">(2025)</div>
          <button className="genre-button">#dance</button>
        </div>

        {/* Corazón de like */}
        <button onClick={toggleLike} aria-label="Like" className="like-button">
          {liked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              stroke="red"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 21c-1.104 0-2-.896-2-2 0-1.104.896-2 2-2s2 .896 2 2c0 1.104-.896 2-2 2zM12 3c-1.104 0-2 .896-2 2 0 1.104.896 2 2 2s2-.896 2-2c0-1.104-.896-2-2-2z"
              />
              <path
                fill="red"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="red"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}