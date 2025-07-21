import React, { useState } from 'react';
import "./ModelosER.css";

// Cambia los nombres y paths según corresponda a cómo importas imágenes en React
const diagramas = [
  {
    nombre: "Problema 1_ Zoológicos",
    archivo: require("C:\Users\asdda\OneDrive\Desktop\CURSOS\KODLAND\python proy\Web-AppTT\src\components\Problema_1_ Zoológicos.png"),
  },
  {
    nombre: "Diagrama ER, Gabinete De Abogados",
    archivo: require("C:\Users\asdda\OneDrive\Desktop\CURSOS\KODLAND\python proy\Web-AppTT\src\components\Diagrama_ER_Gabinete_De_Abogados.png"),
  },
  {
    nombre: "Diagrama ER de Sistema de Ventas",
    archivo: require("C:\Users\asdda\OneDrive\Desktop\CURSOS\KODLAND\python proy\Web-AppTT\src\components\Diagrama_ER_de_Sistema_de_Ventas.png"),
  },
  {
    nombre: "Diagrama ER de base de datos (enunciado UVI)",
    archivo: require("C:\Users\asdda\OneDrive\Desktop\CURSOS\KODLAND\python proy\Web-AppTT\src\components\UVI.png"),
  },
];

export default function ProfileSettings() {
  const [seleccionado, setSeleccionado] = useState(0);

  return (
    <div className="modeloser-container">
      {/* Ruta feliz / Breadcrumb */}
      <nav className="breadcrumb">
        <span>Inicio</span>
        <span className="breadcrumb-separador">/</span>
        <span>Modelos ER</span>
      </nav>
      <h2 className="modeloser-titulo">Visualización de Diagramas E-R</h2>

      {/* Secciones para seleccionar diagrama */}
      <div className="modeloser-tabs">
        {diagramas.map((d, idx) => (
          <button
            key={d.nombre}
            className={`modeloser-tab${seleccionado === idx ? " seleccionado" : ""}`}
            onClick={() => setSeleccionado(idx)}
          >
            {d.nombre}
          </button>
        ))}
      </div>

      {/* Visualización del diagrama */}
      <div className="modeloser-display">
        <img
          className="modeloser-img"
          src={diagramas[seleccionado].archivo}
          alt={diagramas[seleccionado].nombre}
        />
        <div className="modeloser-caption">{diagramas[seleccionado].nombre}</div>
      </div>
    </div>
  );
}
