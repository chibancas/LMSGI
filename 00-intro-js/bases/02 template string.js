//template string
// + complejo conctenar string y variables
const nombre='juan jose';
const apellidos='fernandez';
const fecha=2003;
const anio=2023;


// 'Te llamas morgado, jose antonio'
//sustitucion de variables

function edad (fecha){
    return(2022-fecha)
}

let cadena =`te llamas ${nombre}, ${apellidos} y tienes ${anio-fecha} años`

console.log(`${cadena}`)

