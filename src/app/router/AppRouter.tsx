'use client'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import  Saludo from '../Componentes/Saludo'
import { Formulario } from '../Componentes/Formulario'
import { Registros } from '../Componentes/Registros';
import { Actualizar } from '../Componentes/Actualizar'
import Cursos from '../Componentes/Cursos'
import { Eliminar } from '../Componentes/Eliminar'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Saludo />} />
        <Route path='/formulario' element={<Formulario/>}/>
        <Route path='/mostrar' element={<Registros/>}/>
        <Route path='/actualizar/:idPersona' element={<Actualizar/>}/>
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/Eliminar/:idPersona' element={<Eliminar />}/>
    </Routes>
  )
}
