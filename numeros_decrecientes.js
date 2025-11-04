const prompt = require("prompt-sync")();

let num = parseInt(prompt("Escribe un número: "));

for (let i = 100; i >= 0; i--) {
    num = num - 1;
    console.log(`${num} - ${i} = ${num}`);
}