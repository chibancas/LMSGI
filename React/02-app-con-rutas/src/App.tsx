import './App.css';
import Header from './components/structura/header/Header';
import { HomePage } from './pages/Home/Home';
import Main from './pages/Main/Main';
// import Main from './components/structura/main/Main';
const App=()=>{
  return (
    <>
      <HomePage></HomePage>
      <Header/>
      <Main/>
    </>
  );
}

export default App;
