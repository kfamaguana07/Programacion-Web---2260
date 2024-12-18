/**********************************************************
                    CICLOS
**********************************************************/

// Ciclo For

const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

console.warn(" *********** For tradicional ***********");
for(let i = 0; i < heroes.length; i++){
    console.warn(heroes[i]);
}

console.warn(" *********** For in ***********");
for(let i in heroes){
    console.warn(heroes[i]);
}

console.warn(" *********** For of ***********");
for(let heroe of heroes){
    console.warn(heroe);
}

//uso de la declaracion for
// usa for por tradicional cuando necesitamos el control total de los indices del array
// usa for in para el manero de objetos, es decir para iterar un objeto o los indices del array
// usa for of para iterar los valores directamente de un iterable (array, string)
// (map, set, node list)


//uso del continue y el break dentro del ciclo for

for(let contador = 0; contador < 10; contador++){
    if(contador % 2 == 0){
        continue; // ir a la siguiente iteracion
    }
    console.log(contador);
}

const carros = ["Ford", "Mazda", "Honda", "Toyota"];
for(let contadorI = 0; contadorI < carros.length; contadorI++){
    if(contadorI == 2){
        continue;
    }
    console.log(carros[contadorI]);
}


//While
let i = 0;
while(carros[i]){
    if(i == 1){
        i++;
        break;
    }
    console.warn(carros[i]);
    i++;
}