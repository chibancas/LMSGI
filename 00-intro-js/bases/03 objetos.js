//tipos de variables--> number(enteros y decimales), string, boolean(true or false)
//objetos--> variables de tipo complejo que contienen estructuras de datos de cualquier tipo
//un objeto es de tipo complejo formado por parejas propiedad:valor separados por comas

const persona = {
    nif: '49173550c',
    nombre: 'juan jose',
    apellido: 'fernandez',
    edad: 20,
    casado: false,
    //direccion es una variable compleja
    direccion:{
        pais:'españa',
        comunidad_autonoma: 'andalucía',
        provincia:'almería',
        pueblo:'vera',
        codigo_postal: '04629',
        calle:'isabel la católica',
        nº_portal: '77',
    },
    //todos los objetos anteriores son objetos monovaludada
    //y aficiones es una variable multivaludada
    aficiones:['ciclismo','natacón','petanca']
};

//con esto intentamos duplicar el objeto pero no es posible ya que la igualdad se aplica en ambas direcciones
// const persona2 = persona;
// persona2.nombre='ana maria';
// persona2.edad=25;
// delete persona2.aficiones;
// console.log(persona,persona2);

//ahroa si duplicamos
//operador spread ...opera  ...array
console.log({...persona})
console.log({...persona.aficiones});

//ahroa si duplicamos

const persona3={...persona};
persona3.nombre='ana';
persona3.edad=25;
delete persona3.aficiones;
console.log(persona, persona3);
// console.log(persona);
// console.log(persona.edad + 30);
// console.table(persona);
// console.log(persona.aficiones);
// console.log(persona.aficiones[0]);
// console.log(persona.aficiones[1]);
// console.log(persona.aficiones[2]);
// //el indice va entre corchetes que sirve para mostrar valores de una variale multivaludada
// // el indice comienza en 0
// console.log(persona.aficiones.length);
// console.log(persona.aficiones.length-1);
// let ultimo=persona.aficiones.length-1;
// console.log(persona.aficiones[ultimo])