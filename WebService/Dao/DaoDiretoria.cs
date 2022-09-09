using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WsCACC.Model;

namespace WsCACC.Dao
{
    public class DaoDiretoria
    {
        public bool updateRegistro(UpdateDiretoria model)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"UPDATE
                                    CACC.DIRETORIA
                                SET
                                    NOME = '{model.nome}',
                                    IDCARGO = '{model.idcargo}',
                                    APRESENTACAO = '{model.apresentacao}',
                                    IMAGEM = '{model.imagem}'
                                WHERE
                                    IDDIRETORIA = '{model.iddiretoria}'";

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

        public bool createRegistro(CreateDiretoria model)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"    INSERT INTO 
                                        CACC.DIRETORIA
                                        (
                                            NOME,
                                            IDCARGO,
                                            APRESENTACAO,
                                            IMAGEM,
                                            ATIVO
                                        )
                                        VALUES
                                        (
                                            '{model.nome}',
                                            '{model.idcargo}',
                                            '{model.apresentacao}',
                                            '{model.imagem}',
                                            'S'
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
        }

        public List<Diretoria> getDiretoria()
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"select
	                                di.iddiretoria,
                                    di.nome,
                                    di.apresentacao,
                                    di.ativo,
                                    di.imagem,
                                    carg.idcargo,
                                    carg.descricao
                                from
	                                cacc.diretoria di
                                    LEFT JOIN cacc.cargos carg 
                                    ON di.idcargo = carg.idcargo
                                where
	                                di.ativo = 'S'
                                order by
	                                carg.ordem";

                MySqlDataReader table = conexao.ExecuteQuery(sql);
                List<Diretoria> diretoria = new List<Diretoria>();
                while (table.Read())
                {
                    Diretoria item = new Diretoria();
                    item.iddiretoria = table["IDDIRETORIA"].ToString();
                    item.nome = table["NOME"].ToString();
                    item.idcargo = table["IDCARGO"].ToString();
                    item.dscargo = table["DESCRICAO"].ToString();
                    item.apresentacao = table["APRESENTACAO"].ToString();

                    byte[] byteImage = (byte[])table["IMAGEM"];
                    if (byteImage.Length > 0)
                        item.imagem = "data:image/png;base64," + BinaryToText(byteImage);

                    item.ativo = table["ATIVO"].ToString();

                    diretoria.Add(item);
                }
                table.Close();

                return diretoria;
            }
            catch(Exception ex)
            {
                throw ex;
            }
            finally
            {
                conexao.conn.Close();
            }
        }

        public string BinaryToText(byte[] data)
        {
            return Encoding.UTF8.GetString(data);
        }

        public List<Diretoria> getFullDiretoria()
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"select
	                                di.iddiretoria,
                                    di.nome,
                                    di.apresentacao,
                                    di.ativo,
                                    di.imagem,
                                    carg.idcargo,
                                    carg.descricao
                                from
	                                cacc.diretoria di
                                    LEFT JOIN cacc.cargos carg 
                                    ON di.idcargo = carg.idcargo
                                where
	                                di.ativo = 'S'
                                order by
	                                carg.ordem";

                MySqlDataReader table = conexao.ExecuteQuery(sql);
                List<Diretoria> diretoria = new List<Diretoria>();
                while (table.Read())
                {
                    Diretoria item = new Diretoria();
                    item.iddiretoria = table["IDDIRETORIA"].ToString();
                    item.nome = table["NOME"].ToString();
                    item.idcargo = table["IDCARGO"].ToString();
                    item.dscargo = table["DESCRICAO"].ToString();
                    item.apresentacao = table["APRESENTACAO"].ToString();

                    byte[] byteImage = (byte[])table["IMAGEM"];
                    if(byteImage.Length > 0)
                        item.imagem = "data:image/png;base64," + BinaryToText(byteImage);

                    //item.imagem = table["IMAGEM"].ToString();
                    item.ativo = table["ATIVO"].ToString();

                    diretoria.Add(item);
                }
                table.Close();

                return diretoria;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                conexao.conn.Close();
            }
        }

        public Diretoria getDiretoriaById(string id)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"select
	                                di.iddiretoria,
                                    di.nome,
                                    di.apresentacao,
                                    di.ativo,
                                    di.imagem,
                                    carg.idcargo,
                                    carg.descricao
                                from
	                                cacc.diretoria di
                                    LEFT JOIN cacc.cargos carg 
                                    ON di.idcargo = carg.idcargo
                                where
	                                di.iddiretoria = '{id}'
                                order by
	                                carg.ordem";

                MySqlDataReader table = conexao.ExecuteQuery(sql);
                Diretoria diretoria = new Diretoria();
                while (table.Read())
                {
                    diretoria.iddiretoria = table["IDDIRETORIA"].ToString();
                    diretoria.idcargo = table["IDCARGO"].ToString();
                    diretoria.dscargo = table["DESCRICAO"].ToString();
                    diretoria.apresentacao = table["APRESENTACAO"].ToString();
                    diretoria.imagem = table["IMAGEM"].ToString();
                    diretoria.ativo = table["ATIVO"].ToString();
                }
                table.Close();

                return diretoria;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                conexao.conn.Close();
            }
        }

        public Diretoria getDiretoriaById(string id, ConnectionMySql conexao)
        {
            try
            {
                string sql = $@"select
	                                di.iddiretoria,
                                    di.nome,
                                    di.apresentacao,
                                    di.ativo,
                                    di.imagem,
                                    carg.idcargo,
                                    carg.descricao
                                from
	                                cacc.diretoria di
                                    LEFT JOIN cacc.cargos carg 
                                    ON di.idcargo = carg.idcargo
                                where
	                                di.iddiretoria = '{id}'
                                order by
	                                carg.ordem";

                MySqlDataReader table = conexao.ExecuteQuery(sql);
                Diretoria diretoria = new Diretoria();
                while (table.Read())
                {
                    diretoria.iddiretoria = table["IDDIRETORIA"].ToString();
                    diretoria.idcargo = table["IDCARGO"].ToString();
                    diretoria.dscargo = table["DESCRICAO"].ToString();
                    diretoria.apresentacao = table["APRESENTACAO"].ToString();
                    diretoria.imagem = table["IMAGEM"].ToString();
                    diretoria.ativo = table["ATIVO"].ToString();
                }
                table.Close();

                return diretoria;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool alterarStatus(string id)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                conexao.StartTransaction();

                Diretoria diretoria = getDiretoriaById(id, conexao);

                string sqlUpdate = $@"UPDATE CACC.DIRETORIA SET ATIVO = {(diretoria.ativo == "S" ? "'N'" : "'S'")} WHERE IDDIRETORIA = '{id}'";
                conexao.ExecuteNonQuery(sqlUpdate);

                conexao.CommitTransaction();
                return true;
            }
            catch(Exception ex)
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

                string sqlDelete = $@"DELETE FROM CACC.DIRETORIA WHERE IDDIRETORIA = '{id}'";
                conexao.ExecuteNonQuery(sqlDelete);
                conexao.CommitTransaction();

                return true;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
