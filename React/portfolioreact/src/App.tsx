import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './structura/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/Home';
import { Fun } from './pages/Fun/Fun';
import { Contact } from './pages/Contact/Contact';
import { Footer } from './structura/Footer/Footer';
import { Momae } from './pages/Servicios/Momae';
import { Admin } from './pages/Servicios/Admin';
import { ServiciosPage } from './pages/Servicios/Servicios';
import { Web } from './pages/Servicios/Web';


export const App = () => {
  return (
    <>
      <Header/>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
          <Route path='servicios' element={<ServiciosPage/>}>
            <Route path='web' element={<Web/>}/>
            <Route path='admin' element={<Admin/>}/>
            <Route path='momae' element={<Momae/>}/>
          </Route>
          <Route path='Fun' element={<Fun/>}/>
          <Route path='Contacto' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
