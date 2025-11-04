function determinarParImpar() {
    let N = parseInt(prompt("Ingrese un número mayor que cero:"));
    
    if (N > 0) {
        if (N % 2 === 0) {
            alert("El número es par.");
        } else {
            alert("El número es impar.");
        }
    } else {
        alert("El número debe ser mayor que cero.");
    }
}