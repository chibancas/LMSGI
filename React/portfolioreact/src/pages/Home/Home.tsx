import React from 'react'
import yo from './../../assets/yo-ia.jpg'
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
                    Aquí podrás ver los servicios que ofrezco, mis hobbies y además, podrás enviarme tus datos o consultar los míos y así poder contactar.
                </p>
                <Datos/>
                <figure>
                    <img src={yo} alt="Juan José Fernández Fernández" />
                </figure>
            </section>
        </main>
    )
}
