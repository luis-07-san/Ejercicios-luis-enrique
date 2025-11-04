const prompt = require("prompt-sync")();

let calif = parseFloat(prompt("Escribe tu calificación (0-100): "));

if (calif >= 90 && calif <= 100) {
    console.log("Excelente");
} else if (calif >= 70 && calif <= 89) {
    console.log("Bien");
} else if (calif < 70) {
    console.log("Reprobado");
} else {
    console.log("Calificación no válida");
}