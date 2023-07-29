import React from 'react';

const Monstruo = ({ monstruo }) => (
  <div>
    <h2>{monstruo.nombre}</h2>
    <p>{monstruo.vida}</p>  
    <img src={monstruo.imagen} alt={monstruo.nombre} />
    
  </div>
);

export default Monstruo;
