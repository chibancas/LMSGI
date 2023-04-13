import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import { Route, Routes } from 'react-router-dom';
import { routes } from './commons/routes';
import { NavBar } from './commons/NavBar';

function App() {
  return (
    <>
      <header>
        <h1>Lazy Load</h1>
        <NavBar/>
      </header>
      <Routes>
        <Route path='/' element={<Main/>}>
        {
          routes.map((route)=>(
            <Route
              key={route.path}
              path={route.path}
              element={<route.component/>}
            />
          ))
        }
        </Route>
      </Routes>
    </>
  );
}

export default App;
