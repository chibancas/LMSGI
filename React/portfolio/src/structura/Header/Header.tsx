import React from 'react'
import logo  from './../../logo.svg'
import mst from './../../assets/mst.jpg'
import { NavLink } from 'react-router-dom'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header>
        <figure id='logo'>
          <img src={logo} />
          <h1>Portfolio React</h1>
        </figure>
        <p>
          Bienvenido a mi portfolio hecho con ReactJS.
          Me gustaría que no juzgarás de fomra negativa lo que verás a continuación
          ya que esta tectnología es muy complicada y se pueden hacer grandes cosas
          pero al usuairo final no le resulta tan interesante aunque a nivel de diseño/programación
          se pueden considerar asombrosas, al menos al nivel en el que yo me encuentro.
        </p>
        <figure className="mst">
          <img className='mst' src={mst} alt="" />
        </figure>
        <NavBar/>
    </header>
  )
}
