function sumarHastaCero() {
    let suma = 0;
    let numero;

    while (true) {
        numero = parseFloat(prompt("Introduce un número (0 para terminar):"));
        
        if (numero === 0) {
            break;
        }
        
        if (!isNaN(numero)) {
            suma += numero;
        }
    }

    console.log(`Suma total: ${suma}`);
}