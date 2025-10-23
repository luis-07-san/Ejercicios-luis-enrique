const prompt = require("prompt-sync")();
let N = parseInt(prompt("Escribe un número: "));
let contador = 0;
for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        contador++;
    }
}
console.log(`Cantidad de números impares hasta ${N}: ${contador}`);