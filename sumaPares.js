let suma = 0;
for (let i = 500; i <= 800; i++) {
    if (i % 2 === 0) {
        suma += i;
    }
}
console.log("La suma de los números pares entre 500 y 800 es: " + suma);