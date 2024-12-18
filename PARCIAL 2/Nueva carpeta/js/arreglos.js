/**********************************************************
                    ARREGLOS
**********************************************************/

//Declaracion
const arr = new Array(10);
const arr1 = [];
console.log(arr);

const numeros = [1, 2, 3, 4, 5];
let colores = ["Rojo", "Verde", "Azul"];

//Ejercicio
let videojuegos = ["Mario 3", "Megaman", "Soccer"];
console.log(videojuegos[2]);

let arregloCosas = [
    true,
    123,
    "Fernando",
    1 + 2,
    function(){},
    ()=>{},
    {a: 1},
    ["s", "Megaman"]
];

console.log(arregloCosas);
console.log(arregloCosas[3]);


//metodos

//metodos funcionales
//map(), filter(), reduce()

//map() transforma los elementos de un arreglo
let numeroMap = [1, 2, 3, 4, 5, 6];
let cuadrados = numeroMap.map(num => num * num);
console.log(cuadrados);

//filter() filtra los elementos que cumplen algun tipo de condicion

let numerosFilter = [1, 2, 3, 4, 5, 6];
let pares = numerosFilter.filter(num => num % 2 == 0);
console.log(pares);


//Reduce() reduce todos los elementos de un arreglo a un unico valor

let numerosReduce = [1, 2, 3, 4, 5, 6];
let maximo = numerosReduce.reduce((acumulador, num) => (num < acumulador ? num : acumulador), numerosReduce[0]);
console.log(maximo);

//ventajas
//Son ideales para trabajar con transformaciones y manipulaciones complejas de datos dentro de un array
//permiten un estilo de progrmaacion funcional mas limpia y facil de leer

// Ejercicio Tienes un arreglo de objetos donde cada objeto representa a un estudiante (10 estudiantes) con su nombre y las calificaciones
// de sus 3 examenes. Quieres obtener el promedio de cada estudiante y el promedio general de todos los estudiantes.
const estudiates = [
    { nombre: "Kevin Amaguaña", calificaciones: [14, 16, 15] },
    { nombre: "Carlos Amaguaña", calificaciones: [10, 12, 9] },
    { nombre: "Luis Casa", calificaciones: [8, 7, 6] },
    { nombre: "María Casa", calificaciones: [18, 19, 20] },
    { nombre: "Sofía Gutierrez", calificaciones: [15, 14, 13] },
    { nombre: "Pedro Gutierrez", calificaciones: [10, 11, 12] },
    { nombre: "Lucía Sanchez", calificaciones: [20, 19, 18] },
    { nombre: "Jorge Paneluisa", calificaciones: [5, 6, 7] },
    { nombre: "Elena Bastidas", calificaciones: [9, 8, 10] },
    { nombre: "Andres Espin", calificaciones: [16, 15, 14] },
];

// agrega nuevas calificaciones a los estudiantes
estudiates.push({ nombre: "Juan Perez", calificaciones: [10, 11, 12] });
// Calcula el promedio de cada estudiante
const promediosEstudiantes = estudiates.map(estudiante => {
    const sumaCalificaciones = estudiante.calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
    const promedio = sumaCalificaciones / estudiante.calificaciones.length;
    return { nombre: estudiante.nombre, promedio: promedio };
});


console.log(promediosEstudiantes);

// Calcula el promedio general de todos los estudiantes
const sumaPromedios = promediosEstudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.promedio, 0);
const promedioGeneral = sumaPromedios / promediosEstudiantes.length;

console.log(`Promedio general: ${promedioGeneral}`);

// Determinar el máximo y mínimo de las calificaciones de cada estudiante.
const maxMinCalificaciones = estudiates.map(estudiante => {
    const maxCalificacion = Math.max(...estudiante.calificaciones);
    const minCalificacion = Math.min(...estudiante.calificaciones);
    return { nombre: estudiante.nombre, maxCalificacion: maxCalificacion, minCalificacion: minCalificacion };
});

