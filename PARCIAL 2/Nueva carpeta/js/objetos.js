/**********************************************************
                    FOBJETOS
**********************************************************/

//Caracteristicas de un objeto en JS

//Claves y Valores

//Las claves son cadenas o simbolos (unicos)
//Los valores pueden ser de cualquier tipo de dato: numeros, cadenas, booleanos, objetos, funciones, arreglos, etc.

//Dinamismo:
//Los objetos pueden cambiar en tiempo de ejecucion, es decir, se pueden agregar, modificar o eliminar propiedades de un objeto

//Nota especial:
//Objetos se pueden incluir metodos
//Los metodos son funciones que se incluyen dentro de un objeto

/*  Objetos ==> propiedades y metodos*/

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28
}

console.log(persona)

//Incluir metodos en los OBJETOS

let people = {
    name: 'Andy',
    lastname: 'Cooks',
    age: 28,
    fullname: function(){
        return this.name + ' ' + this.lastname;
    }
}
console.log(people.fullname());

const people2 = {
    name: 'Mary',
    lastname: 'Dalas',
    age: 22,
    saludo: function(){
        console.log(`Hola, soy ${this.name} ${this.lastname}`);
    }
}
console.log(people2.name);
people2.saludo();


//Usando el constructor Object
//otra dorma de crear un objeto vacacion y agregar las propiedades posteriormente

const persona1 = new Object();
persona1.nombre = 'Carlos';
persona1.apellido = 'Lara';
persona1.saludo = function(){
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
}
console.log(persona1.nombre);
persona1.saludo();


//Usando la clase object.create()
//Permite crear un onjeto basado en un prototipo
const prototipoPersona = {
    saludad: function(){
        console.log(`Hola, desde prototipo, soy  ${this.nombre}`);
    }
}
const persona2 = Object.create(prototipoPersona);
persona2.nombre = 'Juan';
persona2.saludad();


//Usando clases introduciendo desde ES6 ==> ES2024
//Proporcionar una sintaxis mas estructurada para crear objetos
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido;
    }

    saludar(){
        console.log(`Hola, desde clases, soy ${this.nombre} ${this.apellido}`);
    }
}
const persona3 = new Persona('Pedro', 'Lopez');
persona3.saludar();


//Usando la funcion constructora
//Forma clasica, utilzada no muy frecuente
function Persona1(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log(`Hola, desde funcion, Soy ${this.nombre} y tengo ${this.edad} años`);
    }
}
const persona4 = new Persona1('Maria', 25);
persona4.saludar();


//Manipulacion de los datos o propiedades de los objetos
//1. Agregar o Modificar propiedades
const persona5 = {
    nombre: 'Kevin'
}
persona5.edad = 25;
persona5.nombre = 'Felipe Caicedo';
console.log(persona5);

//2. Eliminar propiedades
//delete persona5.edad;
console.log(persona5);

//3. Iterar sobre las propiedades de un objeto
for(let nombrePropiedad in persona5){
    console.log(nombrePropiedad);
    console.log(persona5[nombrePropiedad]);
}
for(let clave in persona5){
    console.log(`${clave}: ${persona5[clave]}`);
}

//4. verificar propiedades de un objeto
console.log(`nombre` in persona5);
console.log(persona5.hasOwnProperty('age'));


//Metodos utiles para trabajar co objetos
//1. Object.keys()
//Devuelve un arreglo con las claves del objeto
console.log(Object.keys(persona5));

//2. Object.values()
//Devuelve un arreglo con los valores del objeto
console.log(Object.values(persona5));

//3. Object.entries()
//Devuelve un arreglo con los pares clave-valor
console.log(Object.entries(persona5));

//4. Object.assign()
//Permite copiar las propiedades de un objeto a otro
const copia = Object.assign({}, persona5);
console.log(copia);

//5. Objetct.freeze()
//Congelar un objeto para que no se puedan agregar, modificar o eliminar propiedades
    //Object.freeze(persona5);

//6. Object.seal()
//Permite modificar las propiedades existentes pero no agregar o eliminar propiedades
Object.seal(persona5);
persona5.direrccion = 'Calle 123';
console.log(persona5);


//Nota:
//Impresion de los valores de las propiedades de un objeto
let personaArray = Object.values(persona5);
console.log(personaArray);
let personaString = JSON.stringify(persona5);
//JSON es una notacion, es un objeto
//Stringify convierte un objeto a una cadena de texto
console.log(personaString);


//Crear el inventario inicial: Define un objeto que contenga al menos 4 productos con las propiedades: nombre, precio, y cantidad
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


//función para vender un producto:
//La función debe aceptar el nombre del producto y la cantidad a vender.
//Si el producto existe y tiene suficiente stock, reduce la cantidad en el inventario y muestra un mensaje confirmando la venta.
//Si el producto no existe o no tiene suficiente stock, muestra un mensaje de error.
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

//Implementa una función para aplicar un descuento a todos los productos:
//La función debe aceptar un porcentaje de descuento y reducir el precio de todos los productos en base a este porcentaje.
//Asegúrate de que los precios no sean negativos.
//Usa las funciones creadas:
function aplicarDescuento(porcentaje) {
    for (let clave in inventario) {
        let nuevoPrecio = inventario[clave].precio * (1 - porcentaje / 100);
        inventario[clave].precio = nuevoPrecio < 0 ? 0 : nuevoPrecio;
    }
    console.log('Descuento aplicado:', inventario);
}

//Vende algunos productos.
venderProducto('Laptop', 2);
venderProducto('Smartphone', 5);
venderProducto('Tablet', 1);

//Aplica un descuento del 10% a todo el inventario.
aplicarDescuento(10);

//Muestra el inventario final utilizando console.log().
console.log(inventario);