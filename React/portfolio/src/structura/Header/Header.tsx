import React from 'react'
import './header.css'
import logo  from './../../logo.svg'
import mst from './../../assets/mst1.jpg'

export const Header = () => {
  return (
    <header>
        <figure id='logo'>
          <img src={logo} />
          <h1>Portfolio React</h1>
        </figure>
        <figure id="mst">
          {/* <img id='mst' src={mst} alt="" /> */}
        </figure>
        
        <p>
            Bienvenido a mi portfolio hecho con ReactJS.
            Me gustaría que no juzgarás de fomra negativa lo que verás a continuación
            ya que esta tectnología es muy conplicada y se pueden hacer grandes cosas con
            pero al usuairo final no le resulta tan interesante aunque a nivel de diseño/programación
            se pueden considerar asombrosas, al menos al nivel en el que yo me encuentro.
        </p>
    </header>
  )
}
