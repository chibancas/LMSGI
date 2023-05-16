import { Button } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Rutas } from '../interfaces/routes'

export const NavBar = () => {
  return (
    <nav className='pako'>
      {
        Rutas.map(({ path, name }) => (
          <NavLink to={path} key={path}>
            <span>{name}</span>
          </NavLink>
        ))
      }
    </nav>
  );
}
