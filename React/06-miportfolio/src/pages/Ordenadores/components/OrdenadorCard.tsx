
import React, { FC } from 'react'
import { Data } from '../../../data/seed';
import { IOrdenador } from '../interfaces/IOrdenadores'
// interface Props{
//   ordenador:IOrdenador
// }

//componente que recibe un parámetro de entrada
//1 se declara el tipo (interface) de ese dato de entrata
interface Inputdata{
  equipo:IOrdenador
  //puede haber + parámetros de entrada
}

//2 definir el parámetro de entrada en el componente
export const OrdenadorCard:FC<Inputdata> = ({equipo}) => {
  return (
    <div className='equipo'>
      <h2>{equipo.nombre}</h2>
      <span>{equipo.marca}</span>
      <span>{equipo.precio.real}</span>
    </div>
  )
};
export default OrdenadorCard
