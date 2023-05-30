import React, { useEffect, useState } from 'react'
import { TraerContacto, addproducto } from '../../../FBConfig/FBContacto';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { IContacto } from '../../interfaces/contactos';

export const Contacto = () => {
  const [contactos, setcontactos] = useState<IContacto[]>([])
  useEffect(() => {
    TraerContacto().then((res) => {
      console.log(...res);
      setcontactos([...res]);
    });
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit } = useForm<IContacto>();
  const onaddNuevoCon = async (datoContacto: IContacto) => {
    //aqui es donde enviamos los datos al backend
    console.log(datoContacto)
    await addproducto(datoContacto)
    //esta última línea recarga la página al añadir producto
    //idea de francisco parra navarro
    alert('Datos enviados.')
  }

  return (
    <main id='backend' style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center" }}>
      <form onSubmit={handleSubmit(onaddNuevoCon)} noValidate autoComplete="off" style={{ display: "flex", gap: ".5rem", flexFlow: "row wrap" }}>
        <TextField
          {...register("nombre")}
          label="Nombre"
          fullWidth
        />

        <TextField
          {...register("correo")}
          autoFocus
          margin="dense"
          label="Correo electrónico"
          type="text"
          fullWidth
        />

        <TextField
          {...register("tele")}
          label="Teléfono"
          fullWidth
        />

        <TextField
          {...register("descripcion")}
          id="cpu"
          label="Comentarios"
          fullWidth
          placeholder='Me gustaría contactar con usted...'
        />

      </form>
      <div className="botones" style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <Button style={{fontSize:"1.5rem"}} type='submit' onClick={handleSubmit(onaddNuevoCon)} color="primary">
          Enviar Datos
        </Button>
      </div>
    </main >

  )
}


