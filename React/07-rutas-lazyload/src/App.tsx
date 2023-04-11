import React from 'react';
import './App.css';
import { HomePage, FormacionPage, ContactoPage, TrabajosPage, ServiciosPage } from './commons/pages/index';
import { NavBar } from './commons/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Main } from './commons/components/Main';
import { routes } from './commons/Routes';
const App = () => {
  return (
    <>
      <h1>ayudas</h1>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path='/' element={<Main />} />
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          )
        })}
      </Routes>
    </>
  );
}
export default App;