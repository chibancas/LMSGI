import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import './servicios.css'

export const ServiciosPage = () => {
  return (
    <>
        <div id='intro'>
        <h2>Seccion servicios</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut fugit optio eligendi aliquid ipsa harum, debitis et cum neque non! Amet deserunt reiciendis doloribus sunt fugit facilis nihil illum perferendis.
        </p>
        </div>
        <Navbar/>
        <section>
          <Outlet/>
        </section>
    </>
  )
}
