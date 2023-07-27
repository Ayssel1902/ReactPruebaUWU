
import React, { useEffect, useState } from 'react'
import { obtenerPersonas } from '../Firebase/Promesas'
import { Persona } from '../Interfaces/IFormulario'
import { Link } from 'react-router-dom'
import './registros.css'



export const Registros = () => {
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=>{
        obtenerPersonas().then((listado)=>{
            console.log("Ya estoy listo")
            console.log(listado)
            setPersonas(listado)
        })
       
    },[])

    const renderizarDatos = ()=>{
        var r = personas.map((p)=>{
            return <tr>
                    <td>{p.nombre}</td>
                    <td>{p.apellido}</td>
                    <td>{p.edad}</td>
                    <td>{p.correo}</td>
                    <td>{p.contrasena}</td>
                    <td>{p.genero}</td>
                    <td>{p.cursos}</td>
                    <td>{p.telefono}</td>
                    <td>{p.direccion}</td>
                    <td>{p.aceptaTerminos}</td>
                    <td><Link to={"/actualizar/"+p.idPersona}>Actualizar</Link></td>
                    <td><Link to={"/Eliminar/"+p.idPersona}>Eliminar</Link></td>
                </tr>
        })
        return r
    }

    return (
    <table>
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
            <th>Editar</th>
            <th>Eliminar</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}
