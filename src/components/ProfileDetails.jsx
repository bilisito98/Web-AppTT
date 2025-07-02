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
          src="data:image/jpeg;base64,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"
          alt="Album"
          className="album-image"
        />

        <div className="song-info">
          <div className="song-title">LA CAMISA NEGRA</div>
          <div className="song-artist">Solista</div>
          <div className="song-full-title">Juanes - La camisa negra</div>
          <div className="song-year">(2006)</div>
          <button className="genre-button">#dance</button>
        </div>

        <button onClick={toggleLike} aria-label="Like" className="like-button">
          {liked ? (
            <img
              src="https://github.com/bilisito98/Web-AppTT/blob/d11cfcd991dee51d9cf15ec1a3915649b435b56a/src/components/HeartLike.svg?raw=true"
              alt="Corazón lleno"
              width={32}
              height={32}
              style={{ display: 'block' }}
            />
          ) : (
            <img
              src="https://github.com/bilisito98/Web-AppTT/blob/d11cfcd991dee51d9cf15ec1a3915649b435b56a/src/components/Heartdislike.svg?raw=true"
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
