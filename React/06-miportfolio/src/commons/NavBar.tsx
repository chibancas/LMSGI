import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import Home from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ComputerIcon from '@mui/icons-material/Computer';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import { makeStyles } from '@material-ui/core';
import { red } from '@mui/material/colors';

const useStyle=makeStyles({
  miBoton:{
    border:10,
    padding:10,
  }
});
const estilos=useStyle();
export const NavBar = () => {
  return (
    <nav>
        <Link to='home'>
          <Button className={estilos.miBoton} color='error' startIcon={<HomeIcon/>}>Home</Button>
        </Link>
        <Link to='servicios'>
          <Button color='error' startIcon={<LocalOfferIcon/>}>Servicios</Button>
        </Link>
        <Link to='formacion'>
        <Button color='error' startIcon={<SchoolIcon/>}>Formacion</Button>
        </Link>
        <Link to='equipos'>
          <Button color='error' startIcon={<ComputerIcon/>}>Ordenadores</Button>
        
        </Link>
        <Link to='qsomos'>
          <Button color='error' startIcon={<InfoIcon/>}>Quienes Somos</Button>
        </Link>
        <Link to='contacto'>
        <Button color='error' startIcon={<ContactsIcon/>}>Contacto</Button>
        </Link>
    </nav>
  )
}
