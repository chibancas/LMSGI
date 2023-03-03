import React from "react";
export const HereosList=(props) =>{
    return(
        <>
            <h4>Listado de heroes</h4>
            <h2>Nuestro heroe favorito es {props.name}</h2>
        </>
    )
}