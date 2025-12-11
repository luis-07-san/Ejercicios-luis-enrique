const prompt = require("prompt-sync")();

function agregarDatos() {
    let datos = [];
    let totalSueldo = 0;

    let dimension = 10;

    for (let i = 0; i < dimension; i++) {
        console.log(`\n--- Persona ${i + 1} ---`);

        let nombre = prompt("Ingrese el nombre: ");
        let edad = parseInt(prompt("Ingrese la edad: "));
        let peso = parseInt(prompt("Ingrese el peso: "));
        let sueldo = parseInt(prompt("Ingrese el sueldo: "));

        let persona = { nombre, edad, peso, sueldo };
        datos.push(persona);

        totalSueldo += sueldo;
    }

    console.log("\n--- RESULTADOS ---\n");

    datos.forEach((persona) => {
        console.log(`Se llama ${persona.nombre} y tiene ${persona.edad} años.`);
        console.log(`Su peso es ${persona.peso} kg.`);
        console.log(`Su sueldo es de ${persona.sueldo} pesos\n`);
    });

    console.log(`El total de sueldos es: ${totalSueldo} pesos`);
}

agregarDatos();