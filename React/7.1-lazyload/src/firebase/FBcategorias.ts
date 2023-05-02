import { initializeApp } from 'firebase/app'
import React from 'react'
import { firebaseConfig } from './config/firebaseConfig'
import { collection, doc, getDocs, getFirestore } from 'firebase/firestore';
import { ICategorias } from './interfaces/ICategorias';
import { useFirestore } from 'reactfire';
import { CategoriasPage } from '../pages';



// export const app=initializeApp(firebaseConfig);
// export const db=getFirestore();

// export const getCategorias=async ():Promise<ICategorias[] > =>{
//     let categorias: ICategorias[]=[];
//     const categoriasRef= collection(useFirestore(), "categorias")
//     const categoriasDocs=await getDocs(categoriasRef);
//     categoriasDocs.forEach(doc=>{
//         const categoria={...doc.data()}
//         categorias.push(categoria as ICategorias)
//     })
//     console.log(categorias)
//     return categorias
// }


export const app = initializeApp(firebaseConfig)
export const db = getFirestore() //use database para las credenciales

export const getCategorias = async ():Promise<ICategorias[]> => {
    let categorias: ICategorias[] = []; //array inicializado al vacio
    // const categoriasRef = collection(useFirestore(), "Categorias") //seleccionamos la coleccion categorias
    const categoriasRef = collection(db, "Categorias"); //seleccionamos la coleccion categorias
    const CategoriasDocs = await getDocs(categoriasRef) //obtengo todos los datos, es como un select *
    CategoriasDocs.forEach(doc => {
        const categoria = { ...doc.data() }
        categorias.push(categoria as ICategorias)
    });
    console.log(categorias);
    return categorias;
}