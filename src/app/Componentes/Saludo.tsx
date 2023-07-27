import React from 'react';

const Saludo = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Título del Video</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Coloca aquí el iframe del video de YouTube */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0xSPgPKJ7mo"
          title="YouTube video player"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          
        ></iframe>
      </div>
    </div>
  );
};

export default Saludo;
