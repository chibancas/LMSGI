import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Inicio } from '../Pages/Inicio/InicioPage'
import { NavBar } from '../commons/NavBar'
import { Grid } from '@mui/material'
import { Logo } from '../Pages/barril'
import { BorderAll } from '@material-ui/icons'

export const Header = () => {
  return (
    <header>
      <h1>
        TeStore
      </h1>
      <input type="checkbox" name="menu1" id="menu" />
      <label htmlFor="menu">
        <span>Menú</span>
        <i id='ojo' className="fa-solid fa-eye-slash"></i>
      </label>
      <NavBar />
    </header>
  )
}
