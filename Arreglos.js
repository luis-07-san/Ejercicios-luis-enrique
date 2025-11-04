//declaraccion de arreglos 
/* tipos de datos
number 
string 
boolean
null
undifined
object
array
function
*/
function DatosArreglos(){
    const Datos = [3,7,9,3,2];
    let suma = 0;
    for (let i = 0; i < Datos.length; i++){
        if (Datos[i] % 2 === 0) {
            suma += Datos[i];
            console.log(`la posicion es ${i} y el valor es ${Datos[i]}`);
        }
    }
    console.log(`la suma de los arreglos es: ${suma}`);
}
DatosArreglos();