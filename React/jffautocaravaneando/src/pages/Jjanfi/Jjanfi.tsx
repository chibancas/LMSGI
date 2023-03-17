import React from 'react'
import foto1 from './../../assets/Foto1.jpg'
import foto2 from './../../assets/Foto2.jpg'

export const Jjanfi = () => {
    return (
        <main>
            <h1>Amphitryon</h1>
            <p>Esos son los tres ejes de uno de los buques insignia de Benimar: el Amphitryon 998. Una autocaravana integral de 7,4 metros, con dormitorio tipo suite que permite una separación completa de estancias y cama abatible sobre cabina, que añade dos plazas de noche sin comprometer el espacio disponible; por lo que se presenta como un modelo perfecto para familias como parejas que buscan espacio y confort.</p>
            <div>
                <figure>
                    <img src={foto1} />
                </figure>
                <figure id='mapa'>
                    <h5>Integral</h5>
                    <span>Cama central</span>
                    <img src={foto2} />
                    <li>Benimar Amphitryon 998 Alfa</li>
                    <li>Con 4 plazas para comer, dormir y circular</li>
                    <li>Cama isla</li>
                    <li>Motor Fiat de 160CV</li>
                    <li>Cocina con horno a gas</li>
                </figure>
            </div>
        </main>
    )
}
