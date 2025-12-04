let arreglo=[{nombre:"luis",edad:18,peso:64,altura:1.65}];
/* let persona1={nombre:"ana",edad:20,peso:55,altura:1.70};   
let persona2={nombre:"juan",edad:22,peso:75,altura:1.80}; */
/* arreglo.map((persona)=>{
    console.log(`el nombre es: ${persona.nombre}, Edad: ${persona.edad}, Peso: ${persona.peso}, Altura: ${persona.altura}`);
}); */


const prompt = require("prompt-sync")();

function agregarDatos(){
    let datos = [];
    let nombre="";
    let edad=null;
    let peso=0;
    let i=0;
    let sueldo=0;
    let totalSueldo=0;
    let dimension = parseInt(prompt("ingrese la dimension de arreglo: "));

    while(i<dimension){
    nombre = prompt("ingrese el nombre: ");
    edad = parseInt(prompt("ingrese la edad: "));
    peso = parseInt(prompt("ingrese el peso: "));
    sueldo = parseInt(prompt("ingrese el sueldo: "));
    persona = { nombre, edad,peso,sueldo};
    datos.push(persona);
    i++;
    }
    datos.map((persona)=>{
        totalSueldo += persona.sueldo;
        console.log(`se llama ${persona.nombre} y tiene ${persona.edad} años y su peso es de ${persona.peso} kg`);
        console.log(`y su sueldo es de ${totalSueldo} pesos`);
    })
}
agregarDatos();