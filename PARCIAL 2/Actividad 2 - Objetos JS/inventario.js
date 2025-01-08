//Crear Inventario de productos
const inventario = {
    producto1: {
        nombreProducto: 'Laptop',
        precio: 1000,
        cantidad: 10
    },
    producto2: {
        nombreProducto: 'Smartphone',
        precio: 500,
        cantidad: 20
    },
    producto3: {
        nombreProducto: 'Tablet',
        precio: 300,
        cantidad: 15
    },
    producto4: {
        nombreProducto: 'Monitor',
        precio: 200,
        cantidad: 8
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
venderProducto('Laptop', 2);
venderProducto('Smartphone', 5);
venderProducto('Tablet', 1);

//Descuento
aplicarDescuento(10);

//Inventario Final
console.log('Inventario Final',inventario);