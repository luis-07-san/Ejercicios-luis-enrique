const prompt = require("prompt-sync")();
let mun, mult;
console.log("Escribe un número:");
num = parseInt(prompt());

for (let i = 1; i <= 10; i++) {
    mult = num * i;
    console.log(`${num} x ${i} = ${mult}`);
}