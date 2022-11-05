using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using cacc_backend.Dao;
using cacc_backend.Model;

namespace cacc_backend.Controllers
{  
    [Route("api/[controller]")]
    [ApiController]
    public class EventosController : ControllerBase
    {
        [HttpGet("[Action]")]
        [Authorize]
        public JsonResult getEventoById(string id)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoEventos daoEventos = new DaoEventos();
                object data = daoEventos.getEventoById(id);

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
        public JsonResult getEventos()
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoEventos daoEventos = new DaoEventos();
                object data = daoEventos.getEventos();

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
        public JsonResult createRegistro([FromBody] EventoCreateModel model)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoEventos daoEventos = new DaoEventos();
                bool deu_certo = daoEventos.createRegistro(model);

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
        public JsonResult updateRegistro([FromBody] EventoUpdateModel model)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoEventos daoEventos = new DaoEventos();
                bool deu_certo = daoEventos.updateRegistro(model);

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
                DaoEventos daoEventos = new DaoEventos();
                bool deu_certo = daoEventos.deleteRegistro(id);

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