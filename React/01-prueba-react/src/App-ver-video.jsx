import './App.css';
import { HereosList } from '../../../01-intro-js/src/components/HereosList';
import { heroes, lenguajes } from './data/heroes';
const App = () => {
  let titulo = "Los Superhéroes";
  return(
    <>
      <h1 className='titulo'> { titulo } </h1>
      <HereosList heroes={ heroes } />
    </>

  )
}
export default App;