import { useEffect } from "react";
import { useState } from "react";
import {
  deleteRegistro,
  saveRegistro,
  getFullContas,
} from "../../../hooks/contasApi";
import "./ContasAdmin.css";
import { FaRegEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Button } from "reactstrap";
import Modal from "../../../components/Modal/Modal.js";
import Field from "../../../components/Field/field";

const ContasAdmin = () => {
  const [list, setList] = useState([]);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(true);

  useEffect(() => {
    refreshTable();
  }, []);

  useEffect(() => {
    if (!modalCreateIsOpen) resetFields();
  }, [modalCreateIsOpen]);

  const refreshTable = () => {
    getFullContas()
      .then((response) => {
        let data = response.data;
        console.log(data);
        if (data.success) {
          setList(data.data);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const editarRegistro = (item) => {
    setIdconta(item.idconta);
    setNome(item.nome);
    setEmail(item.email);

    setModalCreateIsOpen(true);
    setIsRegister(false);
  };

  const deleteRegistroButton = (id) => {
    deleteRegistro(id)
      .then(() => {
        refreshTable();
      })
      .catch((error) => alert(error));
  };

  const createNewRegister = () => {
    setModalCreateIsOpen(true);
    setIsRegister(true);
  };

  const [idconta, setIdconta] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const createCallback = () => {
    let dados = {
      idconta,
      nome,
      email,
      senha,
    };

    saveRegistro(dados)
      .then((response) => {
        console.log(response);
        let data = response.data;
        if (data.success) refreshTable();
        else alert(data.itens[0].mensagem);
      })
      .catch((error) => alert(error));

    resetFields();
  };

  const resetFields = () => {
    setIdconta("");
    setNome("");
    setEmail("");
    setSenha("");
  };

  return (
    <>
      <div className="Diretoria">
        <div className="DiretoriaBox">
          <div className="DiretoriaBoxHeader">
            <h2>Gerenciamento de Contas</h2>
            <button onClick={createNewRegister} className="btn btn-success">
              <FaPlus />
            </button>
          </div>
          <div className="DiretoriaBoxBody">
            <div className="RowFilters">
              {/* TODO: FILTERS AND INSERT BUTTON */}
            </div>
            <div className="RowTable">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody className="DiretoriaTableBody">
                  {list.map((item, i) => {
                    return (
                      <tr>
                        <td>
                          <Button
                            className="Button"
                            color="primary"
                            onClick={() => {
                              editarRegistro(item);
                            }}
                            title="Editar Registro"
                          >
                            <FaRegEdit />
                          </Button>
                        </td>
                        <td>
                          <Button
                            className="Button"
                            color="danger"
                            onClick={() => {
                              deleteRegistroButton(item.idconta);
                            }}
                            title="Excluir registro"
                          >
                            <FaTrash />
                          </Button>
                        </td>
                        <td style={{ padding: "8px" }}>{item.idconta}</td>
                        <td style={{ textAlign: "left", padding: "8px" }}>
                          {item.nome}
                        </td>
                        <td>{item.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {modalCreateIsOpen && (
        <Modal
          title="Cadastro de Contas"
          btnText="Salvar"
          setOpenModal={setModalCreateIsOpen}
          callback={createCallback}
        >
          <form role="form" className="FormCreateRegister">
            <div className="FormBox">
              <div className="BoxField">
                <Field
                  label={"Nome"}
                  typeInput={"text"}
                  typeOfField={"input"}
                  classe={"LighterThemeInput"}
                  get={nome}
                  set={setNome}
                />
              </div>
              {isRegister && (
                <>
                  <div className="BoxField">
                    <Field
                      label={"Email"}
                      typeInput={"email"}
                      typeOfField={"input"}
                      classe={"LighterThemeInput"}
                      get={email}
                      set={setEmail}
                    />
                  </div>
                  <div className="BoxField">
                    <Field
                      label={"Senha"}
                      typeInput={"password"}
                      typeOfField={"input"}
                      classe={"LighterThemeInput"}
                      get={senha}
                      set={setSenha}
                    />
                  </div>
                </>
              )}
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ContasAdmin;
