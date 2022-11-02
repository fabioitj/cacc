using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebServiceCerto.Dao;
using WebServiceCerto.Model;

namespace WebServiceCerto.Controllers
{
    /// <summary>
    /// Controlador Cargos
    /// </summary>    
    [Route("api/[controller]")]
    [ApiController]
    public class EventosController : ControllerBase
    {
        /// <summary>
        /// Retorna os registros de eventos
        /// </summary>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
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

        /// <summary>
        /// Retorna os registros de eventos
        /// </summary>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
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

       
        /// <summary>
        /// Cria um registro
        /// </summary>
        /// <param name="model">Modelo de Criação</param>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
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

        /// <summary>
        /// Edita o Registro
        /// </summary>
        /// <param name="id">id do registro</param>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
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

        /// <summary>
        /// Deletar o registro
        /// </summary>
        /// <param name="id">id do registro</param>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
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