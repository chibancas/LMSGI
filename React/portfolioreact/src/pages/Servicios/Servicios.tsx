import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const ServiciosPage = () => {
    return (
        <main>
            <section id='servicios'>
                <h2>¿Que te ofrezco?</h2>
                <nav>
                    <NavLink to={'web'} target="_blank">Creación y mantenimiento de páginas web</NavLink>
                    <NavLink to={'admin'} target="_blank">Gestión y mantenimiento de equipos.</NavLink>
                    <NavLink to={'momae'} target="_blank">Montaje y mantenimienot de equipos.</NavLink>
                </nav>
                <Outlet />
            </section>
        </main>
    )
}