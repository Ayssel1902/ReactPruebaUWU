import React, { useState } from 'react';
import './conocenos.css'; // Estilo para el componente

const Conocenos = () => {
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  const handleImageClick = () => {
    setIsTextExpanded(!isTextExpanded);
  };

  return (
    <div className="conocenos-container">
      <h1>Sobre Nosotros</h1>
      <p>
        Somos una empresa dedicada al desarrollo de Software, páginas Web y brindar soporte a equipos informáticos.
      </p>
      {isTextExpanded && (
        <p>
          Además, ofrecemos cursos para que las personas aprendan también sobre qué es la programación y hasta qué nivel se puede llegar con las nuevas tecnologías.
        </p>
      )}
      <p>Nuestro correo: contactookristudio@gmail.com</p>
      <img
        className={`round-image ${isTextExpanded ? 'expanded' : ''}`}
        src="https://cdn.discordapp.com/attachments/1080643925641023508/1134279584234344549/My_project-1_2.png" // Reemplaza "URL_DE_LA_IMAGEN" con la URL de tu imagen
        alt="Imagen redonda"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default Conocenos;

