import React from "react";
import './nav.css';
const nav = () =>{
    return(
        <nav>
            <h1>hola</h1>
            <a href="https://www.google.es" target='_blank'>
                <span>
                    Google
                </span>
            </a>
            <a href="https://www.facebook.es" target='_blank'>
                <span>
                    Facebook
                </span>
            </a>
            <a href="https://www.youtube.es" target='_blank'>
                <span>
                    Youtube
                </span>
            </a>
        </nav>
    )
};
export default nav;