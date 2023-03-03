import React from 'react'
import { Data } from '../../data/seed';
import { OrdenadorCard } from './components/OrdenadorCard';

const OrdenadoresListCard = () => {
  return (
    <>
        <h2>Listado de Ordenadores</h2>
        <section className='equipos'>
            {
              Data.equipos.map((equipo) =>(
                <OrdenadorCard key={equipo.nombre}
                equipo={equipo}
                />
              ))
            }
        </section>
    </>
  )
}

export default OrdenadoresListCard
