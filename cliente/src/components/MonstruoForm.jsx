import React from 'react';

const MonstruoForm = ({ onSubmit }) => {
  const [nombre, setNombre] = React.useState("");
  const [familia, setFamilia] = React.useState("");
  const [imagen, setImagen] = React.useState(null); 

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      nombre,
      familia,
      imagen 
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        Familia:
        <input type="text" value={familia} onChange={(e) => setFamilia(e.target.value)} />
      </label>
      <label>  
        Imagen:
        <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
      </label>  
      <input type="submit" value="Submit" />
    </form>
  );
};

export default MonstruoForm;
