import React, { useEffect, useState } from 'react'

export const ServiciosPage = () => {

  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(res => res.results)
    .then(res => setPokemons(res))
  },[])
  return (
    <>
      <h2>Listado de pokemon</h2>
      <ul>
        {
          pokemons.map(({name,url})=>(
            <li>
              <span>
                {name}
              </span>
              <span>
                {url}
              </span>
            </li>
          ))
        }
      </ul>
    </>
  )
}
