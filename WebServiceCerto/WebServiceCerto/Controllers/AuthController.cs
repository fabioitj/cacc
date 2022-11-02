using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebServiceCerto.Dao;
using WebServiceCerto.Model;

namespace WebServiceCerto.Controllers
{
    /// <summary>
    /// Controlador Projetos
    /// </summary>    
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost("[Action]")]
        [AllowAnonymous]
        public JsonResult signin([FromBody] Signin model)
        {
            Retorno retorno = new Retorno();
            try
            {
                DaoAuth daoAuth = new DaoAuth();
                retorno.data = daoAuth.authenticate(model);
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
    }
}