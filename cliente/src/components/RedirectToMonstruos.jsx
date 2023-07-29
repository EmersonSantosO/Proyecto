import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectToMonstruos = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/monstruos');
  }, [navigate]);

  return null;
};

export default RedirectToMonstruos;
