const prompt = require('prompt-sync')();;
function sistemaInventario() {
let inventario = [];
let nombreProducto = "";
let precioProducto = null;
let cantidadProducto = 0;
let i = 0;
let total = 0;
let totalCompra = 0;
let dimension = parseInt(prompt("Ingrese la cantidad de productos a registrar: ")); 
while (i<dimension) {
    nombreProducto = prompt("ingrese el nombre del producto:");
    precioProducto = parseInt(prompt("ingrese el precio del producto:"))
    cantidadProducto = parseInt(prompt("ingrese la cantidad de producto:"))
    producto = { nombreProducto, precioProducto, cantidadProducto };
    inventario.push(producto);
    i++;
}   
inventario.map((producto) => {
    total = producto.precioProducto * producto.cantidadProducto;
    totalCompra += total;
    console.log(`El producto ${producto.nombreProducto} tiene un precio de ${producto.precioProducto} y una cantidad de ${producto.cantidadProducto}`);
    console.log(`El total por este producto es de: ${total}`);
});
console.log(`El total de la compra es de: ${totalCompra}`);
}
sistemaInventario();