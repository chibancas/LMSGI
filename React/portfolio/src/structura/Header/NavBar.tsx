import React from 'react'
import {Link} from 'react-router-dom'
import { HomePage } from '../../pages/Home/Home'


export const NavBar = () => {
  return (
      <nav>
          <Link to={'/'}>Inicio</Link>
          <Link to={'/estudios'}>Estudios</Link>
          <Link to={'/futuro'}>Carrera a Futuro</Link>
          <Link to={'/servicios'}>Contrátame</Link>
          <Link to={'/contacto'}>Contacto</Link>
      </nav>
        
  )
}
