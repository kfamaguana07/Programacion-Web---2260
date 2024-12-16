var nombre = "Kevin";
var apellido = "Amaguaña";
var edad = 20;
console.log("Mi nombre es " + nombre + " " + apellido + " tengo " + edad + " años");
console.log("Mi edad es " + edad + " años");

let x = 10;
let y = 20;
let z = x + y;
console.log(z);

//var = declara una variable global
//let = declara una variable local o tambien una variable de bloque
//const = declara una constante es decir que no va a cambiar su valor

//if marca un bloque de codigo que se ejecuta si se cumple una condicion
//switch marca un bloque de codigo que se ejecuta si se cumple una condicion
//for marca un bloque de codigo que se ejecuta si se cumple una condicion
//fuccion marca un bloque de instrucciones que se ejecutan varias veces se declara
//try se ejecuta cuando se produce un error
//catch se ejecuta cuando se produce un error
//return devuelve un valor
//break sale de un bucle


//Tipos de datos String
// var ==> undeprecated
// let ==> deprecated
// const ==> deprecated

var nombre1 = "Kevin";
let apellido1 = "Amaguaña";
const edad1 = 20;
console.log("Mi nombre es " + nombre1 + " " + apellido1 + " tengo " + edad1 + " años");

/*
Ejemplo de los tipos de dato de JavaScript
*/
//Tipo de dato string
let nombrePersona = "Kevin";
console.log(nombrePersona);

let nombrePersona1 = 'Kevin';
nombrePersona1 = "kevin";
console.log(nombrePersona1);

//Tipo de dato numerico
let numero = 1000;
console.log(numero);

//Tipo de dato object
let persona = {
    nombre: "Kevin",
    apellido: "Amaguaña",
    edad: 20
}

console.log(persona);


//Tipo de dato typeof
let let1 = "Kevin";
console.log(typeof let1);

let let2 = 1000;
console.log(typeof let2);

let let3 = true;
console.log(typeof let3);

let let4 = BigInt(1000);
console.log(typeof let4);

let let5 = [1, 2, 3, 4, 5];
console.log(typeof let5);

//Tipo de dato Funcion
function saludar() {}
console.log(typeof saludar);

//Tipo de dato Symbol
let simbolo = Symbol("mi simbolo"); // Puede ser utilizado por un identificador unico
console.log(typeof simbolo);

//Tipo de dato tipo clase, es lo mismo que una funcion
class Persona {
    constructor(nombres, apellidos) {
        this.nombres = nombres;
        this.apellidos = apellidos;
    }
}
console.log(typeof Persona);

//Tipo de dato undefined - se puede utilizar como un valor
let variable;
console.log(variable);
console.log(typeof variable);

//Tipo de dato null - quiere decir que tiene ausencia de un valor
let variable1 = null;
console.log(variable1);
console.log(typeof variable1);

//Tipo de datos en arreglos en javascript
let autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

//Tipos de datos son los generales por cadenas vacias
let cadena = "";
console.log(cadena);
console.log(typeof cadena);

//reglas de javascript para declarar variables
//No puede iniciar con un numero
//No puede iniciar con un simbolo
//No puede iniciar con un mayuscula

//Formas correctas de declarar variables
let nombresCompletos = "Kevin Amaguaña";
let nombres_completos = "Kevin Amaguaña";
let $nombresCompletos = "Kevin Amaguaña";


//Formas incorrectas de declarar variables
//let 1nombresCompletos = "Kevin Amaguaña";
//let @nombresCompletos = "Kevin Amaguaña";
//let nombresnompletos = "Kevin Amaguaña";

//existen palabras reservadas que no se pueden utilizar para declarar variables
//var

/*---------------------------------------------------
            Operadores en JavaScript
---------------------------------------------------*/

//Operadores Aritmeticos
let numero1 = 3;
let numero2 = 2;
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);
console.log(numero1 ** numero2);

//Operadores de Incremento y Decremento
//Incremento ++, se utiliza para imcrementar en 1 el valor de la variable
//Decremento --, se utiliza para decrementar en 1 el valor de la variable
let numero3 = 3, numero4 = 2;
let numero5 = numero3 + numero4;

//incremeto
//Pre-incremento (El operador ++ antes de la variable)
numero5 = ++numero3;
console.log(numero3);
console.log(numero5);

