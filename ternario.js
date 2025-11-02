let cal = parseInt(prompt("Ingrese la calificación:"));

if (cal >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

let resultado = cal > 8 ? "muy bien" :
                 cal > 6 ? "bien" :
                 "excelente";

console.log(resultado);