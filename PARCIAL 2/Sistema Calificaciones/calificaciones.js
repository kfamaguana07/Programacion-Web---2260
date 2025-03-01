const estudiantes =  [
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

// Calcula el promedio de cada estudiante
const promediosEstudiantes = estudiantes.map(estudiante => {
    const sumaCalificaciones = estudiante.calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
    const promedio = sumaCalificaciones / estudiante.calificaciones.length;
    return { nombre: estudiante.nombre, promedio: promedio };
});

// Clasificación por calificación: Al clasificar a los estudiantes
const clasificacionEstudiantes = promediosEstudiantes.map(estudiante => {
    let clasificacion;
    if (estudiante.promedio >= 16) {
        clasificacion = 'Excelente';
    } else if (estudiante.promedio >= 12 && estudiante.promedio < 16) {
        clasificacion = 'Bueno';
    } else if (estudiante.promedio >= 8 && estudiante.promedio < 12) {
        clasificacion = 'Aprobado';
    } else {
        clasificacion = 'Reprobado';
    }
    return { nombre: estudiante.nombre, promedio: estudiante.promedio, clasificacion: clasificacion };
});

// Determinar el máximo y mínimo de las calificaciones de cada estudiante.
const maxMinCalificacionesSinMath = estudiantes.map(estudiante => {
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

// Encontrar el estudiante con el peor promedio.
const peorEstudiante = promediosEstudiantes.reduce((peor, estudiante) => {
    return estudiante.promedio < peor.promedio ? estudiante : peor;
}, promediosEstudiantes[0]);

console.log(`Estudiante con el peor promedio: ${peorEstudiante.nombre} con un promedio de ${peorEstudiante.promedio}`);

// Encontrar el estudiante con el mejor promedio.
const mejorEstudiante = promediosEstudiantes.reduce((mejor, estudiante) => {
    return estudiante.promedio > mejor.promedio ? estudiante : mejor;
}, promediosEstudiantes[0]);

console.log(`Estudiante con el mejor promedio: ${mejorEstudiante.nombre} con un promedio de ${mejorEstudiante.promedio}`);

// Impresión según la estructura indicada
for (let i = 0; i < clasificacionEstudiantes.length; i++) {
    console.log("---------------------------------------------------------");
    console.log(clasificacionEstudiantes[i].nombre);
    console.log({ promedio: clasificacionEstudiantes[i].promedio });
    if (clasificacionEstudiantes[i].promedio >= 16) {
        console.log("Excelente");
    } else if (clasificacionEstudiantes[i].promedio >= 12 && clasificacionEstudiantes[i].promedio < 16) {
        console.log("Bueno");
    } else if (clasificacionEstudiantes[i].promedio >= 8 && clasificacionEstudiantes[i].promedio < 12) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }
}
