function calcularPotencia() {
    let base = parseFloat(prompt("Introduce la base:"));
    let exponente = parseInt(prompt("Introduce el exponente:"));
    let resultado;

    if (exponente === 0) {
        resultado = 1;
    } else if (exponente > 0) {
        resultado = base ** exponente;
    } else {
        resultado = 1 / (base ** Math.abs(exponente));
    }

    console.log(`Resultado: ${resultado}`);
}