import React from 'react'
import morgado from './../../assets/morgado.png'
import react from './../../assets/logo.svg'
const asir= 'https://estudiarasir.com/wp-content/uploads/2022/02/estudiar-asir.jpg'
const router='https://reactrouter.com/ogimage.png'

export const HomePage = () => {
  return (
    <section id='home'>
        <p>
            Este portfolio ha sido creado con el propósito de ser presentado a 
            don <u>José Antonio Morgado Berruezo</u> como proyecto para el segundo trimestre
            del primer curso del Ciclo Fomrativo de Grado Superior de Administración de Sistemas Informáticos
            en Red, CFGS ASIR.
        </p>
        <figure>
          <img id='morgado' src={morgado} className='fotos'/>
          <img id='asir' src={asir} className='fotos' />
          <img id='react' src={react}/>
        </figure>
        <p>
          Al usar React y TypeScript para crear esta web se da por hecho que además se ha utilizado
          HTML5 y por lo tanto también CSS3. No es necesario mencionar que he usado librerías qeu ya vienen
          con el propio paqeute de React y librerías externas qeu las he tenido que ir agregando al proyecto.
        </p>
        <figure>
          <img src={router} className='fotos'/>
        </figure>
    </section>
  )
}
