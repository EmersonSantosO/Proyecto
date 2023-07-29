import '../styles/AddMonstruoPage.css';
import React, { useState } from 'react';
import MonstruoForm from '../components/MonstruoForm';
import { createMonstruo } from '../api/monstruosApi';

const AddMonstruoPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (monstruoData) => {
    setIsLoading(true);
    try {
      await createMonstruo(monstruoData);
      
    } catch (error) {
      console.error('Error creating monster: ', error);
      
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Añadir Monstruo</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <MonstruoForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default AddMonstruoPage;
