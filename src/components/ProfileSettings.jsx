import React, { useState } from 'react';
import './ModelosER.css';

// Importaciones con los nombres exactos de tu carpeta
import zoologicos from './Problema_1_Zoológicos.png';
import abogados from './Diagrama_ER_Gabinete_De_Abogados.png';
import ventas from './Diagrama_ER_de_Sistema_de_Ventas.png';
import uvi from './UVI.png';

const diagramas = [
  { nombre: "Problema Zoológicos", archivo: zoologicos },
  { nombre: "Diagrama ER, Gabinete de Abogados", archivo: abogados },
  { nombre: "Diagrama ER de Sistemas de Ventas", archivo: ventas },
  { nombre: "Diagrama ER de bases de datos (enunciado UVI)", archivo: uvi },
];

export default function ProfileSettings() {
  const [seleccionado, setSeleccionado] = useState(0);

  return (
    <div className="modeloser-container">
      {/* Ruta de navegación */}
      <nav className="breadcrumb">
        <span>Inicio</span>
        <span className="breadcrumb-separador">{'>'}</span>
        <span>Modelos ER</span>
      </nav>
      <h2 className="modeloser-titulo">Visualización de Diagramas E‑R</h2>
      {/* Tabs de selección */}
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