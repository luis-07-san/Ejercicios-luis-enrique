function confirmarContinuacion() {
    let respuesta;
    
    while (true) {
        respuesta = prompt("¿Desea continuar? (pulse 'n' para salir):");
        if (respuesta === null) continue; // En caso de que se cancele el prompt
        
        if (respuesta.toLowerCase() === 'n') {
            console.log("Programa finalizado");
            break;
        }
    }
}