import { HereosList } from '../../../01-intro-js/src/components/HereosList';
import './App.css';
import { heroes } from './data/heroes';
import { lenguajes } from './data/heroes';
import { HereosList } from '../../../01-intro-js/src/components/HereosList';
const App=() => {
  console.log('hola mundo desde react');
  console.log(heroes);
  let titulo='PCComponentes';
  return(
    <>
      <div className='titulo'>{titulo}</div>
      <ul>
        {heroes.map((heroe)=>{
          return(
            <li>{heroe.nombre}</li>
          )
        })}
        {lenguajes.map((idioma)=>{
          return(
            <li>{idioma.nombre}</li>
          )
        })}
      </ul>
      <ul>
        {
          lenguajes.map( (idioma)=>{
            return(
              <li>{idioma.nombre}</li>
            )
          } )
        }
      </ul>
    </>
  )
};

export default App;


// <></> mecanismo para agrupar etiqueteas
// function App1() {
//   console.log('')
//   return (
//     <div className="App">
//       <h1>Bienvenido Juan José</h1>
//     </div>
//   );
// }

// export default App;
