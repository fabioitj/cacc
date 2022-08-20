using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using WsCACC.Model;

namespace WsCACC.Dao
{
    public class DaoContato
    {
        public bool deleteRegistro(string id)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"DELETE FROM CACC.COMENTARIO WHERE IDCOMENTARIO = '{id}'";
                conexao.StartTransaction();

                conexao.ExecuteNonQuery(sql);

                conexao.CommitTransaction();
                return true;
            }
            catch(Exception ex)
            {
                conexao.RollBackTransaction();
                throw ex;
            }
        }

        public List<MensagemModel> getComentarios()
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"SELECT
	                                IDCOMENTARIO,
                                    EMAIL,
                                    NOME,
                                    OBS
                                FROM
	                                CACC.COMENTARIO";

                MySqlDataReader table = conexao.ExecuteQuery(sql);
                List<MensagemModel> mensagens = new List<MensagemModel>();
                while (table.Read())
                {
                    MensagemModel m = new MensagemModel();
                    m.idcomentario = table["IDCOMENTARIO"].ToString();
                    m.email = table["EMAIL"].ToString();
                    m.nome = table["NOME"].ToString();
                    m.obs = table["OBS"].ToString();

                    mensagens.Add(m);
                }
                table.Close();

                return mensagens;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public bool sendComentario(string email, string nome, string obs)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"INSERT INTO
                                    CACC.COMENTARIO
                                    (
                                        EMAIL,
                                        NOME,
                                        OBS
                                    )
                                    VALUES
                                    (
                                        '{email}',
                                        '{nome}',
                                        '{obs}'
                                    )";

                conexao.StartTransaction();

                conexao.ExecuteNonQuery(sql);

                conexao.CommitTransaction();
                return true;
            }
            catch(Exception ex)
            {
                conexao.RollBackTransaction();
                throw ex;
            }
            finally
            {
                conexao.conn.Close();
            }
        }
    }
}
