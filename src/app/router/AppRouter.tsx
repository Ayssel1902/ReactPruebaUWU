'use client'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import  Inicio from '../Componentes/Inicio'
import { Formulario } from '../Componentes/Formulario'
import { Registros } from '../Componentes/Registros';
import { Actualizar } from '../Componentes/Actualizar'
import Cursos from '../Componentes/Cursos'
import { Eliminar } from '../Componentes/Eliminar'
import Nosotros from '../Componentes/Nosotros'
import Empresas from '../Componentes/Empresas'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/formulario' element={<Formulario/>}/>
        <Route path='/mostrar' element={<Registros/>}/>
        <Route path='/actualizar/:idPersona' element={<Actualizar/>}/>
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/Eliminar/:idPersona' element={<Eliminar />}/>
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Empresas" element={< Empresas/>} />
    </Routes>
  )
}
