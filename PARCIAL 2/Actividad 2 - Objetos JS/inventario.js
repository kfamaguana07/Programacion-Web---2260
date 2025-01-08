//Crear Inventario de productos
const inventario = {
    producto1: {
        nombreProducto: 'Sandia',
        precio: 5,
        cantidad: 55
    },
    producto2: {
        nombreProducto: 'Guanabana',
        precio: 7.50,
        cantidad: 30
    },
    producto3: {
        nombreProducto: 'Coco',
        precio: 4,
        cantidad: 200
    },
    producto4: {
        nombreProducto: 'Pitahaya',
        precio: 8,
        cantidad: 40
    }
};


//Sellar el inventario
Object.seal(inventario);


//función vender un producto:
function venderProducto(nombreProducto, cantidad) {
    for (let clave in inventario) {
        if (inventario[clave].nombreProducto === nombreProducto) {
            if (inventario[clave].cantidad >= cantidad) {
                inventario[clave].cantidad -= cantidad;
                console.log(`Venta exitosa: ${cantidad} ${nombreProducto}(s) vendidos.`);
            } else {
                console.log(`Error: No hay suficiente stock de ${nombreProducto}.`);
            }
            return;
        }
    }
    console.log(`Error: El producto ${nombreProducto} no existe en el inventario.`);
}

//Funcion Descuento
function aplicarDescuento(porcentaje) {
    if (porcentaje < 0) {
        console.log('Error: El porcentaje de descuento no puede ser negativo.');
        return;
    }
    for (let clave in inventario) {
        let nuevoPrecio = inventario[clave].precio * (1 - porcentaje / 100);
        inventario[clave].precio = nuevoPrecio < 0 ? 0 : nuevoPrecio;
    }
    console.log('Descuento aplicado:', inventario);
}

//Vender
venderProducto('Coco', 25);
venderProducto('Sandia', 5);
venderProducto('Pitahaya', 18);
venderProducto('Guanabana', 10);

//Descuento
aplicarDescuento(10);

//Inventario Final
console.log('Inventario Final',inventario);