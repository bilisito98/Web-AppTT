import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="sidebar">
      <h2>Designs</h2>
      <ul>
        <li><Link to="/Inicio">Inicio</Link></li>
        <li><Link to="/Profile">Perfil</Link></li>
        <li><Link to="/Login">Información</Link></li>
        <li><Link to="/ProfileDetails">Card Music</Link></li>
        <li><Link to="/ProfileSettings">Modelos E-R</Link></li>
        <li><Link to="/contacto">SQL</Link></li>
        <li><Link to="/configuracion">8</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;