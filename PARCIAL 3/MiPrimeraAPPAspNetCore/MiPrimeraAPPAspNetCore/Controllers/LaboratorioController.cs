﻿using CapaDatos;
using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;

namespace MiPrimeraAPPAspNetCore.Controllers
{
    public class LaboratorioController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public List<LaboratorioCLS> ListarLaboratorios()
        {
            LaboratorioDAL laboratorioDAL = new LaboratorioDAL();
            return laboratorioDAL.listarLaboratorios();
        }


        public List<LaboratorioCLS> filtrarLaboratorios(LaboratorioCLS objLaboratorio)
        {
            if (objLaboratorio == null)
            {
                objLaboratorio = new LaboratorioCLS();
            }
            LaboratorioBL obj = new LaboratorioBL();
            return obj.filtrarLaboratorio(objLaboratorio);
        }
    }
}
