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
    public class CargosController : ControllerBase
    {
        /// <summary>
        /// Retorna os registros de cargos
        /// </summary>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
        [HttpGet("[Action]")]
        [Authorize]
        public JsonResult getFullCargos()
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoCargos daoCargos = new DaoCargos();
                object data = daoCargos.getFullCargos();

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
        /// Retorna os registros de cargos
        /// </summary>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
        [HttpGet("{id}")]
        [Authorize]
        public JsonResult getCargosById(string id)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoCargos daoCargos = new DaoCargos();
                object data = daoCargos.getCargosById(id);

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
        public JsonResult createRegistro([FromBody] CargoCreateModel model)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoCargos daoCargos = new DaoCargos();
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

        /// <summary>
        /// Edita o Registro
        /// </summary>
        /// <param name="id">id do registro</param>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
        [HttpPut("[Action]")]
        [Authorize]
        public JsonResult updateRegistro([FromBody] CargoUpdateModel model)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoCargos daoCargos = new DaoCargos();
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
                DaoCargos daoCargos = new DaoCargos();
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