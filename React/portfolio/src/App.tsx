import React from 'react'
import { Footer } from './structura/Footer/Footer'
import { Header } from './structura/Header/Header'
import { Main } from './structura/Main/Main'
import './App.css'
import { NavBar } from './structura/Header/NavBar'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home/Home'
import { ContactoPage } from './pages/Contacto/Contacto'
import { YtPage } from './pages/Contacto/Yt'
import { FbPage } from './pages/Contacto/Fb'
import { GhPage } from './pages/Contacto/Gh'

export const App = () => {
  return (
    <>
        <Header/>
        <Main/>
        <Footer/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='contacto' element={<ContactoPage/>}>
            <Route path='yt' element={<YtPage/>}/>
            <Route path='fb' element={<FbPage/>}/>
            <Route path='gh' element={<GhPage/>}/>
          </Route>
        </Routes>
    </>
  )
}
