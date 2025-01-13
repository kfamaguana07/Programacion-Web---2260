class Producto {
    constructor(nombreProducto, precioProducto, cantidadProducto, categoriaProducto) {
        this._nombre = nombreProducto;
        this._precio = precioProducto;
        this._cantidad = cantidadProducto;
        this._categoria = categoriaProducto;
    }

    // Getters y Setters
    get nombre() { return this._nombre; }
    set nombre(nombreProducto) { this._nombre = nombreProducto; }

    get precio() { return this._precio; }
    set precio(precioProducto) { this._precio = precioProducto; }

    get cantidad() { return this._cantidad; }
    set cantidad(cantidadProducto) { this._cantidad = cantidadProducto; }

    get categoria() { return this._categoria; }
    set categoria(categoriaProducto) { this._categoria = categoriaProducto; }
}

class Inventario {
    constructor() {
        this.productos = [];
    }

    // Agregar productos al inventario
    agregarProducto(producto) {
        this.productos.push(producto);
    }

    // Listar productos ordenados por precio
    listarProductos(orden = 'ascendente') {
        return this.productos.sort((a, b) => {
            return orden === 'ascendente' ? a.precio - b.precio : b.precio - a.precio;
        });
    }

    // Filtrar productos por categoría
    filtrarProductosPorCategoria(categoria) {
        return this.productos.filter(producto => producto.categoria === categoria);
    }

    // Aplicar descuento a productos de una categoría
    aplicarDescuento(categoria, porcentaje) {
        for (let producto of this.productos) {
            if (producto.categoria === categoria) {
                const nuevoPrecio = producto.precio * (1 - porcentaje / 100);
                producto.precio = nuevoPrecio;
            }
        }
    }

    // Generar un reporte de inventario
    generarReporteInventario() {
        console.log("Inventario actualizado:");
        this.productos.forEach(producto => {
            console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}, Categoría: ${producto.categoria}`);
        });
    }
}

class Venta {
    constructor(inventario) {
        this.inventario = inventario;
        this.ventasRealizadas = [];
    }

    // Realizar una venta
    realizarVenta(nombreProducto, cantidad) {
        const producto = this.inventario.productos.find(p => p.nombre === nombreProducto);

        if (!producto) {
            console.error('Producto inexistente.');
            return;
        }
        if (producto.cantidad < cantidad) {
            console.error('Cantidad insuficiente.');
            return;
        }

        producto.cantidad -= cantidad;
        const fechaHora = new Date().toLocaleString();
        this.ventasRealizadas.push({ nombreProducto, cantidad, precio: producto.precio, fechaHora });
        console.log(`Venta realizada: ${cantidad} unidades de ${nombreProducto} el ${fechaHora}.`);
    }

    // Calcular ingresos totales
    calcularIngresosTotales() {
        return this.ventasRealizadas.reduce((total, venta) => total + venta.cantidad * venta.precio, 0);
    }

    // Producto más vendido
    productoMasVendido() {
        return this.ventasRealizadas.reduce((masVendido, venta) => {
            if (!masVendido || venta.cantidad > masVendido.cantidad) {
                return venta;
            }
            return masVendido;
        }, null);
    }
}


let inventario = new Inventario();

// Crear objetos
let producto1 = new Producto("Mercedes Benz", 15000, 10, "Carros");
let producto2 = new Producto("AUDI", 100000, 15, "Carros");
let producto3 = new Producto("Asus Tuf Gaming fx505", 1500, 50, "Laptops");
let producto4 = new Producto("Macbook Pro", 2000, 20, "Laptops");
let producto5 = new Producto("Mesa", 200, 50, "Muebles");
let producto6 = new Producto("Silla", 100, 50, "Muebles");

//Agregar productos al inventario
inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);
inventario.agregarProducto(producto3);
inventario.agregarProducto(producto4);
inventario.agregarProducto(producto5);
inventario.agregarProducto(producto6);

// Crear objeto de ventas
let ventas = new Venta(inventario);

// Realizar ventas
ventas.realizarVenta('Mercedes Benz',5);
ventas.realizarVenta('AUDI', 10);
ventas.realizarVenta('Asus Tuf Gaming fx505', 15);
ventas.realizarVenta('Silla', 10);

// Aplicar descuentos
inventario.aplicarDescuento('Carros', 10);
inventario.aplicarDescuento('Laptops', 5);
inventario.aplicarDescuento('Muebles', 15);

// Generar reportes
console.log(inventario.listarProductos('ascendente'));

// Imprimir reporte de inventario
inventario.generarReporteInventario();

// Imprimir total de ingresos
let totalIngresos = ventas.calcularIngresosTotales();
console.log(`Total de ingresos generados: $${totalIngresos}.`);

// Imprimir producto más vendido
let productoMasVendido = ventas.productoMasVendido();
console.log(`Producto más vendido: ${productoMasVendido.nombreProducto}.`);
