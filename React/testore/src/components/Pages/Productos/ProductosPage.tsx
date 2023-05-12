import { useState, useEffect } from 'react'
import { collection, getDoc, getDocs, deleteDoc } from "firebase/firestore"
import { conexiondb } from '../barril'
import { IProductos } from '../../interfaces/productos'
import { TraerProductos } from '../../../FBConfig/FBProductos'

export const Productos = () => {

  const [productos, setproductos] = useState<IProductos[]>([])
  useEffect(() => {
    TraerProductos()
      .then(answer => {
        console.log(...answer)
        setproductos([...answer])
      })
  }, [])
  return (
    <section id="productos">
      <article>
        {
          productos.map((productosolo) => {
            return (
              <article>
                <h2>{productosolo.nombre}</h2>
                <span id='precio'>{productosolo.precio}</span>
              </article>
            )
          })
        }
      </article>
    </section>
  )
}