//para los arrays es mejor usar let

//array es una variable multivaluada, contiene una lista/conjunto de valores
//declaracion e inicializacion del array
let valores =[]; //array vacio
valores.push(2);
valores.push(6);
valores.push(7);
//push inserta valores al final de array
//estas 2 lineas son iguales, normalmente se usa la 2ª linea
//valores =[22,23,24,65]; //ahora le damos valor
//en la línea inferior creamos el array y le damos contenido
let valores1 =[34,12,75,86]; //array vacio
console.log(valores);

let edades=valores;
edades.push(1222);
edades.push('push en edades')
console.log(edades,valores);

let datos = [...valores];
//... es un operador llamado spread que copia el contenido de valoes
//sin igualarse a la variable
console.log(edades, valores,datos);
datos.push('push de datos');
console.log(datos);

//se añade por delante o detras un valor o cadena de caracteres 
let datos2=[99,...valores];
console.log(datos2);
let datos3=[...valores,111];
console.log(datos3.push(13));
console.log(datos.length);

//metodos/funciones sobre arrays--> length es una propiedad
//foreach recorre los elementos de un array vector lista arreglo
datos.forEach(function(valor){
    console.log('valor=',valor)
})
//cuando tenemos una funcion dentro de otra a esto se le llama
//funcion callback
console.log('**********************')
datos.forEach((ele)=>{
    console.log(ele)
})
datos.forEach((ele) =>(console.log(ele)))