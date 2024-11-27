import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <h1>Enlaces a Google Colab</h1>
      <p>
        Puedes acceder a tus cuadernos de Google Colab a través de los siguientes enlaces:
      </p>

      <h2 style={{ color: 'rgb(255, 0, 0)' }}>Cálculo de Derivadas</h2>
      <ul>
        <li>
          <a
            href="https://colab.research.google.com/drive/1jPNs6KOCJjlLstqS7hhghiVwJ3E98X7s?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir Google Colab - Cuaderno 1
          </a>
        </li>
      </ul>

      <h2 style={{ color: 'rgb(98, 255, 0)' }}>Conversión de Celsius a Fahrenheit</h2>
      <ul>
        <li>
          <a
            href="https://colab.research.google.com/drive/1FDGiMNANiwZt9E2coRieSrpwEOWbRrFD?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir Google Colab - Cuaderno 2
          </a>
        </li>
      </ul>

      <h2 style={{ color: 'rgb(0, 4, 255)' }}>Red Neuronal</h2>
      <ul>
        <li>
          <a
            href="https://colab.research.google.com/drive/1lPSdumbcl8BM-pTbxOYFZOqt_9jg9Qmk?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir Google Colab - Cuaderno 3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
