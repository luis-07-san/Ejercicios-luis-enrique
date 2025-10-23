let cal  = parseInt(prompt("ingrese la calificacion"))
if (cal >= 7){
    console.log ("Aprobado")
} else {
    console.log ("Reprobado")
}
let resultado = cal > 6 ? "bien":
cal > 8 ?  "muy bien": "excente"
console.log (resultado);