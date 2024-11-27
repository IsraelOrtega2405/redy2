import React, { useState } from 'react';
import './Chatbox.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [unintelligibleCount, setUnintelligibleCount] = useState(0); // Contador para entradas inentendibles consecutivas

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (newMessage.trim() !== '') {
      const userMessage = { sender: 'User', text: newMessage };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      if (messages.length === 0) {
        const botMessage = { sender: 'Bot', text: '¡Hola! ¿En qué puedo ayudarte hoy?' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setUnintelligibleCount(0); // Reiniciar el contador
      } else {
        generateBotResponse(newMessage);
      }

      setNewMessage('');
    }
  };

  const generateBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('contacto') || lowerCaseMessage.includes('teléfono')) {
      const botMessage = {
        sender: 'Bot',
        text: 'Claro, aquí están los números de contacto:\n- Israel Ortega Pérez: +52 5610309895\n- Alberto Gualo Palomino: +52 5564405956.',
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setUnintelligibleCount(0); // Reiniciar el contador
    } else if (lowerCaseMessage.includes('página')) {
      const botMessage = {
        sender: 'Bot',
        text: 'Esta página fue creada como un proyecto de desarrollo web e inteligencia artificial. ¿Necesitas más información?',
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setUnintelligibleCount(0); // Reiniciar el contador
    } else {
      handleUnintelligibleResponse();
    }
  };

  const handleUnintelligibleResponse = () => {
    let botMessage;

    if (unintelligibleCount >= 2) {
      botMessage = {
        sender: 'Bot',
        text: '¡ESCRIBE BIEN WEY!',
      };
    } else if (unintelligibleCount === 1) {
      botMessage = {
        sender: 'Bot',
        text: '¡Agarra un diccionario y busca la palabra que me vas a decir!',
      };
    } else {
      botMessage = {
        sender: 'Bot',
        text: 'Lo siento, no entendí tu mensaje. ¿Puedes escribir bien animal? :)',
      };
    }

    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setUnintelligibleCount((count) => count + 1); // Incrementar el contador
  };

  const toggleChatbox = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className={`chatbox ${isChatOpen ? 'open' : ''}`}>
      <button className="chatbox-toggle" onClick={toggleChatbox}>
        {isChatOpen ? 'Cerrar Chat' : 'Abrir Chat'}
      </button>
      {isChatOpen && (
        <div className="chatbox-content">
          <div className="chatbox-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbox-message ${msg.sender}`}>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <form className="chatbox-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              required
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
