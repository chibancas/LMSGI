import { Grid, TextField } from '@mui/material'
import { border } from '@mui/system'
import React from 'react'

export const ContactoPage = () => {
  return (
    <>
      <Grid container sx={{ backgroundColor: 'lightgray', display: 'flex', justifyContent: 'center', padding: '5px'}}>
        <Grid item xs={12} md={6}>
          <div>
            <TextField variant='outlined' label='Nombre' placeholder='Nombre Completo'/>
            

            <TextField variant='outlined' label='Apellidos' placeholder='Nombre Completo'/>
            
          </div>

          <TextField variant='outlined' label='Calle'/>
            

            <TextField variant='outlined' label='Numero'/>
            

        </Grid>
      </Grid>
    </>
      )
}
