const prompt=require("prompt-sync")();
function verificarAceptacion() {
    let edad = parseInt(prompt("Introduce la edad:"));
    let nota = parseInt(prompt("Introduce la nota:"));
    let sexo = prompt("Introduce el sexo (M/F):").toUpperCase();

    if (nota >= 5 && edad >= 18) {
        if (sexo === 'F') {
            console.log("ACEPTADA");
        } else if (sexo === 'M') {
            console.log("POSIBLE");
        } else {
            console.log("NO ACEPTADA");
        }
    } else {
        console.log("NO ACEPTADA");
    }
}