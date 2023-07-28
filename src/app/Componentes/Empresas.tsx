import React from 'react';
import './empresas.css'; // Estilo para el componente

const Empresas = () => {
  return (
    <div className="empresas-container">
      <div className="empresa-card">
        <img
          src="https://cdn.discordapp.com/attachments/1078164355868262521/1134297781499068496/LibrosChilesur.png"
          alt="Libros Chile Sur"
        />
        <h2>Empresa: Libros Chile Sur</h2>
      </div>
      <div className="empresa-card">
        <img
          src="https://cdn.discordapp.com/attachments/1078164355868262521/1134297809579950180/Carmen_Bajo.png"
          alt="Carmen Bajo"
        />
        <h2>Empresa: Carmen Bajo</h2>
      </div>
      <div className="empresa-card">
        <img
          src="https://cdn.discordapp.com/attachments/1078164355868262521/1134297838558400532/clientes.png"
          alt="Clientes"
        />
        <h2>Empresa: Clientes</h2>
      </div>
    </div>
  );
};

export default Empresas;
