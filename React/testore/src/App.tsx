import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header, ProductosPage } from './components/Pages';
import { Grid } from '@material-ui/core';
import { Rutas } from './components/interfaces/routes';


export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {
          Rutas.map(({ path, component: Component }) => (
            <Route path={path} key={path} element={<Component />} />
          ))
        }
      </Routes>
      <Footer />
    </>
  )
}


export default App;
