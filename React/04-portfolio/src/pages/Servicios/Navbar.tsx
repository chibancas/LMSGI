import React from 'react'
import { Link } from 'react-router-dom'
import '../../commons/Navbar/navbar.css'
import './servicios.css'

export const Navbar = () => {
  return (
    <nav className='submenu'>
        <Link to={'diseño'}>Diseño web</Link>
        <Link to={'seguridad'}>Seguridad informática</Link>
        <Link to={'mantenimiento'}>Mantenimiento de equipos</Link>
        <Link to={'cloud'}>Automatización en cloud</Link>
    </nav>
  )
}
