import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Contactos.css';

const Contactos = () => {
  return (
    <div className="contactos-container">
      <h2>Contactos</h2>

      {/* Sección de Israel Ortega Perez */}
      <div className="contact-section">
        <h3>Israel Ortega Perez</h3>
        <p>Redes Sociales:</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/share/Vvfn3r71R9D3L46p/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" /> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/edgar2405ortega/profilecard/?igsh=d2d1cXA4enh1dXh5" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" /> Instagram
            </a>
          </li>
          <li>
            <a href="https://wa.me/525610309895" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="social-icon whatsapp" /> WhatsApp
            </a>
          </li>
        </ul>
      </div>

      {/* Sección de Alberto Gualo Palomino */}
      <div className="contact-section">
        <h3>Alberto Gualo Palomino</h3>
        <p>Redes Sociales:</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61569445580531&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" /> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/berth_x3?igsh=MTAyN3J4Nm5lMjNh" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" /> Instagram
            </a>
          </li>
          <li>
            <a href="https://wa.me/525564405956" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="social-icon whatsapp" /> WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  );
};

export default Contactos;
