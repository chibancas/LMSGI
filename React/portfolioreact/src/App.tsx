import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './structura/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/Home';
import { ServiciosPage } from './pages/Servicios/Servicios';
import { Web } from './pages/Servicios/Web';
import { Admin } from './pages/Servicios/Admin';
import { Momae } from './pages/Servicios/Momae';
import { Fun } from './pages/Fun/Fun';
import { Contact } from './pages/Contact/Contact';


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
          <Route path='contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}
