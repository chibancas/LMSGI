import { useState, useEffect } from 'react'
import { collection, getDoc, getDocs, deleteDoc } from "firebase/firestore"
import { conexiondb } from '../barril'
import { IProductos } from '../../interfaces/productos'
import { TraerProductos, addproducto } from '../../../FBConfig/FBProductos'
import { useForm } from 'react-hook-form'

export const Productos = () => {
  //listar productos
  const [productos, setproductos] = useState<IProductos[]>([])
  useEffect(() => {
    TraerProductos()
      .then(answer => {
        console.log(...answer)
        setproductos([...answer])
      })
  }, [])
  //listar productos


  //registeer y handleSubmit son funciones de react hook form
  //se iguala la interfaz a un formulario y ponemos los parentesis
  //de las funciones
  const {register,handleSubmit}=useForm<IProductos>();

  const onaddNuevoPro=async(datoProducto:IProductos)=>{
    //aqui es donde enviamos los datos al backend
    console.log(datoProducto)
    await addproducto(datoProducto)
    //esta última línea recarga la página al añadir producto
    window.location.reload()
  }
  return (
    <main id="productos">
      <article>
        {
          // listar productos
          productos.map((productosolo) => {
            return (
              <>
                <h2>{productosolo.nombre}</h2>
                <span id='precio'>{productosolo.precio}</span>
              </>
            )
          })
        }
      </article>
      <form onSubmit={handleSubmit(onaddNuevoPro)} noValidate>
        <input
        {...register("nombre")}
        type="text" id='nombre' placeholder='Nombre'/>
        
        <input
        type="text"
        {...register("precio")}
        id='nombre' placeholder='Precio'/>
        <button type='submit'>enviar</button>
      </form>
    </main>
  )
}