using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WsCACC.Model
{
    public class CargoModel
    {
        public string idcargo { get; set; }
        public string descricao { get; set; }
        public string ordem { get; set; }
    }

    public class CargoCreateModel
    {
        public string descricao { get; set; }
        public string ordem { get; set; }
    }

    public class CargoUpdateModel
    {
        public string idcargo { get; set; }
        public string descricao { get; set; }
        public string ordem { get; set; }

        public string getId()
        {
            return this.idcargo;
        }
    }
}
