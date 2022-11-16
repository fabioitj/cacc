using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cacc_backend.Model
{
    public class Diretoria
    {
        public string iddiretoria { get; set; }
        public string nome { get; set; }
        public string idcargo { get; set; }
        public string dscargo { get; set; }
        public string apresentacao { get; set; }
        public string imagem { get; set; }
        public string ativo { get; set; }
    }

    public class CreateDiretoria
    {
        public string iddiretoria { get; set; }
        public string nome { get; set; }
        public string idcargo { get; set; }
        public string apresentacao { get; set; }
        public string imagem { get; set; }
        
        public string getId()
        {
            return this.iddiretoria;
        }
    }

    public class UpdateDiretoria
    {
        public string iddiretoria { get; set; }
        public string nome { get; set; }
        public string idcargo { get; set; }
        public string apresentacao { get; set; }
        public string imagem { get; set; }

        public string getId()
        {
            return this.iddiretoria;
        }
    }

    public class AlterarStatusDiretoria
    {
        public string iddiretoria { get; set; }
    }
}
