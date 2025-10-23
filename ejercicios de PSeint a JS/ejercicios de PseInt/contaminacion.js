const prompt = require("prompt-sync")();

let comt = parseFloat(prompt("Ingrese el nivel de contaminación: "));

if (comt <= 37) {
    console.log("Aceptable");
} else if (comt >= 38 && comt <= 55) {
    console.log("Desagradable");
} else if (comt > 55) {
    console.log("Peligroso");
}