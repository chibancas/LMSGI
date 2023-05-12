import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./FBConfig";
import { IProductos } from "../components/interfaces/productos";

//ahora se conecta la base de datos con la aplicación/projecto
export const app = initializeApp(firebaseConfig) //importa las credenciales de FB
export const conexiondb=getFirestore(app) //se conecta a la base de datos

//listar contenido de firebase
export const TraerProductos=async ():Promise<IProductos[]> =>{
    let Productos:IProductos[]=[];
    const productosRef=collection(conexiondb,"Ordenadores");
    const ProductosDocs=await getDocs(productosRef);
    ProductosDocs.forEach(doc=>{
        const productosolo={...doc.data()}
        Productos.push(productosolo as IProductos)
    })
    console.log(Productos)
    return Productos;
}