const prompt = require("prompt-sync")();

let precioLibro = 568;
let precioDisco = 45;
let precioTocadiscos = 678;

let descLibro = 0.20;
let descDisco = 0.15;
let descTotal = 0.02;

let totalLibros = 4 * (precioLibro * (1 - descLibro));
let totalDiscos = 3 * (precioDisco * (1 - descDisco));
let totalTocadiscos = precioTocadiscos;

let totalSinDescuento = totalLibros + totalDiscos + totalTocadiscos;
let totalFinal = totalSinDescuento  (1 - descTotal);

console.log(`El total a pagar con pronto pago es: $${totalFinal.toFixed(2)}`);