const prompt = require("prompt-sync")();
let medida1 = 89;
let medida2 = 58;
let medida3 = 89;
let estatura_m = 1.70;
let peso_kg = 53;

let medida1_pulg = medida1 * 0.3937;
let medida2_pulg = medida2 * 0.3937;
let medida3_pulg = medida3 * 0.3937;
let estatura_pies = estatura_m * 3.2808;
let peso_libras = peso_kg * 2.2046;

console.log(`Medidas en pulgadas: ${medida1_pulg.toFixed(2)} - ${medida2_pulg.toFixed(2)} - ${medida3_pulg.toFixed(2)}`);
console.log(`Estatura en pies: ${estatura_pies.toFixed(2)}`);
console.log(`Peso en libras: ${peso_libras.toFixed(2)}`);