import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const ServiciosPage = () => {
    return (
        <main>
            <section id='servicios'>
                <h2>¿Que te ofrezco?</h2>
                <nav>
                    <NavLink to={'web'}>Creación y mantenimiento de páginas web</NavLink>
                    <NavLink to={'admin'}>Gestión y mantenimiento de equipos</NavLink>
                    <NavLink to={'momae'}>Instalación de Redes</NavLink>
                </nav>
                <Outlet />
            </section>
        </main>
    )
}