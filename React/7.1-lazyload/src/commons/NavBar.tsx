import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from './routes'

export const NavBar = () => {
  return (
    <nav>
        {/* {
          routes.map((route)=>(
            <NavLink to={route.path}>{route.name}</NavLink>
          ))
        } */}
        {
          routes.map(({path,name})=>(
            <NavLink
            key={path} to={path}>
              {name}
            </NavLink>
          ))
        }
    </nav>
  )
}
