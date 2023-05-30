import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { TraerProductos, addproducto, cargarprod, delproduct } from '../../../FBConfig/FBProductos';
import { IProductos } from '../../interfaces/productos';
import { Button, Card, CardActionArea, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, MenuItem, TextField, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { TraerContacto } from '../../../FBConfig/FBContacto';
import { IContacto } from '../../interfaces/contactos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';






export const BackEnd = () => {
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
        TraerProductos().then((res) => {
            console.log(...res);
            setproductos([...res]);
        });
    }, []);


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
        <main id='backend'>
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
                        <form onSubmit={handleSubmit(onaddNuevoPro)} noValidate autoComplete="off" style={{ display: "flex", gap: ".5rem", flexFlow: "row wrap" }}>
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
            <Grid container spacing={2} style={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
                <h1 style={{width:"100%",textAlign:"center"}}>Datos Recibidos</h1>
                {
                    contactos.map((contactosolo) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Card className='tarjetas' style={{backgroundColor:"darkblue"}}>
                                    <CardContent>
                                        <Typography className='desborde' gutterBottom variant="h5" component="div">
                                            Nombre: {contactosolo.nombre}
                                        </Typography>
                                        <Typography className='desborde' gutterBottom variant="h5" component="div">
                                            Correo: {contactosolo.correo}
                                        </Typography>
                                        <Typography className='desborde' gutterBottom variant="h5" component="div">
                                            Teléfono: {contactosolo.tele}
                                        </Typography>
                                        <Typography className='desborde' gutterBottom variant="h5" component="div">
                                            Comentarios: {contactosolo.descripcion}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <TableContainer component={Paper} id='tabla'>
                <h1>Productos</h1>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ backgroundColor: "white" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">IMG</TableCell>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">ID</TableCell>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">NOMBRE</TableCell>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">CPU</TableCell>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">GPU</TableCell>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">RAM</TableCell>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">Tipo de RAM</TableCell>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">ALMACENAMIENTO</TableCell>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">ALMACENAMIENTO SECUNDARIO</TableCell>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">PSU</TableCell>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">ENFRIAMIENTO</TableCell>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">CATEGORIA</TableCell>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">PRECIO</TableCell>
                            <TableCell style={{ fontWeight: 500, letterSpacing: "1px" }} align="center">BORRADO</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productos.map((productosolo) => (
                            <TableRow
                                key={productosolo.codigo}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" className='fotopro'><img style={{ width: "10vw", filter: "" }} src={productosolo.img} alt={productosolo.Nombre} /></TableCell>
                                <TableCell align="center">{productosolo.codigo}</TableCell>
                                <TableCell align="center">{productosolo.Nombre}</TableCell>
                                <TableCell align="center">{productosolo.CPU}</TableCell>
                                <TableCell align="center">{productosolo.GPU}</TableCell>
                                <TableCell className='ram' align="center">{productosolo.RAM}</TableCell>
                                <TableCell align="center">{productosolo.TipoRam}</TableCell>
                                <TableCell align="center">{productosolo.Almacenamiento}</TableCell>
                                <TableCell align="center">{productosolo.Almacenamiento2}</TableCell>
                                <TableCell align="center">{productosolo.PSU}</TableCell>
                                <TableCell align="center">{productosolo.ENFRIAMIENTO}</TableCell>
                                <TableCell align="center">{productosolo.cat}</TableCell>
                                <TableCell className='precio' align="center">{productosolo.Precio}</TableCell>
                                <TableCell align="center">
                                    <Button style={{
                                        fontSize:"1rem"
                                    }} onClick={() => productosolo.codigo && delproduct(productosolo.codigo)}>
                                    <FontAwesomeIcon icon={faTrash} beatFade />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </main>
    );
}
