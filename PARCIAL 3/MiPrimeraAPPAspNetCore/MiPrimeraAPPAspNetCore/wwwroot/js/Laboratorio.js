window.onload = function () {
    listarLaboratorio();
}

let objLaboratorio;

async function listarLaboratorio() {

    objLaboratorio = {
        url: "Laboratorio/listarLaboratorios",
        cabeceras: ["Id Laboratorio", "Nombre", "Direccion", "Persona Contacto"],
        propiedades: ["idLaboratorio", "nombre", "direccion", "personaContacto" ],
        divContenedorTabla: "divContenedorTabla"
    }

    pintar(objLaboratorio);
}

function BuscarLaboratorio() {
    let form = document.getElementById("frmBusqueda");
    //Constructor que nos trae toda la informacion 
    let frm = new FormData(form);

    fetchPost("Laboratorio/filtrarLaboratorios", "json", frm, function (res) {
        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
    });
}

function LimpiarLaboratorio() {

    LimpiarDatos("frmBusqueda");
    listarLaboratorio();
}

