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
    public class DaoEventos
    {
        public List<EventoModel> getEventos()
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"SELECT
                                    IDEVENTO,
                                    TITULO,
                                    SUBTITULO,
                                    IMAGEM
                                FROM
                                    CACC.EVENTOS";

                MySqlDataReader table = conexao.ExecuteQuery(sql);
                List<EventoModel> cargos = new List<EventoModel>();
                while (table.Read())
                {
                    EventoModel m = new EventoModel();
                    m.idevento = table["IDEVENTO"].ToString();
                    m.titulo = table["TITULO"].ToString();
                    m.subtitulo = table["SUBTITULO"].ToString();
                    byte[] byteImage = (byte[])table["IMAGEM"];
                    if (byteImage.Length > 0)
                        m.imagem = "data:image/png;base64," + BinaryToText(byteImage);

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

        public bool updateRegistro(EventoUpdateModel model)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"UPDATE
                                    CACC.EVENTOS
                                SET
                                    TITULO = '{model.titulo}',
                                    SUBTITULO = '{model.subtitulo}',
                                    IMAGEM = '{model.imagem}'
                                WHERE
                                    IDEVENTO = '{model.idevento}'";

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

        public bool createRegistro(EventoCreateModel model)
        {
            ConnectionMySql conexao = new ConnectionMySql();
            try
            {
                string sql = $@"    INSERT INTO 
                                        CACC.EVENTOS
                                        (
                                            TITULO,
                                            SUBTITULO,
                                            IMAGEM
                                        )
                                        VALUES
                                        (
                                            '{model.titulo}',
                                            '{model.subtitulo}',
                                            '{model.imagem}'
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

                string sqlDelete = $@"DELETE FROM CACC.EVENTOS WHERE IDEVENTO = '{id}'";
                conexao.ExecuteNonQuery(sqlDelete);
                conexao.CommitTransaction();

                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public string BinaryToText(byte[] data)
        {
            return Encoding.UTF8.GetString(data);
        }
    }
}
