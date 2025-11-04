const prompt=require("prompt-sync")();
function suma(){
    let numero1;
    let numero2;
    numero1=parseInt(prompt("ingresa un valor entero: "));
    numero2=parseInt(prompt("ingersa otro valor entero:" ));
    let resultado=numero1+numero2;
    console.log(`la suma de ${numero1} y ${numero2} es: ${resultado}`);

}
suma();