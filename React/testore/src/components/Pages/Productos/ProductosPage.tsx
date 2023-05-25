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

      <Grid container spacing={2} style={{ display: "flex", justifyContent: "center", backgroundColor: "darkblue", padding: "1rem" }}>
        {
          // listar productos
          productos.sort((a, b) => (a.Precio > b.Precio) ? 1 : ((b.Precio > a.Precio) ? -1 : 0)).map((productosolo) => {
            //se ordenan los precios de los productos de menos a más.
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className='tarjetas' style={{ backgroundColor: "silver" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={productosolo.img}
                      alt="foto producto"
                      style={{ objectFit: "contain", padding: "1rem", scale: "1.2" }}
                    />

                    <CardContent>

                      {/* <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                        {productosolo.codigo}
                      </Typography> */}

                      <Typography className='nombre' gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                        {productosolo.Nombre}
                      </Typography>
                      <Typography className='descripcion' variant="body2" style={{ wordBreak: "break-word" }}>
                        {productosolo.id},
                        {productosolo.CPU},
                        {productosolo.GPU}
                      </Typography>

                    </CardContent>
                  </CardActionArea>


                  <CardActions>
                    <Button size="medium">
                      <span className='precio'>
                        {productosolo.Precio}
                      </span>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
      <div id='add1prod'>
        <Button id='openform' variant="outlined" color="primary" onClick={handleClickOpen}>
          Añadir Producto
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Añadir Nuevo Producto</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Rellena los siguientes campos para añadir un nuevo producto.
            </DialogContentText>
            <form onSubmit={handleSubmit(onaddNuevoPro)} noValidate autoComplete="off" style={{display:"flex",gap:".5rem",flexFlow:"row wrap"}}>
              <TextField
                {...register("id")}
                id="id"
                label="ID del Producto"
                fullWidth
                placeholder='1 o 12 o 2221...'
              />

              <TextField
                {...register("Nombre")}
                autoFocus
                margin="dense"
                id="nombre"
                label="Nombre del Producto"
                type="text"
                placeholder='MSI MEG Trident X2 13NUI-015ES Intel Core i9-13900KF...'
                fullWidth
              />

              <TextField
                {...register("CPU")}
                id="cpu"
                label="CPU del equipo"
                fullWidth
                placeholder='INTEL PENTIUM...'
              />

              <TextField
                {...register("GPU")}
                autoFocus
                margin="dense"
                id="precio"
                label="GPU del equipo"
                type="string"
                placeholder='RADEON RX 6700XT'
                fullWidth
              />
              <TextField
                {...register("img")}
                autoFocus
                margin="dense"
                id="img"
                label="Imagen (URL)"
                placeholder='https://img.pccomponentes.com/articles/1058/10585068/1496-msi-meg-trident-x2-13nui-015es-intel-core-i9-13900kf-64gb-2tb-ssd-rtx4090.jpg'
                type="text"
              />

              <TextField
                {...register("RAM")}
                id="ram"
                label="RAM del equipo"
                type='number'
                placeholder='16 o 32 o 8 o 128'
              />

              <TextField
                {...register("cat")}
                id="selectcpu"
                select
                label="AMD o INTEL?"
                helperText='Procesador AMD o INTEL?'
                style={{ width: "50wh" }}

              >
                {TipoCpu.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                {...register("TipoRam")}
                id="selectram"
                select
                label="Generación RAM"
                helperText='Generación RAM'
                fullWidth
              >
                {TipoRam.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                {...register("Precio")}
                id="precio"
                label="Precio del equipo"
                type='number'
                placeholder='16 o 32 o 8 o 128'
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Salir
            </Button>
            <Button type='submit' onClick={handleSubmit(onaddNuevoPro)} color="primary">
              Añadir Producto
            </Button>
          </DialogActions>

        </Dialog>
      </div>
      <Button variant='contained' onClick={cargarprod}>Cargar Datos</Button>
    </main>
  );
}
