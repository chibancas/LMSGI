import './App.css';
import { heroe, titulo1 } from "./data/heroes";
const App=()=>{
  let titulo='Tabla Héroes'
  return(
    <>
    <h1>{titulo}</h1>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Nombre</td>
          <td>Compañia</td>
        </tr>
      </thead>
      <tbody>
        {
          heroe.map((heroe) =>{
            console.log(heroe);
            return(
                <tr>
                  <td>{heroe.id}</td>
                  <td>{heroe.nombre}</td>
                  <td>{heroe.owner}</td>
                </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
};

export default App; //esto es necesario para que se muestre el código