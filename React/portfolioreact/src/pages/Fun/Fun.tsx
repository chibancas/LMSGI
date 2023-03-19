import React from 'react'
import forza from "./../../assets/forza.jpg"
import unchard from "./../../assets/uncharted.jpg"
import tlou from "./../../assets/tlou.jpg"
import gears from "./../../assets/gears.png"
import gta from "./../../assets/gta.jpg"
import cell from "./../../assets/blacklist.jpg"

const games = [
  {
    foto: forza,
    alt: "Foto de Forza Horizon 4"
  },
  {
    foto: gears,
    alt: "Foto de Gears 5"
  },
  {
    foto: tlou,
    alt: "Foto de The Last Of Us"
  },
  {
    foto: gta,
    alt: "Foto de GTA Online"
  },
  {
    foto: unchard,
    alt: "Foto de Uncharted 4"
  },
  {
    foto: cell,
    alt: "Foto de Splinter Cell"
  }
]

export const Fun = () => {
  return (
    <main>
      <section>
        <h2>Compartimos aficiones</h2>
        <p>
          Pensaréis que no debería hablar de mis hobbies en un contexto formal como este, pero
          yo opino lo contrario. Encontrar un trabajador que comparta las mismas aficiones
          puede ser muy beneficioso para la satisfacción y motivación laboral.
        </p>
        <article id='games'>
          <h3>
            Videojuegos
          </h3>
          <p>Aquí dejo algunos de los videojuegos que más me gustan</p>
          {
            games.map((game) => {
              return (
                <figure>
                  <img src={game.foto} alt={game.alt} />
                  <span>{game.alt}</span>
                </figure>
              )
            })
          }
        </article>
      </section>
    </main >
  )
}
