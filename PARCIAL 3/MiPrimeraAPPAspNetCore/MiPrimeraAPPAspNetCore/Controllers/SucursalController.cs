using CapaDatos;
using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;

namespace MiPrimeraAPPAspNetCore.Controllers
{
    public class SucursalController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public List<SucursalCLS> ListarSucursales()
        {
            SucursalDAL sucursalDAL = new SucursalDAL();
            return sucursalDAL.listarSucursales();
        }


        public List<SucursalCLS> filtrarSucursales(SucursalCLS objSucursal)
        {
            if (objSucursal == null)
            {
                objSucursal = new SucursalCLS();
            }
            SucursalBL obj = new SucursalBL();
            return obj.filtrarSucursal(objSucursal);
        }
    }
}
