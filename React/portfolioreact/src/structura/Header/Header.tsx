import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../logo.svg'
import { NavBar } from './NavBar'
export const Header = () => {
  return (
    <header>
      <figure>
        <img src={logo} alt="logo de react" />
      </figure>
      <h1>
        Bienvenidos
      </h1>
      <input type="checkbox" id='nav1' />
      <label htmlFor="nav1">Secciones</label>
      <nav id='ppal'>
        <NavLink to={'/'}>Inicio</NavLink>
        <NavLink to={'/servicios'}>Servicios</NavLink>
        <NavLink to={'/skills'}>Habilidades</NavLink>
        <NavLink to={'/contacto'}>Contacto</NavLink>
      </nav>
    </header>
  )
}
