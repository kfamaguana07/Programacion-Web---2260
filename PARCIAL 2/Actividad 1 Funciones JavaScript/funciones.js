//Crea una funcion declara llamada calcularPromedio que reciba tres numeros como parametros y retorne su promedio
function calcularPromedio(a, b, c) {
    return (a + b + c) / 3; 
}
console.log(calcularPromedio(3, 6, 9));

//Declara una funcion expresada llamada determinarMayor que reciba dos numeroms como parametros y retorne el mayor
const determinarMayor = function(a, b) {
    return a > b ? a : b;
}
console.log(determinarMayor(5, 10));


//Crea una funcion flecha llamada esPar que reciba un numero y retorne true si es par y false si es impar
const esPar = (a) => a % 2 === 0 ? true : false;
console.log(esPar(5));

//Escribe una funcion anonima autoejecutable que: llame las funciones (calcularPromedio, determinarMayor y esPar)
(function() {
    const promedio = calcularPromedio(20, 20, 5);
    console.log(`El promedio es: ${promedio}`);

    const mayor = determinarMayor(252, 1200);
    console.log(`El mayor es: ${mayor}`);

    const par = esPar(568);
    if (par) {
        console.log('True');
    } else {
        console.log('No es par');
    }
})();
