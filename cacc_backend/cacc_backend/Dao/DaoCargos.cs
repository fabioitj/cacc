using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using cacc_backend.Model;

namespace cacc_backend.Dao
{
    public class DaoCargos
    {
        public CargoModel getCargosById(string id)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"SELECT
                                    IDCARGO,
                                    DESCRICAO,
                                    ORDEM
                                FROM
                                    cacc.cargos
                                WHERE
                                    IDCARGO = '{id}'
                                ORDER BY
                                    ORDEM";

                MySqlDataReader table = conexao.ExecuteQuery(sql);
                CargoModel m = new CargoModel();
                while (table.Read())
                {
                    m.idcargo = table["IDCARGO"].ToString();
                    m.descricao = table["DESCRICAO"].ToString();
                    m.ordem = table["ORDEM"].ToString();
                }

                return m;
            }
            catch(Exception ex)
            {
                throw ex; 
            }
        }

        public List<CargoModel> getFullCargos()
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"SELECT
                                    IDCARGO,
                                    DESCRICAO,
                                    ORDEM
                                FROM
                                    cacc.cargos
                                ORDER BY
                                    ORDEM";

                MySqlDataReader table = conexao.ExecuteQuery(sql);
                List<CargoModel> cargos = new List<CargoModel>();
                while (table.Read())
                {
                    CargoModel m = new CargoModel();
                    m.idcargo = table["IDCARGO"].ToString();
                    m.descricao = table["DESCRICAO"].ToString();
                    m.ordem = table["ORDEM"].ToString();

                    cargos.Add(m);
                }
                table.Close();

                return cargos;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public bool updateRegistro(CargoUpdateModel model)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"UPDATE
                                    cacc.cargos
                                SET
                                    DESCRICAO = '{model.descricao}',
                                    ORDEM = '{model.ordem}'
                                WHERE
                                    IDCARGO = '{model.idcargo}'";

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

        public bool createRegistro(CargoCreateModel model)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"    INSERT INTO 
                                        cacc.cargos
                                        (
                                            DESCRICAO,
                                            ORDEM
                                        )
                                        VALUES
                                        (
                                            '{model.descricao}',
                                            '{model.ordem}'
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

                string sqlDelete = $@"DELETE FROM cacc.cargos WHERE IDCARGO = '{id}'";
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
