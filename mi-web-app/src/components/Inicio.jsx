import React from 'react';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <h1>Diseño Front-End</h1>
      <p>
        El diseño Front-End se centra en la creación de interfaces atractivas, responsivas y funcionales
        para el usuario. Es la parte visual de una aplicación web e implica el uso de tecnologías como
        HTML, CSS, JavaScript, React, y frameworks modernos como Tailwind CSS o Material UI.
      </p>

      <div className="imagenes-grid">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" />
        <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS" />
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" />
        <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" />
      </div>

      <p>
        El objetivo del Front-End es lograr que la experiencia del usuario sea clara, fluida y visualmente
        atractiva. A través de herramientas modernas, se puede construir un diseño adaptable a cualquier dispositivo.
      </p>
    </div>
  );
};

export default Inicio;