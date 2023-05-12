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
      <Grid container textAlign={"center"} justifyContent={"center"} color={"white"} fontSize={"2rem"}>
        <Grid item xs={6} bgcolor={"green"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <h1>
            TeStore
          </h1>
        </Grid>
        <Grid item xs={4} bgcolor={"orange"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <h2>
            Juan José Fernández
          </h2>
        </Grid>
        <Grid item xs={2} bgcolor={"darkblue"} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={".5rem"}>
          <img src={Logo} alt="logo" height={"50px"} style={{border:"solid 1px white",borderRadius:"1rem",scale:"1.3"}} />
        </Grid>
        <NavBar/>
      </Grid>
    </header>
  )
}
