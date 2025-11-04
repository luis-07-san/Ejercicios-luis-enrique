const prompt=require("prompt-sync")();
let edad;
edad=parseInt(prompt("ingresa tu edad: "));
if(edad>=1 && edad<=10){
    console.log("infante");
}else if (edad>=10 && edad<=15){
    console.log("adolescente");
}
else if (edad>=15 && edad<=20){
    console.log("joven");
}
else{
    console.log("chavorrucos");
}