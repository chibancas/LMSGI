import React from 'react'
import yo from './../../assets/lola.jpg'
import { Datos } from './Misdatos'


export const HomePage = () => {
    return (
        <main>
            <section id='home'>
                <h2>
                    Portfolio React JS
                </h2>
                <p>
                    ¡Hola!.
                    Esta web ha sido creada con ReactJS, lo que ha su vez ha involucrado a HMTL5 y CSS3.
                    Aquí podrás ver las habilidades que ya he desarrollado y las que me quedan por desarrollar, además de
                    mi carrera académica.
                </p>
                <Datos/>
                <figure>
                    <img src={yo} alt="Juan José Fernández Fernández" />
                </figure>
            </section>
        </main>
    )
}
