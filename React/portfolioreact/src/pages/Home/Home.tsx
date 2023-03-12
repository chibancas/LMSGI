import React from 'react'
import yo from './../../assets/yo2.jpg'

export const HomePage = () => {
    return (
        <main>
            <section id='home'>
                <h2>
                    Portfolio React JS
                </h2>
                <p>
                    ¡Bienvenido a mi portfolio en línea! Mi nombre es
                    Juan José Fernández Fernández, y soy estudiante del CFGS de ASIR.
                </p>
                <p>
                    Esta web ha sido creada con ReactJS, lo que ha su vez ha involucrado a HMTL5 y CSS3.
                    Aquí podrás ver las habilidades que ya he desarrollado y las que me quedan por desarrollar, además de
                    mi carrera académica.
                </p>
                <p>
                    En esta web verás los distintos proyectos que he ido creando gracias a las habilidades obtenidas en
                    CFGM de SMR en el centro IES Cura Valera y mi trayectoria académica.
                    Me apasiona el mundo de la informática, sobre todo el desarrollo web y la administración de sistemas operativos.
                    Me apasiona crear soluciones innovadoras y creativas para abordar los desafíos del mundo actual, y me siento muy orgulloso de compartir mi trabajo contigo en este portfolio. Espero que lo disfrutes y te resulte útil, y no dudes en contactarme si tienes alguna pregunta o si te gustaría colaborar en un proyecto futuro. ¡Gracias por visitar mi portfolio en línea!
                </p>
                <figure>
                    <img src={yo} alt="Juan José Fernández Fernández" />
                </figure>
            </section>
        </main>
    )
}
