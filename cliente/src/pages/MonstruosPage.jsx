import '../styles/MonstruosPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MonstruoList from '../components/MonstruoList';
import { getMonstruos } from '../api/monstruosApi';

const MonstruosPage = () => {
  const [monstruos, setMonstruos] = useState([]);

  useEffect(() => {
    const fetchMonstruos = async () => {
      try {
        const data = await getMonstruos();
        const monstruosData = await axios.get(data.monstruos); 
        setMonstruos(monstruosData.data);  
      } catch (error) {
        console.error('Error fetching monstruos: ', error);
        
      }
    };
    fetchMonstruos();
  }, []);

  return (
    <div>
      <h1>Monstruos</h1>
      <MonstruoList monstruos={monstruos} />
    </div>
  );
};

export default MonstruosPage;
