import '../styles/Navegador.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navegador = () => (
  <nav>
    <ul>
      <li>
        <Link to="/login">Iniciar sesión</Link>
      </li>
      <li>
        <Link to="/monstruos">Ver monstruos</Link>
      </li>
      <li>
        <Link to="/add-monstruo">Añadir monstruo</Link>
      </li>
    </ul>
  </nav>
);

export default Navegador;
