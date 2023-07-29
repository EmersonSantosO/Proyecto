import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MonstruosPage from './pages/MonstruosPage';
import AddMonstruoPage from './pages/AddMonstruoPage';
import Navegador from './components/Navegador';
import RedirectToMonstruos from './components/RedirectToMonstruos';  

const App = () => (
  <Router>
    <Navegador />
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/monstruos" element={<MonstruosPage />} />
      <Route path="/add-monstruo" element={<AddMonstruoPage />} />
      <Route path="*" element={<RedirectToMonstruos />} />  
    </Routes>
  </Router>
);

export default App;
