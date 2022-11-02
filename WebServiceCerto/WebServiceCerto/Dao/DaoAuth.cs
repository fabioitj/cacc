using MySql.Data.MySqlClient;
using System;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using WebServiceCerto.Model;
using WebServiceCerto.Services;

namespace WebServiceCerto.Dao
{
    public class DaoAuth
    {
        public object authenticate(Signin model)
        {
            try
            {
                User user = getUserByEmailPassword(model.email, model.password);
                if (string.IsNullOrEmpty(user.id))
                    throw new Exception("Usuário ou senha inválidos.");

                string token = TokenService.GenerateToken(user);

                user.senha = "";

                return new
                {
                    user = user,
                    token = token
                };
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public User getUserByEmailPassword(string email, string password)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"SELECT
	                                IDCONTA,
                                    EMAIL,
                                    NOME,
                                    SENHA
                                FROM
	                                cacc.contas
                                WHERE
                                    Upper(EMAIL) = '{email.ToUpper()}'
                                AND SENHA = '{password}'";

                MySqlDataReader table = conexao.ExecuteQuery(sql);
                User user = new User();
                while (table.Read())
                {
                    user.id = table["IDCONTA"].ToString();
                    user.email = table["EMAIL"].ToString();
                    user.name = table["NOME"].ToString();
                    user.senha = table["SENHA"].ToString();

                    break;
                }
                table.Close();

                return user;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
