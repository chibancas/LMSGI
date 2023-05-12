import { initializeApp } from 'firebase/app'
import React from 'react'
import { firebaseConfig } from './config/firebaseConfig'
import { collection, doc, getDocs, getFirestore } from 'firebase/firestore';
import { ICategorias } from './interfaces/ICategorias';
import { useFirestore } from 'reactfire';
import { CategoriasPage } from '../pages';
import { nanoid } from 'nanoid';



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


// esto es para insertar
export const newCategoria = async (data: ICategorias)=>{
    try{
        console.log("Insertando en FB el objto ", data)
        const newData ={codigo:nanoid(20),...data}
    }catch(error){
        console.log(error)
    }
}