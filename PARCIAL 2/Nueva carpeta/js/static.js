//Modificador denominado STATIC 
//Se utlizan para acceder directamente a los atributos de la clase

//Los metodos o prpiedades estaticas no requieren que se creen una instancia de la clase para ser utlzados

class Calculadora{
    //metodo static
    static sumar(a,b){
        return a+b;
    }
}
//el acceso al metodo static se realiza directamente desde la clase asi:
console.log(Calculadora.sumar(5,3));

//No se puede acceder desde una instancia de la clase
const calc = new Calculadora();
console.log(calc.sumar(5,3)); //Error
//El modificador static en JS es ua herramienta clave para definir funciones y propiedades
//compartidas sin necesidad de crear una instancia de la clase