import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { firebaseConfig } from "./FBConfig";
import { nanoid } from "nanoid";

import lproductos from "../datos/lproductos.json"
import { IContacto } from "../components/interfaces/contactos";

//ahora se conecta la base de datos con la aplicación/projecto
export const app = initializeApp(firebaseConfig) //importa las credenciales de FB
export const conexiondb = getFirestore(app) //se conecta a la base de datos

//listar contenido de firebase
export const TraerContacto = async (): Promise<IContacto[]> => {
    let Productos: IContacto[] = [];
    const contactosRef = collection(conexiondb, "contacto");
    const ContactosDocs = await getDocs(contactosRef);
    ContactosDocs.forEach(doc => {
        const contactosolo = { ...doc.data() }
        Productos.push(contactosolo as IContacto)
    })
    console.log(Productos)
    return Productos;
}


//añadir productos nuevos
export const addproducto = async (data: IContacto) => {
    try {
        console.log('Insertando en FB el objeto FB', data);
        const nuevoDato = { codigo: nanoid(20), ...data };
        const productRef = doc(conexiondb, "contacto", nuevoDato.codigo);
        await setDoc(productRef, nuevoDato);
    }
    catch (error) {
        console.log(error)
    }
}

// carga masiva
export const cargarprod = async () => {
    try {
        console.log('carga de datos...');
        lproductos.map(async (lproducto) => {
            const codigo = nanoid(20);
            const docRef = doc(conexiondb, "contacto", codigo);
            await setDoc(docRef, { codigo: codigo, ...lproducto });
            window.location.reload();
        });
    } catch (error) {
        console.log(error);
    }
};

// eliminar productos
export const delproduct = async (codigo: string) => {
    await deleteDoc(doc(conexiondb, "contacto", codigo))
    window.location.reload();
}