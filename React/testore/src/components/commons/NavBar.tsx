import { Button } from '@material-ui/core'
import { Grid } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Rutas } from '../interfaces/routes'

export const NavBar = () => {
  return (
    <nav style={{backgroundColor:"black", width:"100%"}}>
      <Grid container width={"100%"} bgcolor={""}>
        {
          Rutas.map(({ path, name }) => (
            <Grid item xs={3} textAlign={"center"}>
              <Button>
                <NavLink to={path} key={path}
                  style=
                  {
                    {
                      textDecoration: 'none',
                      fontSize: 36,
                      width: '100%',
                      backgroundColor:'green',
                      color:"white",
                      padding:".5rem",
                      borderRadius:".5rem"
                    }
                  }>
                    <span>{name}</span>
                  </NavLink>
              </Button>
            </Grid>
          ))
        }
      </Grid>
    </nav>
  );console.log('nav renderizado')
}
