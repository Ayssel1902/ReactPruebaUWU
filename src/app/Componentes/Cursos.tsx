import React, { useState } from 'react';
import './cursos.css';

const Cursos = () => {
  const cursosData = [
    {
      title: 'Soporte Técnico',
      imageSrc: 'https://www.ufv.es/cetys/blog/wp-content/uploads/2022/11/2011.i039.022.web-hosting-isometric-scaled.jpg',
      description: 'Aprende con nuestros nuevos cursos sobre los soportes y mantemientos que se le puede dar a un equipo y el cuidado de este.',
    },
    {
      title: 'Desarrollo Web',
      imageSrc: 'https://www.ufv.es/cetys/blog/wp-content/uploads/2022/11/2011.i039.022.web-hosting-isometric-scaled.jpg',
      description: 'Aprende a desarrollar paginas web para poder iniciar tu propio emprendimiento o mejorar tu compania dandole una pagina web utilizando herramientas como [visual estudio, HTML5, CSS y Bootstrap]',
    },
    {
      title: 'Diseño de Software',
      imageSrc: 'https://www.ufv.es/cetys/blog/wp-content/uploads/2022/11/2011.i039.022.web-hosting-isometric-scaled.jpg',
      description: 'Porque no empezar a emprender o vender software de calidad en este curso aprenderas las bases para poder crear cualquier tipo de programa y que se acomode al usuario.',
    },
  ];

  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const handleToggleDescription = (courseTitle: string) => {
    setExpandedCourse((prevCourse) => (prevCourse === courseTitle ? null : courseTitle));
  };

  return (
    <div className="cursos">
      {cursosData.map((curso, index) => (
        <div key={index} className="curso">
          <img src={curso.imageSrc} alt={curso.title} />
          <h2>{curso.title}</h2>
          <button className="ver-mas" onClick={() => handleToggleDescription(curso.title)}>
            {expandedCourse === curso.title ? 'Ver menos' : 'Ver más'}
          </button>
          {expandedCourse === curso.title && (
            <div className="descripcion">
              <p>{curso.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cursos;


