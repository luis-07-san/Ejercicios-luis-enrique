function contarPares() {
    let contador = 0;
    let numero;

    while (true) {
        numero = parseInt(prompt("Introduce un número par:"));
        
        if (numero % 2 !== 0) {
            break;
        }
        
        contador++;
    }

    console.log(`Números pares ingresados: ${contador}`);
}