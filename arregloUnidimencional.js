function DatosArreglos () {
    let suma = 0;
    let Datos = [3,7,9,3,2,6]
    console.log(Datos.length);
    for ( i = 0; i < Datos.length; i++) {
       if (Datos[1] != 0) {
        suma = suma + Datos[i]
         }
     }
    console.log(`La suma de pares es:  + suma`);
}
