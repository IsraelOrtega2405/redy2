import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);  // Nuevo estado para el hover

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  // Cambia la clase del navbar cuando el usuario se desplaza
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`header ${scrolled || isHovered ? 'scrolled' : ''}`} 
      onMouseEnter={() => setIsHovered(true)} // Activar cuando el mouse entra
      onMouseLeave={() => setIsHovered(false)} // Desactivar cuando el mouse sale
    >
      <a href="/" className="Israel-Albert">
        {/* Aquí se agrega el ícono Lobo.ico */}
        <img src="/src/assets/Lobo/lobo.ico" alt="Logo" className="navbar-logo" /> 
      </a>

      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/portfolio">Portafolio</Link>
        <Link to="/">Servicio</Link>
        <Link to="/contactos">Contacto</Link>
      </nav>

      {!isLoggedIn ? (
        <button className="login-btn" onClick={handleLoginClick}>Iniciar Sesion</button>
      ) : (
        <div className="user-info">
          <span>{username}</span>
          <button className="logout-btn" onClick={handleLogout}>Cerrar Sesion</button>
        </div>
      )}

      {/* Modal de Login */}
      <div className={`login-modal ${showLogin ? 'active' : ''}`}>
        <form onSubmit={handleLoginSubmit} className="login-form">
          <label htmlFor="username">Usuario o Gmail</label>
          <input 
            type="text" 
            id="username" 
            placeholder="Ingresa Usuario" 
            required 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
          
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Ingresa Contraseña" required />
          
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
