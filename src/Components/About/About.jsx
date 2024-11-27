import React from 'react';
import './About.css'; // Archivo de estilos

const About = () => {
  return (
    <div className="about-page">
      <h1 style={{ color: 'white' }}>Conoce a Nuestros Ingenieros Principiantes</h1>

      <div className="container">
        <div className="persona">
          <h2><a href="#Io" className="persona-link">Edgar Israel Ortega Perez</a></h2>
          <p>Soy un estudiante de la ingeniería en sistemas computacionales, séptimo cuatrimestre, con gran conocimiento de las bases de la inteligencia artificial. Matrícula: 120100400</p>
        </div>

        <div className="persona">
          <h2><a href="#Io" className="persona-link">Anuar Alberto Palomino Gualo</a></h2>
          <p>Soy un estudiante en ingeniería en sistemas computacionales, cursando el séptimo cuatrimestre. Tengo alto conocimiento acerca de la programación y, en un futuro, seré un representador de Powerlifting. Matrícula: 118100952</p>
        </div>
      </div>
    </div>
  );
};

export default About;
