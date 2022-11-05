using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cacc_backend.Model
{
    public class ContatoCreate
    {
        public string email { get; set; }
        public string nome { get; set; }
        public string obs { get; set; }
    }

    public class ContatoUpdate
    {
        public string idcomentario { get; set; }
        public string obs { get; set; }
    }
}
