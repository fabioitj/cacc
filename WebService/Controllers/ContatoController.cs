using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WsCACC.Dao;
using WsCACC.Model;

namespace WsCACC.Controllers
{
    /// <summary>
    /// Controlador Quem Somos
    /// </summary>    
    [Route("api/v{version:apiVersion}/[controller]")]
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
        public JsonResult sendComentario(string email, string nome, string obs)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoContato daoDiretoria = new DaoContato();
                bool deu_certo = daoDiretoria.sendComentario(email, nome, obs);

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
        [HttpDelete("[Action]")]
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