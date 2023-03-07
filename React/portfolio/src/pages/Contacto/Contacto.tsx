import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const ContactoPage = () => {
  return (
    <>
        <section id="contacto">
            <nav>
                <Link to={'yt'}>Encuéntrame en Youtube</Link>
                <Link to={'fb'}>¿Quieres algo más cercano? Buscame en FaceBook</Link>
                <Link to={'work'}>Observa mis trabajos</Link>
            </nav>
            <Outlet/>
        </section>
    </>
  )
}
