const prompt = require ("prompt-sync")();
function rango(){
    let valor = 0;
    while (valor <  1 || valor > 5) {
        valor = parseInt(prompt("Ingrese un valor entre 1 y 5 paraa terminar"));
console.logv(`el numero es ${valor} es valido`);
 }
    }