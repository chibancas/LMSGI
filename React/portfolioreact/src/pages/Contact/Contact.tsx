import React from 'react'

export const Contact = () => {
    return (
        <main>
            <section id='contact'>
                <h2>Manda tu información</h2>
                <p>
                    Si lo desea, puede mandarme su información para
                    ponerme en conttacto con usted.
                </p>
                <form>
                    <h2>Tus datos</h2>
                    <input type="text" name="name" id="name" placeholder='Nombre y apellidos' />
                    <input type="email" id='email' placeholder='Dirección de correo electrónico' />
                    <input type="text" name="tel" id="tel" placeholder='Número de teléfono' />
                    <input type="button" value="Enviar" id='send' />
                </form>
                
            </section>
        </main>
    )
}
