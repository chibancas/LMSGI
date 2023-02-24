import './header.css';
import Navbar from './../../commons/Navbar';
import logo from '../../../logo.svg';
const Header=()=>{
    return(
        <header> 
            <figure>
                <img src={logo} alt="" />
            </figure>
            <Navbar/>
        </header>
    )
}

export default Header;