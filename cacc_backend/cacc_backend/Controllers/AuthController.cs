using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using cacc_backend.Dao;
using cacc_backend.Model;

namespace cacc_backend.Controllers
{  
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

        [HttpGet("[Action]")]
        [Authorize]
        public JsonResult validateToken()
        {
            Retorno retorno = new Retorno();
            try
            {
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