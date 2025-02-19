window.onload = function () {
    listarTipoMedicamento();
}

let objTipoMedicamento;

function filtrarTipoMedicamento() {
    let nombre = get("txtNombreTipoMedicamento");
    if (nombre == "") {
        listarTipoMedicamento();
    }
    else {
        objTipoMedicamento.url = "TipoMedicamento/FiltrartipoMedicamento/?nombre=" + nombre;
        pintar(objTipoMedicamento);
    }
}

async function listarTipoMedicamento() {

    objTipoMedicamento = {
        url: "TipoMedicamento/ListartipoMedicamento",
        cabeceras: ["Id tipo Medicamento", "Nombre", "Descripcion"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion"]
    }

    pintar(objTipoMedicamento);
}


function Buscar() {
    let nombreTipoMedicamento = document.getElementById("txtNombreTipoMedicamento").value;
    objTipoMedicamento.url = "TipoMedicamento/FiltrartipoMedicamento/?nombre=" + nombreTipoMedicamento,

        pintar(objTipoMedicamento);
}

function Limpiar() {
    listarTipoMedicamento();
    set("txtNombreTipoMedicamento");
}