console.log(maxMinCalificaciones);
// Determinar el máximo y mínimo de las calificaciones de cada estudiante sin usar Math.max y Math.min
const maxMinCalificacionesSinMath = estudiates.map(estudiante => {
    let maxCalificacion = estudiante.calificaciones[0];
    let minCalificacion = estudiante.calificaciones[0];
    
    estudiante.calificaciones.forEach(calificacion => {
        if (calificacion > maxCalificacion) {
            maxCalificacion = calificacion;
        }
        if (calificacion < minCalificacion) {
            minCalificacion = calificacion;
        }
    });
    
    return { nombre: estudiante.nombre, maxCalificacion: maxCalificacion, minCalificacion: minCalificacion };
});

console.log(maxMinCalificacionesSinMath);

// Encontrar el estudiante con el peor promedio.
const peorEstudiante = promediosEstudiantes.reduce((peor, estudiante) => {
    return estudiante.promedio < peor.promedio ? estudiante : peor;
}, promediosEstudiantes[0]);

console.log(`Estudiante con el peor promedio: ${peorEstudiante.nombre} con un promedio de ${peorEstudiante.promedio}`);


//Encontrar el estudiante con el mejor promedio.
const mejorEstudiante = promediosEstudiantes.reduce((mejor, estudiante) => {
    return estudiante.promedio > mejor.promedio ? estudiante : mejor;
}, promediosEstudiantes[0]);

console.log(`Estudiante con el mejor promedio: ${mejorEstudiante.nombre} con un promedio de ${mejorEstudiante.promedio}`);

//Imprimir los resultados: Mostrar las calificaciones, clasificaciones y estadísticas de los estudiantes.
console.log("Calificaciones de los estudiantes:");
console.log(estudiates.map(estudiante => `${estudiante.nombre}: ${estudiante.calificaciones.join(", ")}`).join("\n"));

console.log("Promedios de los estudiantes:");
console.log(promediosEstudiantes.map(estudiante => `${estudiante.nombre}: ${estudiante.promedio.toFixed(2)}`).join("\n"));

console.log("Máximas y mínimas calificaciones de los estudiantes:");
console.log(maxMinCalificaciones.map(estudiante => `${estudiante.nombre} - Máxima: ${estudiante.maxCalificacion}, Mínima: ${estudiante.minCalificacion}`).join("\n"));

console.log("Promedio general de todos los estudiantes:");
console.log(promedioGeneral.toFixed(2));

console.log(`Estudiante con el peor promedio: ${peorEstudiante.nombre} con un promedio de ${peorEstudiante.promedio.toFixed(2)}`);
console.log(`Estudiante con el mejor promedio: ${mejorEstudiante.nombre} con un promedio de ${mejorEstudiante.promedio.toFixed(2)}`);
// Imprimir los resultados sin usar toFixed
console.log("Calificaciones de los estudiantes:");
console.log(estudiates.map(estudiante => `${estudiante.nombre}: ${estudiante.calificaciones.join(", ")}`).join("\n"));

console.log("Promedios de los estudiantes:");
console.log(promediosEstudiantes.map(estudiante => `${estudiante.nombre}: ${estudiante.promedio}`).join("\n"));

console.log("Máximas y mínimas calificaciones de los estudiantes:");
console.log(maxMinCalificaciones.map(estudiante => `${estudiante.nombre} - Máxima: ${estudiante.maxCalificacion}, Mínima: ${estudiante.minCalificacion}`).join("\n"));

console.log("Promedio general de todos los estudiantes:");
console.log(promedioGeneral);

console.log(`Estudiante con el peor promedio: ${peorEstudiante.nombre} con un promedio de ${peorEstudiante.promedio}`);
console.log(`Estudiante con el mejor promedio: ${mejorEstudiante.nombre} con un promedio de ${mejorEstudiante.promedio}`);