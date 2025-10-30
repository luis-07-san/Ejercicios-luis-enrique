const prompt = require ("prompt-sync")();
function sumaNumeros(){
    let numero ;
    let suma = 0 ;
    while (numero != 0){
numero = parseInt(prompt("Ingrese el numero !=0"));
suma = suma + numero ;
    }
    console.log ("la suma de los numeros ingresados es: ",suma )
}