import React from 'react';
import Monstruo from './Monstruo';

const MonstruoList = ({ monstruos }) => {
  if (!Array.isArray(monstruos)) {
    
    return null;
  }

  return (
    <div>
      {monstruos.map((monstruo) => (
        <Monstruo key={monstruo.id} monstruo={monstruo} />
      ))}
    </div>
  );
};

export default MonstruoList;
