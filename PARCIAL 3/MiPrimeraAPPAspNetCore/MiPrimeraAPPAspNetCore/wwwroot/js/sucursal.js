window.onload = function () {
    listarSucursal();
}

let objSucursal;

async function listarSucursal() {
    objSucursal = {
        url: "Sucursal/ListarSucursales",
        cabeceras: ["Id Sucursal", "Nombre", "Direccion"],
        propiedades: ["idSucursal", "nombre", "direccion"],
        divContenedorTabla: "divContenedorTabla"
    }
    pintar(objSucursal);
}


function BuscarSucursal() {
    let form = document.getElementById("frmBusqueda");
    //Constructor que nos trae toda la informacion 
    let frm = new FormData(form);

    fetchPost("Sucursal/filtrarSucursales", "json", frm, function (res) {
        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
    });
}

function LimpiarSucursal() {

    LimpiarDatos("frmBusqueda");
    listarSucursal();
}
