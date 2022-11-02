using System;
using System.Collections.Generic;
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
    public class ContatoController : ControllerBase
    {
        
        /// <summary>
        /// Ativa ou Desativa o registro
        /// </summary>
        /// <param name="id">id do registro</param>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
        [HttpPost("[Action]")]
        [AllowAnonymous]
        public JsonResult sendComentario(ContatoCreate contato)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoContato daoDiretoria = new DaoContato();
                bool deu_certo = daoDiretoria.sendComentario(contato.email, contato.nome, contato.obs);

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
        /// Ativa ou Desativa o registro
        /// </summary>
        /// <param name="id">id do registro</param>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
        [HttpPut("[Action]")]
        [Authorize]
        public JsonResult updateComentario(ContatoUpdate contato)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoContato daoDiretoria = new DaoContato();
                bool deu_certo = daoDiretoria.updateComentario(contato.idcomentario, contato.obs);

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
        /// Ativa ou Desativa o registro
        /// </summary>
        /// <param name="id">id do registro</param>
        /// <returns>
        /// </returns>
        /// <response code="200">Sucess</response>
        [HttpGet("[Action]")]
        [Authorize]
        public JsonResult getComentarios()
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoContato daoDiretoria = new DaoContato();
                List<MensagemModel> lista = daoDiretoria.getComentarios();


                retorno.data = lista;
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
        [HttpGet("[Action]")]
        [Authorize]
        public JsonResult getComentarioById(string id)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoContato daoDiretoria = new DaoContato();
                MensagemModel mensagem = daoDiretoria.getComentarioById(id);


                retorno.data = mensagem;
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
        [HttpDelete("[Action]")]
        [Authorize]
        public JsonResult deleteRegistro(string id)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoContato daoDiretoria = new DaoContato();
                bool deu_certo = daoDiretoria.deleteRegistro(id);

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
    }
}