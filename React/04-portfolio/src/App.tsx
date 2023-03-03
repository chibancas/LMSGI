import React from 'react';
import { Form, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './commons/Navbar/Navbar';
import { ContactPage } from './pages/Contacto/Contacto';
import { FormacionPage } from './pages/Formacion/Formacion';
import { Main } from './pages/Main/Main';
import { Qsomospage } from './pages/Qsomos/qsomos';
import { ServiciosPage } from './pages/Servicios/Servicios';

const App=()=> {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route path='servicios' element={<ServiciosPage/>}/>
          <Route path='formacion' element={<FormacionPage/>}/>
          <Route path='qsomos' element={<Qsomospage/>}/>
          <Route path='contacto' element={<ContactPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
