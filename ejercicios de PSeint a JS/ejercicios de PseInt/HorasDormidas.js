const prompt = require("prompt-sync")();
let edad = parseFloat(prompt("Ingrese la edad de la persona en años: "));
let dias_totales = edad * 365;
let horas_dormidas = dias_totales * 8;
console.log(`La persona ha dormido ${horas_dormidas.toFixed(2)} horas en toda su vida.`);