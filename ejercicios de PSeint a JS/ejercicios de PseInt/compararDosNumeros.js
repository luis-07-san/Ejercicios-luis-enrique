const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let resultado;

if (num1 > num2) {
    resultado = num1 + num2;
    console.log(`El primero es mayor. La suma es: {resultado}`);
} else if (num2 > num1) {
    resultado = 0;
    for (let i = num1; i <= num2; i++) {
        resultado += i;
    }
    console.log(`El segundo es mayor. La sumatoria entre ellos es: ${resultado}`);
} else {
    resultado = num1 * num2;
    console.log(`Los números son iguales. El producto es: {resultado}`);
}