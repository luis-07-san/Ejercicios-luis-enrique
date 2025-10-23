const prompt = require("prompt-sync")();
let num = parseInt(prompt("Escribe un número:"));
if (num > 0) {
    console.log("Positivo");
} else if (num < 0) {
    console.log("Negativo");
} else if (num === 0) {
    console.log("El valor es 0");
}