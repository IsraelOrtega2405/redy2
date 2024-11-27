import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);

  const handleMissionClick = () => {
    setMissionVisible(true); // Muestra la animación de la misión
  };

  const handleVisionClick = () => {
    setVisionVisible(true); // Muestra la animación de la visión
  };

  return (
    <div className="home-container">
      <div className="banner">
        <h1>Bienvenidos a Israel-Albert</h1>
        <p>
          Un proyecto innovador enfocado en la creación de páginas web modernas y soluciones de inteligencia artificial.
        </p>
      </div>

      <section className="presentation">
        <h2 onClick={handleMissionClick}>Misión</h2>
        <p className={missionVisible ? 'visible' : ''}>
          Nuestra misión es proporcionar herramientas tecnológicas que permitan a los usuarios crear plataformas web 
          innovadoras, integrando inteligencia artificial para mejorar la experiencia del usuario.
        </p>

        <h2 onClick={handleVisionClick}>Visión</h2>
        <p className={visionVisible ? 'visible' : ''}>
          Ser reconocidos como líderes en el desarrollo de soluciones tecnológicas que transformen la manera en que 
          las personas interactúan con la tecnología.
        </p>
      </section>
    </div>
  );
};

export default Home;
