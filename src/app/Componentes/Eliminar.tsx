import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Persona } from '../Interfaces/IFormulario';
import { eliminarPersona, obtenerPersona } from '../Firebase/Promesas';
import { Link } from 'react-router-dom'
export const Eliminar = () => {
  const params = useParams();
  const [persona, setPersona] = useState<Persona | null>(null);

  useEffect(() => {
    if (params.idPersona !== undefined) {
      obtenerPersona(params.idPersona).then((v) => {
        if (v !== undefined && v.idPersona !== undefined) {
          setPersona(v);
        }
      });
    }
  }, [params.idPersona]);

  const navigate = useNavigate();

  const eliminar = () => {
    if (params.idPersona) {
      eliminarPersona(params.idPersona).then(() => {
        alert('Se eliminó con éxito');
        // Redirigir a otra página después de eliminar la persona
        navigate('/mostrar');
      });
    }
  };

  if (!persona) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Eliminar Persona</h2>
      <table>
        <thead>
          <tr>
          <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Correo</th>
            <th>Contraseña</th>
            <th>Genero</th>
            <th>Cursos</th>
            <th>Telefono</th>
            <th>direccion</th>
            <th>Condiciones</th>

          </tr>
        </thead>
        <tbody>
          <tr>
          <td>{persona.nombre}</td>
          <td>{persona.apellido}</td>
          <td>{persona.edad}</td>
          <td>{persona.correo}</td>
          <td>{persona.contrasena}</td>
          <td>{persona.genero}</td>
          <td>{persona.cursos}</td>
          <td>{persona.telefono}</td>
          <td>{persona.direccion}</td>
          <td>{persona.aceptaTerminos}</td>
          </tr>
        </tbody>
      </table>
      <p>¿Estás seguro de que quieres eliminar a {persona.nombre} {persona.apellido}?</p>
      <button type="button" onClick={() => eliminar()}>
        Eliminar
      </button>
    </div>
  );
};
