using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using cacc_backend.Dao;
using cacc_backend.Model;

namespace cacc_backend.Controllers
{  
    [Route("api/[controller]")]
    [ApiController]
    public class ContasController : ControllerBase
    {
        [HttpGet("[Action]")]
        [Authorize]
        public JsonResult getFullContas()
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoContas daoCargos = new DaoContas();
                object data = daoCargos.getFullContas();

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

        [HttpGet("{id}")]
        [Authorize]
        public JsonResult getContaById(string id)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoContas daoCargos = new DaoContas();
                object data = daoCargos.getContasById(id);

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

        [HttpPost("[Action]")]
        [Authorize]
        public JsonResult createRegistro([FromBody] ContaCreateModel model)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoContas daoCargos = new DaoContas();
                bool deu_certo = daoCargos.createRegistro(model);

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
        public JsonResult updateRegistro([FromBody] ContaUpdateModel model)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoContas daoCargos = new DaoContas();
                bool deu_certo = daoCargos.updateRegistro(model);

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

        [HttpDelete("[Action]/{id}")]
        [Authorize]
        public JsonResult deleteRegistro(string id)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoContas daoCargos = new DaoContas();
                bool deu_certo = daoCargos.deleteRegistro(id);

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