import React from 'react'
import './header.css'
import logo  from './../../logo.svg'
import mst from './../../assets/mst.jpg'

export const Header = () => {
  return (
    <header>
        <figure>
            <img src={logo} />
        </figure>
        <img id='mst' src={mst} alt="" />
        <h1>Portfolio React</h1>
        <p>
            Bienvenido a mi portfolio hecho con ReactJS. <br />
            Me gustaría que no juzgarás de fomra negativa lo que verás a continuación <br />
            ya que esta tectnología es muy conplicada y se pueden hacer grandes cosas con <br />
            pero al usuairo final no le resulta tan interesante aunque a nivel de diseño/programación <br />
            se pueden considerar asombrosas, al menos al nivel en el que yo me encuentro.
        </p>
    </header>
  )
}
