// import { useState, useEffect } from 'react'
// import { collection, getDoc, getDocs, deleteDoc } from "firebase/firestore"
// import { conexiondb } from '../barril'
// import { IProductos } from '../../interfaces/productos'
// import { TraerProductos, addproducto } from '../../../FBConfig/FBProductos'
// import { useForm } from 'react-hook-form'
// import { NavLink } from 'react-router-dom'

// export const AddProductos = () => {
//   //listar productos
//   const [productos, setproductos] = useState<IProductos[]>([])
//   useEffect(() => {
//     TraerProductos()
//       .then(answer => {
//         console.log(...answer)
//         setproductos([...answer])
//       })
//   }, [])
//   //listar productos


//   //registeer y handleSubmit son funciones de react hook form
//   //se iguala la interfaz a un formulario y ponemos los parentesis
//   //de las funciones
//   const { register, handleSubmit } = useForm<IProductos>();

//   const onaddNuevoPro = async (datoProducto: IProductos) => {
//     //aqui es donde enviamos los datos al backend
//     console.log(datoProducto)
//     await addproducto(datoProducto)
//     //esta última línea recarga la página al añadir producto
//     //idea de francisco parra navarro
//     window.location.reload()
//   }
//   return (
//     <main id="añadir">
// <form onSubmit={handleSubmit(onaddNuevoPro)} noValidate>
//   <h2>Añade un Nuevo Producto</h2>
//   <input
//     {...register("nombre")}
//     type="text" id='nombre' placeholder='Nombre' />

//   <input
//     type="number"
//     {...register("precio")}
//     id='precio' placeholder='Precio' />

//   <input
//     type="text"
//     {...register("img")}
//     id='img' placeholder='Imagen (URL)' />
//   <button type='submit'>enviar</button>
// </form>
//     </main>
//   )
// }



import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TraerProductos, addproducto, cargarprod } from '../../../FBConfig/FBProductos';
import { IProductos } from '../../interfaces/productos';
import { useForm } from 'react-hook-form';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, MenuItem, TableContainer, Typography } from '@material-ui/core';
import Paper from '@mui/material/Paper'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';


export const ProductosPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   //registeer y handleSubmit son funciones de react hook form
  //   //se iguala la interfaz a un formulario y ponemos los parentesis
  //   //de las funciones
  const { register, handleSubmit } = useForm<IProductos>();
  const onaddNuevoPro = async (datoProducto: IProductos) => {
    //aqui es donde enviamos los datos al backend
    console.log(datoProducto)
    await addproducto(datoProducto)
    //esta última línea recarga la página al añadir producto
    //idea de francisco parra navarro
    window.location.reload()
    alert('Producto añadido')
  }


  const [productos, setproductos] = useState<IProductos[]>([])
  useEffect(() => {
    TraerProductos()
      .then(answer => {
        console.log(...answer)
        setproductos([...answer])
      })
  }, [])

  const TipoCpu = [
    {
      value: 'INTEL',
      label: 'INTEL',
    },
    {
      value: 'AMD',
      label: 'AMD',
    }
  ];

  const TipoRam = [
    {
      value: 'DDR4',
      label: 'DDR4',
    },
    {
      value: 'DDR5',
      label: 'DDR5',
    }
  ];

  return (
    <main id='productos'>

      <Grid className='container' container spacing={2} style={{display: "flex", justifyContent: "center", backgroundColor: "darkblue", padding: "1rem"}}>
        {
          // listar productos
          productos.sort((a, b) => (a.Precio > b.Precio) ? 1 : ((b.Precio > a.Precio) ? -1 : 0)).map((productosolo) => {
            //se ordenan los precios de los productos de menos a más.
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className='tarjetas' style={{ backgroundColor: "silver" }}>
                    <CardMedia
                      className='fotopro'
                      component="img"
                      height="140"
                      image={productosolo.img}
                      alt="foto producto"
                      style={{ objectFit: "contain", padding: "1rem", scale: "1.2" }}
                    />

                    <CardContent>
                      <Typography className='desborde' gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                        {productosolo.Nombre}
                      </Typography>
                      <Typography className='desborde' variant="body2" style={{ wordBreak: "break-word" }}>
                        CPU: {productosolo.CPU}
                      </Typography>
                      <Typography className='desborde' variant="body2" style={{ wordBreak: "break-word" }}>
                        GPU: {productosolo.GPU}
                      </Typography>
                      <Typography className="ram desborde" variant="body2" style={{ wordBreak: "break-word"}}>
                        RAM: {productosolo.RAM}
                      </Typography>
                    </CardContent>


                    <Button size="medium">
                      <span className='precio'>
                        {productosolo.Precio}
                      </span>
                    </Button>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
    </main>
  );
}
