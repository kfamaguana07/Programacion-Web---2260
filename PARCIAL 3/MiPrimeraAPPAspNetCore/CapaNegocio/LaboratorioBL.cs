using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaDatos;
using CapaEntidad;

namespace CapaNegocio
{
    public class LaboratorioBL
    {
        public List<LaboratorioCLS> ListarLaboratorio()
        {
            LaboratorioDAL laboratorioDAL = new LaboratorioDAL();
            return laboratorioDAL.listarLaboratorios();
        }

        public List<LaboratorioCLS> filtrarLaboratorio(LaboratorioCLS objLaboratorio)
        {
            LaboratorioDAL laboratorioDAL = new LaboratorioDAL();
            return laboratorioDAL.filtrarLaboratorios(objLaboratorio);
        }
    }
}
