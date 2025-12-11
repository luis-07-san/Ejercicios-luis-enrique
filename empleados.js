const prompt = require("prompt-sync")();
function empleados() {
    let datos = [];
    let totalSueldo = 0;
    let dimension = 2;
    let i = 0;
    while (i < dimension) {
        console.log(`empleado ${i + 1}`);
        let nombre = prompt("Ingrese el nombre: ");
        let rfc = parseInt(prompt("Ingrese el rfc: "));
        let edad = parseInt(prompt("Ingrese la edad: "));
        let sexo = prompt("Ingrese el sexo: ");
        let sueldo = parseInt(prompt("Ingrese el sueldo: "));
        let empleado = { nombre, edad, rfc, sueldo, sexo };
        datos.push(empleado);
        totalSueldo += sueldo;
        i++;
    }
    console.log("resultados");
    datos.map((empleado) => {
        console.log(`Se llama ${empleado.nombre} y tiene ${empleado.edad} años.`);
        console.log(`Su rfc es ${empleado.rfc}.`);
        console.log(`Su sexo es ${empleado.sexo}.`);
        console.log(`Su sueldo es de ${empleado.sueldo} pesos`);
    })
    console.log(`El total de sueldos es: ${totalSueldo} pesos`);
}  
empleados();
