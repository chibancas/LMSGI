import React from 'react'
import { routes } from './Routes'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
      {
        routes.map((route)=> (
          <NavLink to={route.path}>
            {route.name}
          </NavLink>
        ))
      }
    </nav>
  )
}
