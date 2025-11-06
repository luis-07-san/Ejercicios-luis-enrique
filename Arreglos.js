//declaraccion de arreglos 
/* tipos de datos
Number 
String 
Boolean
Null
Undifined
Object
Array
Function 
*/
function DatosArreglos(){
    let Datos = [3,7,9,3,2,6];
    /* let suma = 0;
    for ( i = 0; i < Datos.length; i++){
        if ((Datos[i] ) %2 ===0) ;
            suma += Datos[i];
            console.log(`la posicion es ${i} y el valor es ${Datos[i]}`);
        //console.log(`la posicion es ${i} y el valor es ${Datos[i]}`);
    }
    console.log(`la suma de los arreglos es: ${suma}`); */


// formas de recorrer un arreglo

    // For..of
   /*  for (let numeros of Datos){
        console.log(`los datos del arreglo son: ${numeros}`);
 */

    // For..in
   /*  for ( let numeros in Datos){
        console.log(`los datos son: ${Datos[numeros]}`);
    } */

    //For..Each
    /* Datos.forEach(function(numeros){
    console.log(numeros);
    }) */

//funcion flecha
    //Datos.forEach(numeros=> console.log(numeros));

// while
   /* let i = 0;
     while(i<Datos.length){
        console.log (Datos[i]);
        i++;
    } */

 //do..while
 /* do {
    console.log(Datos[i]);
    i++;
    } while (i < Datos.length); */

// metodo map
    //Datos.map(numeros => console.log(numeros*2))

// filter
/* const newArreglo = Datos.filter ((numeros) =>{
    return numeros <7;
})
console.log (newArreglo); */

//reduce
let suma =0;
Datos.reduce((a,b)=> suma =a+b)
console.log (suma);
}
DatosArreglos();