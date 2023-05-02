import React from 'react'
import { useFirebaseApp } from 'reactfire'
import { getCategorias } from '../firebase/FBcategorias'

export const CategoriasPage = () => {
  getCategorias()
        .then(res=>{
          console.log(...res)
        })
  return (
    <div>FirebasePage</div>
  )
}
