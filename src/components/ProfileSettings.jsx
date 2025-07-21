import React from 'react';
import './ModelosER.css';

// Lista de diagramas ER disponibles
const diagramas = [
  {
    nombre: 'Problema Zoológicos',
    archivo: 'Problema_1_Zoológicos.png'
  },
  {
    nombre: 'Diagrama ER, Gabinete de Abogados',
    archivo: 'Diagrama_ER_Gabinete_De_Abogados.png'
  },
  {
    nombre: 'Diagrama ER de Sistemas de Ventas',
    archivo: 'Diagrama_ER_de_Sistema_de_Ventas.png'
  },
  {
    nombre: 'Diagrama ER de bases de datos (enunciado UVI)',
    archivo: 'Diagrama_ER_de_base_de_datos_enunciado_UVI.png'
  }
];

export default function ProfileSettings() {
  const [seleccionado, setSeleccionado] = React.useState(0);

  return (
    <div className="modelosER-container">
      {/* Ruta feliz */}
      <nav className="breadcrumb">
        <span className="breadcrumb-root">Inicio</span>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-actual">Modelos ER</span>
      </nav>
      
      <h2>Visualización de Diagramas E-R</h2>

      {/* Menú de selección visual, tipo tabs o botones */}
      <div className="er-tabs">
        {diagramas.map((d, i) => (
          <button
            key={d.nombre}
            className={`er-tab${seleccionado === i ? ' seleccionado' : ''}`}
            onClick={() => setSeleccionado(i)}
          >
            {d.nombre}
          </button>
        ))}
      </div>

      {/* Área visual del diagrama */}
      <div className="er-display">
        <img
          className="er-image"
          src={`./${diagramas[seleccionado].archivo}`}
          alt={diagramas[seleccionado].nombre}
        />
        <div className="er-caption">{diagramas[seleccionado].nombre}</div>
      </div>
    </div>
  );
}
