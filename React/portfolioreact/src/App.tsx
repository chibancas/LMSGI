import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './structura/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/Home';
import { Fun } from './pages/Fun/Fun';
import { Contact } from './pages/Contact/Contact';
import { ServiciosPage } from './pages/servicios/Servicios';
import { Web } from './pages/servicios/Web';
import { Admin } from './pages/servicios/Admin';
import { Momae } from './pages/servicios/Momae';
import { Footer } from './structura/Footer/Footer';


export const App = () => {
  return (
    <>
      <Header/>
      
      <Routes>
        <Route path='LMSGI/React/portfolioreact/' element={<HomePage/>}/>
          <Route path='LMSGI/React/portfolioreact/servicios' element={<ServiciosPage/>}>
            <Route path='servicios/web' element={<Web/>}/>
            <Route path='servicios/admin' element={<Admin/>}/>
            <Route path='servicios/momae' element={<Momae/>}/>
          </Route>
          <Route path='LMSGI/React/portfolioreact/fun' element={<Fun/>}/>
          <Route path='LMSGI/React/portfolioreact/contacto' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
