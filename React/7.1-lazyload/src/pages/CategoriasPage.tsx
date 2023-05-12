import React, { useEffect, useState } from 'react'
import { useFirebaseApp } from 'reactfire'
import { getCategorias, newCategoria } from '../firebase/FBcategorias'
import { ICategorias } from '../firebase/interfaces/ICategorias'
import { Card, CardHeader, Grid, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

export const CategoriasPage = () => {
  // getCategorias()
  //       .then(res=>{
  //         console.log(...res)
  //       })
  const [categorias, setCategorias] = useState<ICategorias[]>([])

  useEffect(() => {
    getCategorias()
      .then(res => {
        console.log(...res)
      })
  }, []


  )
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ICategorias>();
  const onAddCategoria =(dataCategoria: ICategorias)=>{
    console.log('enviando....')
    // console.log(dataCategoria)
    newCategoria(dataCategoria)
  }
  return (
    <>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Grid item xs={4} sx={{ backgroundColor: 'lightgray', margin: '10px', padding: '12px', height: '28vh', borderRadius: '20px' }}>
          <h2>Listado de Categorias</h2>
          {
            categorias.map((categoria) => (
              <>
                <li>{categoria.name}</li>
              </>
            ))
          }
        </Grid>
        <Grid item xs={4} sx={{ backgroundColor: 'lightgray', margin: '10px', padding: '12px', height: '28vh', borderRadius: '20px' }}>
          <h2>Añadir nueva Categoría</h2>
          <form onSubmit={handleSubmit(onAddCategoria)} noValidate>
            <TextField
            {...register('name')}
            id='nombre'
            label="Nombre"
            type="text"
            sx={{width:"70%"}}
            />
            <TextField
            {...register('logo')}
            label="Logo"
            type="string"
            sx={{width:"30%"}}
            />
          </form>
          <button id='enviar' type='submit' color='primary' className='ciricular-btn'><span>Enviar</span></button>
        </Grid>
      </Grid>

    </>
  )
}
