const prompt = require("prompt-sync")();

let edad = parseInt(prompt("Escribe tu edad: "));

if (edad >= 18) {
    console.log("Acceso permitido");
} else {
    console.log("Denegado");
}