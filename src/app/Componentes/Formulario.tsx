'use client'
import React, { useState } from 'react';
import { Persona } from '../Interfaces/IFormulario';
import { registrarPersona } from '../Firebase/Promesas';
import './formulario.css';


export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [genero, setGenero] = useState('');
  const [cursos, setCursos] = useState<string[]>([]);
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const [errorNombre, setErrorNombre] = useState('');
  const [errorCorreo, setErrorCorreo] = useState('');
  const [errorContrasena, setErrorContrasena] = useState('');

  const registrar = () => {
    if (nombre.trim() === '') {
      setErrorNombre('No valen espacios en blanco');
      return;
    }

    // Realiza más validaciones para los otros campos si es necesario

    const p: Persona = {
      nombre,
      apellido,
      edad: parseInt(edad),
      correo,
      contrasena,
      genero,
      cursos,
      telefono,
      direccion,
      aceptaTerminos: aceptaTerminos ? "Aceptado" : "No Aceptado", // Guardamos "Aceptado" o "No Aceptado" según el valor de aceptaTerminos
    };
    registrarPersona(p);
    console.log(p);
    alert('¡Registro exitoso!');
  };

  const validarNombre = (valor: string) => {
    setNombre(valor);
    if (valor.length < 3) {
      setErrorNombre('Debe tener más de 3 letras');
    } else {
      setErrorNombre('');
    }
  };

  // Implementa otras funciones para validar los otros campos si es necesario

  return (
    <form className="formulario">
      <label>Nombre:</label>
      <br />
      <input
        type="text"
        onChange={(e) => validarNombre(e.target.value)}
        value={nombre}
      />
      <br />
      <span>{errorNombre}</span>
      <br />

      <label>Apellido:</label>
      <br />
      <input
        type="text"
        onChange={(e) => setApellido(e.target.value)}
        value={apellido}
      />
      <br />

      <label>Edad:</label>
      <br />
      <input
        type="number"
        onChange={(e) => setEdad(e.target.value)}
        value={edad}
      />
      <br />

      <label>Correo Electrónico:</label>
      <br />
      <input
        type="email"
        onChange={(e) => setCorreo(e.target.value)}
        value={correo}
      />
      <br />

      <label>Contraseña:</label>
      <br />
      <input
        type="password"
        onChange={(e) => setContrasena(e.target.value)}
        value={contrasena}
      />
      <br />

      <label>Género:</label>
      <br />
      <select onChange={(e) => setGenero(e.target.value)} value={genero}>
        <option value="">Seleccione</option>
        <option value="hombre">Hombre</option>
        <option value="mujer">Mujer</option>
        <option value="otro">Otro</option>
      </select>
      <br />

      <label>Cursos:</label>
      <br />
      <div>
        <input
          type="checkbox"
          checked={cursos.includes('Diseño Web')}
          onChange={(e) =>
            setCursos((prev) =>
              e.target.checked
                ? [...prev, 'Diseño Web']
                : prev.filter((curso) => curso !== 'Diseño Web')
            )
          }
        />
        <label>Diseño Web</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={cursos.includes('Soporte Técnico')}
          onChange={(e) =>
            setCursos((prev) =>
              e.target.checked
                ? [...prev, 'Soporte Técnico']
                : prev.filter((curso) => curso !== 'Soporte Técnico')
            )
          }
        />
        <label>Soporte Técnico</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={cursos.includes('Diseño de Software')}
          onChange={(e) =>
            setCursos((prev) =>
              e.target.checked
                ? [...prev, 'Diseño de Software']
                : prev.filter((curso) => curso !== 'Diseño de Software')
            )
          }
        />
        <label>Diseño de Software</label>
      </div>

      <label>Número de Teléfono:</label>
      <br />
      <input
        type="text"
        onChange={(e) => setTelefono(e.target.value)}
        value={telefono}
      />
      <br />

      <label>Dirección:</label>
      <br />
      <textarea
        onChange={(e) => setDireccion(e.target.value)}
        value={direccion}
      />
      <br />

      <label>Acepto los Términos y Condiciones</label>
      <input
        type="checkbox"
        onChange={(e) => setAceptaTerminos(e.target.checked)}
        checked={aceptaTerminos}
      />
      <br />

      <button type="button" onClick={registrar}>
        Registrar
      </button>
    </form>
  );
};