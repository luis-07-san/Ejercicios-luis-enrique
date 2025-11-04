const prompt = require("prompt-sync")();
let horasA = 12, pagoA = 45;
let horasB = 10, pagoB = 56;
let horasC = 8, pagoC = 52;
let horasD = 13, pagoD = 28;

let sueldoA = horasA * pagoA;
let sueldoB = horasB * pagoB;
let sueldoC = horasC * pagoC;
let sueldoD = horasD * pagoD;
let sueldoTotal = sueldoA + sueldoB + sueldoC + sueldoD;

console.log(`El sueldo total de Juanita es: $${sueldoTotal}`);