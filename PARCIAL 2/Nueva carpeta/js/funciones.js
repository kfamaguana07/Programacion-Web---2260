/**********************************************************
                    FUNCIONES
**********************************************************/

//Funciones en JavaScript

//Funcion declaracion

function miFuncion(a, b) {
    console.log('La suma es: ' + (a + b));

}
miFuncion(2, 3);

//La palabra retu(rn dentro de la funcion
function miReturn(a, b) {
    return a + b;
}
let resultado = miReturn(4, 5);
console.log(resultado);

//Funcion de tipo expresion
//Declaracion de una funcion que es igual a una expresion
let sumar = function(a, b) {return a*b;}

resultado = sumar(2, 4);
console.log(typeof sumar);
console.log(resultado);

//Funciones de tipo self-invoking
//Porque son funciones que se invocan a si mismas

//Funciones anonimas
//No son muy comunes pero pueden ser utiles en algunas cosas

(function (a, b) {
    console.log('Ejecutando la funcion: ' + (a+b));
})(3,4)

// setTimeout(function () {
//     console.log(`Hola desde una funcion anonima`)
// }, 1000);


const persona = { 
    nombre: 'Juan',
    saludar(){
        return `Hola, soy ${this.nombre}`;
    },
    apellido: 'Perez',
}
console.log(persona.saludar());


//Funciones tipo flecha ()
//Se mantiene como una forma concisa de delcarar funciones y es amplicamente utilizada en el desarrollo de aplicaciones web
const sumarValores = (a, b) => a+b;
console.log(sumarValores(5, 7));

const operaciones = {sumar: (a, b) => a+b, restar:(a, b) => a-b, multiplicar: (a, b) => a*b, dividir: (a, b) => a/b};
console.log(operaciones.sumar(2, 3));
console.log(operaciones.restar(2, 3));
console.log(operaciones.multiplicar(2, 3));
console.log(operaciones.dividir(2, 3));







