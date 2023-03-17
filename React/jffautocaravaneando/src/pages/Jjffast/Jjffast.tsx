import React from 'react'
import van from '.././../assets/vans.png'

export const Jjffast = () => {
    return (
        <main id='fast'>
            <h1>
                Modelo Rapidom96
            </h1>
            <p>
                Uno de los grandes retos del mundo del autocaravaning ha sido conseguir un vehículo con el que poder disfrutar de viajes por carretera como si estuvieras en tu propia casa. Si bien es cierto que toda la gama Benimar está diseñada con todo lujo de detalles para viajar cómodamente, nuestra gama Amphitryon es la máxima expresión de amplitud y confort en una vivienda sobre ruedas. Dicha gama cuenta con las mejores autocaravanas globales del mercado, para que no tengas que prescindir de nada durante tus aventuras.
            </p>
            <figure>
                <img src={van} />
            </figure>
        </main>
    )
}

