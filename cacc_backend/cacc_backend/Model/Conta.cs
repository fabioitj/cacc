using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cacc_backend.Model
{
    public class ContaModel
    {
        public string idconta { get; set; }
        public string nome { get; set; }
        public string email { get; set; }
        public string senha { get; set; }
    }

    public class ContaUpdateModel
    {
        public string idconta { get; set; }
        public string nome { get; set; }

        public string getId()
        {
            return this.idconta;
        }
    }

    public class ContaCreateModel
    {
        public string nome { get; set; }
        public string email { get; set; }
        public string senha { get; set; }
    }
}
