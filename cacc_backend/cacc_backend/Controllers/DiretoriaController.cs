using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using cacc_backend.Dao;
using cacc_backend.Model;

namespace cacc_backend.Controllers
{   
    [Route("api/[controller]")]
    [ApiController]
    public class DiretoriaController : ControllerBase
    {
        [HttpGet("{id}")]
        [Authorize]
        public JsonResult getDiretoriaById(string id)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoDiretoria daoDiretoria = new DaoDiretoria();
                object data = daoDiretoria.getDiretoriaById(id);

                retorno.data = data;
                retorno.success = true;

                return new JsonResult(retorno);
            }
            catch (Exception ex)
            {
                retorno.addItem(ex.Message);
                retorno.success = false;

                return new JsonResult(retorno);
            }
        }

        [HttpGet("[Action]")]
        [AllowAnonymous]
        public JsonResult getDiretoria()
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoDiretoria daoDiretoria = new DaoDiretoria();
                object diretoria = daoDiretoria.getDiretoria();

                retorno.data = diretoria;
                retorno.success = true;

                return new JsonResult(retorno);
            }
            catch (Exception ex)
            {
                retorno.addItem(ex.Message);
                retorno.success = false;

                return new JsonResult(retorno);
            }
        }

        [HttpGet("[Action]")]
        [Authorize]
        public JsonResult getFullDiretoria()
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoDiretoria daoDiretoria = new DaoDiretoria();
                object data = daoDiretoria.getFullDiretoria();

                retorno.data = data;
                retorno.success = true;

                return new JsonResult(retorno);
            }
            catch (Exception ex)
            {
                retorno.addItem(ex.Message);
                retorno.success = false;

                return new JsonResult(retorno);
            }
        }

        [HttpPut("[Action]")]
        [Authorize]
        public JsonResult alterarStatus(AlterarStatusDiretoria model)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoDiretoria daoDiretoria = new DaoDiretoria();
                bool deu_certo = daoDiretoria.alterarStatus(model.iddiretoria);

                if (deu_certo)
                {
                    retorno.data = model.iddiretoria;
                    retorno.success = true;
                }

                return new JsonResult(retorno);
            }
            catch (Exception ex)
            {
                retorno.addItem(ex.Message);
                retorno.success = false;

                return new JsonResult(retorno);
            }
        }

        [HttpPost("[Action]")]
        [Authorize]
        public JsonResult createRegistro([FromBody] CreateDiretoria model)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoDiretoria daoDiretoria = new DaoDiretoria();
                bool deu_certo = daoDiretoria.createRegistro(model);

                if (deu_certo)
                {
                    retorno.data = "OK";
                    retorno.success = true;
                }

                return new JsonResult(retorno);
            }
            catch (Exception ex)
            {
                retorno.addItem(ex.Message);
                retorno.success = false;

                return new JsonResult(retorno);
            }
        }

        [HttpPut("[Action]")]
        [Authorize]
        public JsonResult updateRegistro([FromBody] UpdateDiretoria model)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoDiretoria daoDiretoria = new DaoDiretoria();
                bool deu_certo = daoDiretoria.updateRegistro(model);

                if (deu_certo)
                {
                    retorno.data = model.getId();
                    retorno.success = true;
                }

                return new JsonResult(retorno);
            }
            catch (Exception ex)
            {
                retorno.addItem(ex.Message);
                retorno.success = false;

                return new JsonResult(retorno);
            }
        }

        [HttpDelete("[Action]")]
        [Authorize]
        public JsonResult deleteRegistro(string id)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoDiretoria daoDiretoria = new DaoDiretoria();
                bool deu_certo = daoDiretoria.deleteRegistro(id);

                if (deu_certo)
                {
                    retorno.data = id;
                    retorno.success = true;
                }

                return new JsonResult(retorno);
            }
            catch (Exception ex)
            {
                retorno.addItem(ex.Message);
                retorno.success = false;

                return new JsonResult(retorno);
            }
        }
    }
}