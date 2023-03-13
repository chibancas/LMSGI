import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './structura/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/Home';


export const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </>
  )
}
