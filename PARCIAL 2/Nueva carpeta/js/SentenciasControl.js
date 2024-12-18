/**********************************************************
                    SENTENCIAS DE CONTROL
**********************************************************/

//If/Else

let numero = 3;

if(numero == 1){
    console.warn("Numero 1");
} else if(numero == 2){
    console.warn("Numero 2");
} else if(numero == 3){
    console.log("Numero 3");
} else {
    console.warn("No es un numero");
}

//Ejercicio referente a las estaciones del año
//Invierno
//Otoño
//Primavera
//Verano

let mes = 14;
let estacion;

if(mes == 1 || mes == 2 || mes == 3){
    estacion = "Invierno";
} else if(mes == 4 || mes == 5 || mes == 6){
    estacion = "Otoño";
} else if(mes == 7 || mes == 8 || mes == 9){
    estacion = "Primavera";
} else if(mes == 10 || mes == 11 || mes == 12){
    estacion = "Verano";
} else {
    estacion = "Numero incorrecto";
}
console.warn(estacion);


//Ejercicio calcular la hora del dia

/*
6am - 11am => Buenos dias
12pm - 18pm => Buenas tardes
19pm - 23pm => Buenas noches
0am - 5am => Durmiendo
*/

let horaDia = 2;
let mensaje;

if(horaDia >= 6 && horaDia <= 11){
    mensaje = "Buenos dias";
} else if(horaDia >= 12 && horaDia <= 18){
    mensaje = "Buenas tardes";
} else if(horaDia >= 19 && horaDia <= 23){
    mensaje = "Buenas noches";
} else if(horaDia >= 0 && horaDia < 6){
    mensaje = "Durmiendo";
} else {
    mensaje = "Hora no valida";
}
console.warn(mensaje);


//Switch
let MesE = 11;
let EstacionI = "Estacion Desconocida";

switch(MesE){
    case 1: case 2: case 3:
        EstacionI = "Invierno";
        break;
    case 4: case 5: case 6:
        EstacionI = "Otoño";
        break;
    case 7: case 8: case 9:
        EstacionI = "Primavera";
        break;
    case 10: case 11: case 12:
        EstacionI = "Verano";
        break;
    default:
        EstacionI = "Valor incorrecto";
        break;
}
console.log(EstacionI);


