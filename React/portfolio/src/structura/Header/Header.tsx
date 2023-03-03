import React from 'react'
import './header.css'
import yo  from './../../assets/yo4.png'

export const Header = () => {
  return (
    <header>
        <figure>
            <img src={yo} alt="" />
            
        </figure>
        <h1>Bienvenido</h1>
        <p>
            ¿Busca a alguien para resolver
            problemas relacionados con la informática?
        </p>
    </header>
  )
}
