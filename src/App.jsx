import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Portfolio from './Components/Portafolio/Portfolio';
import Contactos from './Components/Contactos/Contactos';
import Home from './Components/Home/Home';
import Chatbox from './Components/Chatbox/Chatbox'; // Importa el chatbox

const App = () => {
  return (
    <Router>
      {/* Barra de Navegación */}
      <Navbar />
      
      {/* Rutas de la aplicación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
      
      {/* Chatbox visible en todas las rutas */}
      <Chatbox /> 
    </Router>
  );
};

export default App;

