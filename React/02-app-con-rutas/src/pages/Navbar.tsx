import React from 'react';
import { Link,NavLink, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import { ServiciosPage } from './Servicios/Servicios';

export const Navbar = () => {
  return (
    <>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'Sservicios'}>Servicios</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='Servicios' element={<ServiciosPage/>}>Servicios</Route>
        </Routes>
    </>
  )
}
