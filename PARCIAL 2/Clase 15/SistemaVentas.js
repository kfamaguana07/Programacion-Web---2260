//Sistema De Ventas

//Creacion clase Producto
class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, categoria, stock) {
        if(precio > 0){
            this._idProducto = ++Producto.contadorProductos;
            this._nombre = nombre;
            this._precio = precio;
            this._categoria = categoria;
            this._stock = stock;
        } else {
            console.log('El precio debe ser mayor a 0');
        }    
    }

    get idProducto() {
        return this._idProducto;
    }

    get Nombre(){
        return this._nombre;
    }

    set Nombre(nombre){
        this._nombre = nombre;
    }

    get Precio (){
        return this._precio
    }

    set Precio(precio){
        this._precio = precio;
    }

    get Categoria(){
        return this._categoria;
    }

    get Stock(){
        return this._stock;
    }

    set Stock(stock){
        this._stock = stock;
    }

    toString(){
        return `Id Producto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}, Categoria: ${this._categoria}, Stock: ${this._stock}`;
    }
}



//Creacion clase Orden
class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {  //Es una constante
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        //Verificar si no hemos superado el maximo de productos existentes.
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            if (producto.Stock > 0) {
                this._productos.push(producto);
                producto.Stock -= 1; // Disminuir el stock
            } else {
                console.log(`No hay stock disponible para el producto: ${producto.Nombre}`);
            }
        } else {
            console.log('No se pueden agregar más productos');
        }
    }

    aplicarDescuento(producto) {
        let descuento = 0;
        if (producto.Categoria === 'electronica') {  // Comparación directa sin toLowerCase
            descuento = producto.Precio * 0.10;
        }
        return producto.Precio - descuento;
    }

    calcularTotal() {
        let totalVenta = 0;
        for (const producto of this._productos) {
            totalVenta += this.aplicarDescuento(producto);
        }
        return totalVenta;
    }

    calcularImpuestos() {
        return this.calcularTotal() * 0.16; // Aplicar impuesto del 16%
    }

    mostrarOrden() {
        let productosOrden = '';
        for (const producto of this._productos) {
            //productosOrden += producto.toString() + ' ';
            productosOrden += '\n{' + producto.toString() + '}';
        }

        console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal()}, Impuestos: $${this.calcularImpuestos()}, Productos: ${productosOrden}`);
    }

    listarProductosDescendente() {
        return this._productos.sort((a, b) => b.Precio - a.Precio);
    }
}

//Probando
let producto1 = new Producto('Laptop', 500, 'electronica', 1);
let producto2 = new Producto('Mouse', 10, 'electronica', 20);
let producto3 = new Producto('Teclado', 150, 'electronica', 15);
let producto4 = new Producto('Pantalla', 300, 'electronica', 5);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();
//imprimir valor total
console.log('Total con descuento e impuestos:', orden1.calcularTotal() + orden1.calcularImpuestos());


let orden2 = new Orden(); //creamos el segundo objeto de tipo Orden
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.mostrarOrden();

console.log('Total con descuento e impuestos:', orden1.calcularTotal() + orden1.calcularImpuestos());


console.log('Productos ordenados de forma descendente');
console.log(orden2.listarProductosDescendente());

//Ejercicio Reto
/*
1. Stock Disminuya
2. Descuento por Categoria:
    Crear una nueva propiedad en la clase Producto
    Los productos de la categoria electronica debe tener un descuento del 10% al calcular el total de la orden
3. Aplicacion de impuestos:
    Implementar un metodo calcularImpuestos() en la clase Orden para que agregue un impuesto 16%
4. Listar los productos de forma descendente
5. Restriccion adicional:
    Aseguremos que los precios no puedan ser negativos al establecerlos en la clase Producto
*/

