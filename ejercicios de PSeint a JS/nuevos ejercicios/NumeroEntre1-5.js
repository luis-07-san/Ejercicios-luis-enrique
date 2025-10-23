function validarNumero() {
    let numero;
    
    while (true) {
        numero = parseInt(prompt("Introduce un número entre 1 y 5:"));
        if (numero >= 1 && numero <= 5) {
            console.log(`Número válido: ${numero}`);
            break;
        } else {
            console.log("Número fuera de rango. Intenta de nuevo.");
        }
    }
}