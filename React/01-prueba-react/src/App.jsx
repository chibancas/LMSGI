import './App.css';
import { HereosList } from './components/HereosList';
import { heroe, lenguajes } from './data/heroes';
import Header from './components/structura/header/Header';
import Main from './components/structura/main/Main';
import Footer from './components/structura/footer/Footer';
import React from 'react';
const App = () => {
  let titulo = "Los Superhéroes";
  return(
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      {/* <h1 className='titulo'> { titulo } </h1>
      <HereosList heroes={ heroe } /> */}
    </>

  )
}
export default App; //esto es necesario para que se muestre el código













//tabla hecha de superhéores

// import './App.css';
// import { heroe, titulo1 } from "./data/heroes";
// const App=()=>{
//   let titulo='Tabla Héroes'
//   return(
//     <>
//     <h1>{titulo}</h1>
//     <table>
//       <thead>
//         <tr>
//           <td>ID</td>
//           <td>Nombre</td>
//           <td>Compañia</td>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           heroe.map((heroe) =>{
//             console.log(heroe);
//             return(
//                 <tr>
//                   <td>{heroe.id}</td>
//                   <td>{heroe.nombre}</td>
//                   <td>{heroe.owner}</td>
//                 </tr>
//             )
//           })
//         }
//       </tbody>
//     </table>
//     </>
//   )
// };
