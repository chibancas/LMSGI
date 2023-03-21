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
import { Main } from './structura/Main/Main';
import { Footer } from './structura/Footer/Footer';


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
          <Route path='fun' element={<Fun/>}/>
          <Route path='contacto' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
