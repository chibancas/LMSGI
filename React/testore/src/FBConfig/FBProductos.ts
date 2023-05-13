import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { firebaseConfig } from "./FBConfig";
import { IProductos } from "../components/interfaces/productos";
import { nanoid } from "nanoid";

//ahora se conecta la base de datos con la aplicación/projecto
export const app = initializeApp(firebaseConfig) //importa las credenciales de FB
export const conexiondb = getFirestore(app) //se conecta a la base de datos

//listar contenido de firebase
export const TraerProductos = async (): Promise<IProductos[]> => {
    let Productos: IProductos[] = [];
    const productosRef = collection(conexiondb, "Ordenadores");
    const ProductosDocs = await getDocs(productosRef);
    ProductosDocs.forEach(doc => {
        const productosolo = { ...doc.data() }
        Productos.push(productosolo as IProductos)
    })
    console.log(Productos)
    return Productos;
}


//añadir productos nuevos
export const addproducto = async (data: IProductos) => {
    try {
        console.log('Insertando en FB el objeto FB', data);
        const nuevoDato = { codigo: nanoid(20), ...data };
        const productRef = doc(conexiondb, "Ordenadores", nuevoDato.codigo);
        await setDoc(productRef, nuevoDato);
    }
    catch (error){
        console.log(error)
    }
}