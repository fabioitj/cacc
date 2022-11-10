using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using cacc_backend.Model;

namespace cacc_backend.Dao
{
    public class DaoContas
    {
        public ContaModel getContasById(string id)
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
                                    IDCONTA = '{id}'";

                MySqlDataReader table = conexao.ExecuteQuery(sql);
                ContaModel m = new ContaModel();
                while (table.Read())
                {
                    m.idconta = table["IDCONTA"].ToString();
                    m.email = table["EMAIL"].ToString();
                    m.nome = table["NOME"].ToString();
                    m.senha = table["SENHA"].ToString();
                }

                return m;
            }
            catch(Exception ex)
            {
                throw ex; 
            }
        }

        public List<ContaModel> getFullContas()
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
                                    cacc.contas";

                MySqlDataReader table = conexao.ExecuteQuery(sql);
                List<ContaModel> contas = new List<ContaModel>();
                while (table.Read())
                {
                    ContaModel m = new ContaModel();
                    m.idconta = table["IDCONTA"].ToString();
                    m.nome = table["NOME"].ToString();
                    m.email = table["EMAIL"].ToString();
                    m.senha = table["SENHA"].ToString();

                    contas.Add(m);
                }
                table.Close();

                return contas;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public bool updateRegistro(ContaUpdateModel model)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"UPDATE
                                    cacc.contas
                                SET
                                    NOME = '{model.nome}'
                                WHERE
                                    IDCONTA = '{model.idconta}'";

                conexao.StartTransaction();
                conexao.ExecuteNonQuery(sql);
                conexao.CommitTransaction();

                return true;
            }
            catch (Exception ex)
            {
                conexao.RollBackTransaction();
                throw ex;
            }
        }

        public bool createRegistro(ContaCreateModel model)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"    INSERT INTO 
                                        cacc.contas
                                        (
                                            EMAIL,
                                            NOME,
                                            SENHA
                                        )
                                        VALUES
                                        (
                                            '{model.email}',
                                            '{model.nome}',
                                            '{model.senha}'
                                        )";

                conexao.StartTransaction();
                conexao.ExecuteNonQuery(sql);
                conexao.CommitTransaction();
                return true;
            }
            catch (Exception ex)
            {
                conexao.RollBackTransaction();
                throw ex;
            }
        }

        public bool deleteRegistro(string id)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                conexao.StartTransaction();

                string sqlDelete = $@"DELETE FROM cacc.contas WHERE IDCONTA = '{id}'";
                conexao.ExecuteNonQuery(sqlDelete);
                conexao.CommitTransaction();

                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