//Post-incremento (El operador ++ despues de la variable)
numero5 = numero4++;
console.log(numero4);
console.log(numero5);

//Decremento
//Pre-decremento (El operador -- antes de la variable)
numero5 = --numero3;
console.log(numero3);
console.log(numero5);

//Post-decremento (El operador -- despues de la variable)
numero5 = numero4--;
console.log(numero4);
console.log(numero5);

//Precedencia de operadores
//Los operadores se ejecutan de izquierda a derecha segun sea el caso

let pre1 = 2, pre2 = 3, pre3 = 4, pre4 = 5;

let pre5 = (pre1 + pre2) * pre3;
console.log(pre5);

let pre6 = pre3 * (pre1 + pre2);
console.log(pre6);

let pre7 = pre1 + pre2 * pre3;
console.log(pre7);

let pre8 = (pre1 * pre3) + pre2 * pre4 / (pre1 + pre2);
console.log(pre8);

//Operadores de Asignacion
//Asignacion =
//suma y asignacion +=
//resta y asignacion -=
//multiplicacion y asignacion *=
//division y asignacion /=
//modulo y asignacion %=
//exponenciacion y asignacion **=
let operador1 = 3, operador2 = 2;
operador1 += operador2; //operador1 = operador1 + operador2
console.log(operador1);

operador1 -= operador2; // operador1 = operador1 - operador2 
console.log(operador1);

//Operadores de Comparacion
//Igual ==
// El igual se utilizan para comparar si las dos variables son iguales
//Distinto !=
//Mayor que >
//Menor que <
//Mayor o igual que >=
//Menor o igual que <=
let operador3 = 3, operador4 = "3";

let operador10 = operador3 == operador4;
console.log(operador10);

let operador11 = operador3 === operador4;
console.log(operador11);

if(operador3 == operador4) {
    console.log("Son iguales");
} else {
    console.log("Son diferentes");
}

//Daterminar si un numero es par o impar
let numeroPar = 41;
if(numeroPar % 2 == 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}

//Determinar si un persona es mayoy de edada
let edadPersona = 20;
let edadMinima = 18;
if(edadPersona >= edadMinima) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

//De un conjunto de valores [12, 14, 16......] dde 10 valores determinar cuantos son pares y ciuantos son impares
let valores = [12, 14, 16, 19, 20, 22, 24, 25, 28, 30];
let pares = 0, impares = 0;
for(let i = 0; i < valores.length; i++) {
    if(valores[i] % 2 == 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log("Pares: " + pares);
console.log("Impares: " + impares);

//Operadores Logicos
//AND &&
//OR ||
//NOT !

let s = 12;

let valMin = 9, valorMax = 10;
if(s >= valMin && s <= valorMax) {
    console.log("Dentro del rango");
} else {
    console.log("Fuera del rango");
}

if(s > valMin || s <= valorMax) {
    console.log("Dentro del rango");
}   else {  
    console.log("Fuera del rango");
}

//Operador ternario
let resultado = (s % 2 === 0) ? "Es par" : "Es impar";
console.log(resultado);

/*---------------------------------------------------
                Conversion de tipos
---------------------------------------------------*/

let minumero = "20";   //string se pone en ""
console.log(typeof minumero);

let minumero2 = Number(minumero);
console.log(typeof minumero2);

let minumero3 = parseInt(minumero2);
console.log(typeof minumero3);
console.log(minumero3);

//parseInt() convierte un string a un numero entero
//Number() convierte un valor de un numero (puede ser entero o flotante)

console.log(parseInt("42px")); //Solo la parte numerica del string se converte en entero
console.log(parseInt("3.1415")); //Convierte solo la parte entera
console.log(parseInt("abc")); //no existe un valor numerico para convertir

console.log(Number("42px")); //No se puede convertir a numero
console.log(Number(3.1415)); //Convierte a numero
console.log(Number("abc")); //No se puede convertir a numero

console.log(Number(true)); // true se convierte a 1
console.log(Number(false)); //false se Convierte a 0
console.log(Number(null)); //null se convierte a 0
console.log(Number(undefined)); //undefined se convierte a NaN

if(isNaN(minumero2)){
    console.log("No es un numero");
} else {
    console.log("Es un numero");
}
console.log(isNaN(minumero2)); //No es un numero
console.log(minumero2); //No es un numero
