function calcularCostoViaje() {
    let alumnos = parseInt(prompt("Número de alumnos:"));
    let costoAlumno;
    let costoTotal;

    if (alumnos >= 100) {
        costoAlumno = 65;
        costoTotal = costoAlumno * alumnos;
    } else if (alumnos >= 50) {
        costoAlumno = 70;
        costoTotal = costoAlumno * alumnos;
    } else if (alumnos >= 30) {
        costoAlumno = 95;
        costoTotal = costoAlumno * alumnos;
    } else {
        costoTotal = 4000;
        costoAlumno = costoTotal / alumnos;
    }

    console.log(`Costo por alumno: $${costoAlumno.toFixed(2)}`);
    console.log(`Pago a la compañía: $${costoTotal.toFixed(2)}`);
}