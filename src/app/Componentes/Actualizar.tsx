
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Persona } from '../Interfaces/IFormulario'
import { actualizarPersona, obtenerPersona, eliminarPersona } from '../Firebase/Promesas';

export const Actualizar = () => {
    const params = useParams()
    const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [edad, setEdad] = useState("")
  const [errorNombre, setErrorNombre] = useState("")
    const [idPersona,setIdPersona] = useState("")
  const [correo,setCorreo] = useState("")
  const [contrasena,setContrasena] = useState("")
  const [genero,setGenero] = useState("")
  const [cursos,setCursos] = useState("")
  const [telefono,setTelefono] = useState("")
  const [direccion,setDireccion] = useState("")
  const [aceptaTerminos,setAceptaTerminos] = useState("")
  useEffect(()=>{
    if(params.idPersona!=undefined){
       obtenerPersona(params.idPersona).then((v)=>{
        if(v!=undefined && v.idPersona!= undefined){
            setNombre(v.nombre)
            setApellido(v.apellido)
            setEdad(""+v.edad)
            setIdPersona(v.idPersona)
        }
       })
    
    }
    //promesas que recuperan el objeto en base a un id
    //carguemos en cada estado su valor
  },[])
  
  
  const actualizar = ()=>{

    if(nombre.trim()==""){
      setErrorNombre("No valen espacios en blanco")
    }else{
      setNombre(nombre.trim())
    }

    //Asuman que se valido todo
    const p:Persona = {
      nombre,
      apellido,
      edad: parseInt(edad),
      correo,
      contrasena,
      genero,
      cursos,
      telefono,
      direccion,
      aceptaTerminos,
    }
    //actualizar
    actualizarPersona(idPersona,p).then(()=>{
        alert("Se actualizo con exito")
    })
    //registrarPersona(p)
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(correo);
    console.log(genero);
    console.log(cursos);
    console.log(telefono);
    console.log(direccion);
    console.log(aceptaTerminos);

    alert("Bienvenido "+nombre+" "+apellido);
  }
  const validarNombre = (valor:string)=>{
    setNombre(valor);
    if(valor.length<3){
      setErrorNombre("Debe tener mas de 3 letras")
    }
    else{
      setErrorNombre("")
    }


  }
  return (
    <form>
        <label>Nombre: </label><br/>
        <input type="text" 
          onChange={(e)=>validarNombre(e.target.value)}
          value={nombre}
          /><br/>
        <span>{errorNombre}</span><br/>
        <label>Apellido: </label><br/>
        <input type="text"
          onChange={(e)=>setApellido(e.target.value)}
          value={apellido}
        /><br/>
        
        <label>Edad: </label><br/>
        <input type="number"
          onChange={(e)=>setEdad(e.target.value)}
          value={edad}
          /><br/>

        <label>Correo: </label><br/>
        <input type="email"
          onChange={(e)=>setCorreo(e.target.value)}
          value={correo}
          /><br/>
                
        <label>Contraseña: </label><br/>
        <input type="password"
          onChange={(contrasena)=>setContrasena(contrasena.target.value)}
          value={contrasena}
          /><br/>

        <label>Genero: </label><br/>
        <select onChange={(genero)=>setGenero(genero.target.value)} value={genero}>
          <option value="">Seleccione</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
          <option value="otro">Otro</option>
        </select>
        <br/>

        <label>Cursos: </label><br/>
        <select onChange={(cursos)=>setCursos(cursos.target.value)} value={cursos}>
          <option value="">Seleccione</option>
          <option value="Diseño Web">Diseño Web</option>
          <option value="Soporte Tecnico">Soporte Tecnico</option>
          <option value="Diseño Software">Diseño Software</option>
        </select>
          <br/>
        

        <label>Telefono: </label><br/>
        <input type="text"
          onChange={(telefono)=>setTelefono(telefono.target.value)}
          value={telefono}
          /><br/>

        <label>Direccion: </label><br/>
        <input type="text"
          onChange={(direccion)=>setDireccion(direccion.target.value)}
          value={direccion}
          /><br/>

        <button type='button' onClick={actualizar}>Actualizar</button>
    </form>
  )
}
