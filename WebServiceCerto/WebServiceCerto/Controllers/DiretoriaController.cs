using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebServiceCerto.Dao;
using WebServiceCerto.Model;

namespace WebServiceCerto.Controllers
{
    /// <summary>
    /// Controlador Quem Somos
    /// </summary>    
    [Route("api/[controller]")]
    [ApiController]
    public class DiretoriaController : ControllerBase
    {
        /// <summary>
        /// Retorna os registros de cargos
        /// </summary>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
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

        /// <summary>
        /// Retorna os registros da diretoria ativos
        /// </summary>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
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

        /// <summary>
        /// Retorna os registros da diretoria ativos e desativados
        /// </summary>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
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

        /// <summary>
        /// Ativa ou Desativa o registro
        /// </summary>
        /// <param name="id">id do registro</param>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
        [HttpPut("[Action]")]
        [Authorize]
        public JsonResult alterarStatus(string id)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoDiretoria daoDiretoria = new DaoDiretoria();
                bool deu_certo = daoDiretoria.alterarStatus(id);

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

        /// <summary>
        /// Cria um registro
        /// </summary>
        /// <param name="model">Modelo de Criação</param>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
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

        /// <summary>
        /// Edita o Registro
        /// </summary>
        /// <param name="id">id do registro</param>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
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