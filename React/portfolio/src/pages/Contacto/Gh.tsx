import React from 'react'

const logogh ='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'

export const GhPage = () => {
  return (
    <section id="gh">
        <figure>
            <img id='logoGH' src={logogh}/>
        </figure>
        <h2>
            Mis trabajos.
        </h2>
    </section>
  )
}
