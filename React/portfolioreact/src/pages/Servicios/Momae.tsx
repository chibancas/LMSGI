import React from 'react'
import { NavLink } from 'react-router-dom'

export const Momae = () => {
  return (
    <>
        <article id="momae">
            <h3>Mon</h3>
            <p>
                Durante el primer curos de CFGM SMR estuve cursando un módulo
                llamado MOMAE donde aprendí y me aficioné al montaje y mantenimiento
                de equipos informáticos.
            </p>
            <nav>
                <NavLink to={'https://google.es'}>Google</NavLink>
            </nav>
        </article>
    </>
  )
}
