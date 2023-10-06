import React from 'react'
import desk from './../../assets/TeamViwer.png'
import mexchange from './../../assets/MExchange.png'
import apache from './../../assets/apache.png'
import ftp from '../../assets/ftp.png'
import { NavLink } from 'react-router-dom'

export const Admin = () => {
  return (
    <article id="admin">
      <h3>
        Controlo tus equipos.
      </h3>
      <p>
        Gracias a los estudios que cursé en en el CFGM
        en el centro IES Cura Valera soy capaz de administrar equipos con
        S.Os Windows y Linux.
      </p>
      <nav>
        <NavLink target="_blank" to={'https://www.youtube.com/watch?v=MaM1xvN0_aw'}>
          <figure>
            <img src={desk} alt="Video de TeamViwer en windows y Linux" />
          </figure>
          <span>
            Escritorio Remoto
          </span>
        </NavLink>

        <NavLink target="_blank" to={"https://www.youtube.com/watch?v=38_9ZGLWFHw"}>
          <figure>
            <img src={mexchange} alt="Video instalación de Microsoft Exchange" />
          </figure>
          <span>
            Servidor de Correo
          </span>
        </NavLink>

        <NavLink target="_blank" to={'https://www.youtube.com/watch?v=2YX3TgcrrkU&t'}>
          <figure>
            <img src={ftp} alt="Video creación de un servidor FTP" />
          </figure>
          <span>
            Servidor FTP
          </span>
        </NavLink>

        <NavLink target="_blank" to={'https://www.youtube.com/watch?v=NedgvbUdbbE'}>
          <figure>
            <img src={apache} alt="Video instalación de servidor Apache" />
          </figure>
          <span>
            Servidor Apache
          </span>
        </NavLink>
      </nav>
    </article>

  )
}
