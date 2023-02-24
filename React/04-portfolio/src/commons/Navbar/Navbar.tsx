import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

export const Navbar = () => {
  return (
    <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'servicios'}>Servicios</Link>
        <Link to={'formacion'}>Formacion</Link>
        <Link to={'qsomos'}>Quienes somos</Link>
        <Link to={'contacto'}>Contacto</Link>
    </nav>
  )
}
