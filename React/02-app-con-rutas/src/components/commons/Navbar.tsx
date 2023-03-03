import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {NavLink} from 'react-router-dom';
import { Contacto } from '../secciones/contacto/Contacto';
import { Formacion } from '../secciones/formacion/Formacion';
import { Servicios } from '../secciones/servicios/Servicios';
import { Trabajo } from '../secciones/trabajo/Trabajo';
import './navbar.css';
const Navbar=()=>{
    return(
        <BrowserRouter>
            <nav>
               <NavLink to={'/'}>Inicio</NavLink>
               <NavLink to={'/services'}>Servicios</NavLink>
               <NavLink to={'/works'}>Trabajo</NavLink>
               <NavLink to={'/contact'}>Contacto</NavLink>
               <NavLink to={'/formacion'}>Formacion</NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<h2>Página Principal</h2>}/>
                <Route path='formacion' element={<Formacion/>}/>
                <Route path='services' element={<Servicios/>}/>
                <Route path='contact' element={<Contacto/>}/>
                <Route path='works' element={<Trabajo/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Navbar;

