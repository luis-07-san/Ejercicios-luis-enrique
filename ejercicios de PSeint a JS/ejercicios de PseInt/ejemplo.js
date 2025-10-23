function TablaMultiplicar() {
    let numero1 = parseInt(prompt("Ingrese un numero"));
    let resultado = 0;
    
    if (numero1 > 0 && numero1 <= 10) {
        for(let i = 1; i <= 10; i++) {
            resultado = numero1 * i;
            console.log(`${numero1} * ${i} = ${resultado}`);
        }
    } else {
        console.log("Valor invalido");
    }
}