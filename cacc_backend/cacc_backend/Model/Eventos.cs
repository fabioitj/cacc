using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cacc_backend.Model
{
    public class EventoModel
    {
        public string idevento { get; set; }
        public string titulo { get; set; }
        public string subtitulo { get; set; }
        public string imagem { get; set; }
    }

    public class EventoCreateModel
    {
        public string titulo { get; set; }
        public string subtitulo { get; set; }
        public string imagem { get; set; }
    }

    public class EventoUpdateModel
    {
        public string idevento { get; set; }
        public string titulo { get; set; }
        public string subtitulo { get; set; }
        public string imagem { get; set; }

        public string getId()
        {
            return this.idevento;
        }
    }
}
