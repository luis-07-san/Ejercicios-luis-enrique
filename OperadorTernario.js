// libreria para leer datos por consola
const prompt = require("prompt-sync")();

//funcion de inicio de operaciones 
function calificacion() {
    let cal = parseInt(prompt("ingrese la calificacion: "));
    let respuesta = cal >= 6 && cal >= 8 ? "excelente" : "aprobado";
    console.log(`la calificacion es ${cal} y es ${respuesta}`);
}

calificacion();

