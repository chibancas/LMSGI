import React from 'react'
import { ProductosPage } from '../Productos/ProductosPage'
import ReactPlayer from 'react-player'

export const Inicio = () => {
  return (
    <main id="home">
      <h1>Bienvenido</h1>

      <p>
        ¡Bienvenido a nuestra tienda de ordenadores gaming de sobremesa! Descubre una amplia selección de equipos potentes diseñados para los aficionados al gaming. Con tecnología de vanguardia y un rendimiento excepcional, nuestros ordenadores te sumergirán en emocionantes aventuras virtuales. Explora nuestra web y encuentra el ordenador perfecto para llevar tus habilidades de juego al siguiente nivel. ¡Estamos aquí para ayudarte a disfrutar de una experiencia de juego inigualable con nuestros ordenadores gaming de sobremesa de alta calidad!
      </p>
      <div id="video">
        <ReactPlayer
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: '0', left: '0' }}
          config={
            {
              youtube: {
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                  start: 81,
                  end: 120
                }
              }
            }
          }
          url="https://www.youtube.com/watch?v=hP08D38Yi3I"
        />
      </div>
    </main>
  )
}
