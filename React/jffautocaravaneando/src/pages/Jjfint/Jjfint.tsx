import React from 'react'

const videos = [
    {
        title: 'Fabricacion',
        url: 'https://www.youtube.com/embed/P_ToHAZZsBM',
    },
    {
        title: 'Amphitryon 940',
        url: 'https://www.youtube.com/embed/P_ToHAZZsBM',
    },
    {
        title: 'Amphitryon 957',
        url: 'https://www.youtube.com/embed/K28SgGe8cEI',
    },
    {
        title: 'Amphitryon 967',
        url: 'https://www.youtube.com/embed/e4aufoq39PA',
    },
    {
        title: 'Amphitryon 997',
        url: 'https://www.youtube.com/embed/zE2nqNVAVxg',
    },
    {
        title: 'Mileo 242',
        url: 'https://www.youtube.com/embed/RhHC9iJ_Dqc',
    }
]

export const Jjfint = () => {
    return (

        <main>
            <h1 className='borde'>Autocaravanas Integrales</h1>
            <p>Las autocaravanas integrales tienen asientos giratorios del conductor y diferentes zonas, como la sala de estar y el dormitorio, a las que se puede acceder directamente desde la cabina del conductor. </p><p>La longitud, explican, podría llegar a ser de 12 metros de largo y, en algunos casos (si supera los 3.500 kilogramos de MMA), es posible que para conducirla se necesite el carnet C. Sobre todo, lo que las diferencia del resto de autocaravanas, detallan en Caravaning K2, es que todo el conjunto de vivienda y cabina está integrado y se monta sobre un chasis, contando con la ventaja de que el espacio es único, es decir, la vivienda no está separada de la zona de conducción. </p>
            <section>
                <h2>Galeria</h2>
                {
                    videos.map((video) => {
                        return (
                            <article>
                                <h5>{video.title}</h5>
                                <iframe
                                    width="300"
                                    height="235"
                                    src={video.url}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                >
                                </iframe>
                            </article>
                        )
                    })
                }
            </section>
        </main>
    )
}
