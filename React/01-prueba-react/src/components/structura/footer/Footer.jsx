import React from "react";
import './Footer.css';
import Mapa from "./mapa/Mapa";
import Sociales from "./sociales/Sociales";
const Footer=() =>{
    return(
        <footer>
            <h3>Esto oes el footer</h3>
            <Mapa></Mapa>
            <Sociales></Sociales>
        </footer>
    )
}
export default Footer;