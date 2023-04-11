import React from 'react'
import forza from "./../../assets/forza.jpg"
import unchard from "./../../assets/uncharted.jpg"
import tlou from "./../../assets/tlou.jpg"
import gears from "./../../assets/gears.png"
import gta from "./../../assets/gta.jpg"
import cell from "./../../assets/blacklist.jpg"
import spo from "./../../assets/spotify.jpg"
import { NavLink } from 'react-router-dom'
const music = [
  {
    enlace: "https://open.spotify.com/playlist/2y3fwIaDs5aFh6KQkyjbST?si=13ebfc4165124841",
    portada: spo
  }

]

const games = [
  {
    foto: forza,
    alt: "Para mi Forza Horizon 4 es una de las formas más bonitas de conducir y ver Reino Unido desde una pantalla. Un juego de conducción sublime que mezcla mecánicas arcade con algunas de simulación y una representación ambiental sin igual en la saga Forza Horizon."
  },
  {
    foto: gears,
    alt: "Gears 5 fue el primer juego que probé de la saga Gears y me dejó con ganas de más. Historia atrapadora, gunplay muy bien llevado a la tercera perosna y escenarios lineales muy amplios."
  },
  {
    foto: tlou,
    alt: "Título que fue lanzado en 2013 y por su gran historia, gampley y cariño de la comunidad ha sido lanzado 3 veces ya, lástima que sólo sea exclusivo de la compañía nipona Sony."
  },
  {
    foto: gta,
    alt: "No hay mucho que decir, una revolución en su época y todavía mantiene una muy considerable comuniad online activa."
  },
  {
    foto: unchard,
    alt: "Exclusivo de Sony indispensable si te gustan los disparos y las buenas historias. "
  },
  {
    foto: cell,
    alt: "Para mi un juego desconocido hasta 2022. En mi opinión, este título es más bien un juego que ofrece gameplay de sigilo, dejando atrás la historia."
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
        <article id='music'>
            <h3>
              Mi Música
            </h3>
            <a href='https://open.spotify.com/playlist/2y3fwIaDs5aFh6KQkyjbST?si=13ebfc4165124841' target="_blank">
              <figure>
                <img src={spo} />
                <span>Pinche aquí</span>
              </figure>
            </a>
        </article>
      </section>
    </main >
  )
}
