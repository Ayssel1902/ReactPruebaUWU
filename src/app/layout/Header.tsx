'use client'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to={"/"} className="navbar-link">Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link to={"/formulario"} className="navbar-link">Registrarse</Link>
        </li>
        <li className="navbar-item">
          <Link to={"/mostrar"} className="navbar-link">Ver Registros</Link>
        </li>
        <li className="navbar-item">
          <Link to={"/Cursos"} className="navbar-link">Cursos</Link>
        </li>
      </ul>
      <button className={`theme-toggle ${isDarkMode ? 'dark' : ''}`} onClick={toggleTheme}>
        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </nav>
  );
};

