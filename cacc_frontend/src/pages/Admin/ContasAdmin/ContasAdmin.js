import { useEffect } from "react";
import { useState } from "react";
import { deleteRegistro, saveRegistro, getFullContas } from "../../../hooks/contasApi";
import "./ContasAdmin.css";
import { FaRegEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Button } from "reactstrap";
import Modal from "../../../components/Modal/Modal.js";
import Field from "../../../components/Field/field";

const ContasAdmin = () => {

    const [list, setList] = useState([]);
    const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
    
    useEffect(() => {
        // refreshTable();
    }, []);

    useEffect(() => {
        if(!modalCreateIsOpen)
            resetFields();
    }, [modalCreateIsOpen])

    const refreshTable = () => {
        getFullContas()
        .then((response) => {
            let data = response.data;
            console.log(data);
            if(data.success){   
                setList(data.data);
            }
        })
        .catch((error) => {
            alert(error);
        });
    }

    const editarRegistro = (item) => {
        setIdconta(item.idconta);
        setNome(item.nome);
        setEmail(item.email);

        setModalCreateIsOpen(true);
    }

    const deleteRegistroButton = (id) => {
        deleteRegistro(id)
            .then(() => {
                refreshTable();
            })
            .catch((error) => alert(error));
    }

    const createNewRegister = () => {
        setModalCreateIsOpen(true);
    }

    const [idconta, setIdconta] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const createCallback = () => {
        let dados = {
            idconta,
            nome,
            email
        };

        saveRegistro(dados)
            .then((response) => {
                console.log(response);
                let data = response.data;
                if(data.success)
                    refreshTable();
                else
                    alert(data.itens[0].mensagem);
            })
            .catch((error) => alert(error));

        resetFields();
    }

    const resetFields = () => {
        setIdconta("");
        setNome("");
        setEmail("");
        setSenha("");

    }

    return (
        <>
            <div className="Diretoria">
                <div className="DiretoriaBox">
                    <div className="DiretoriaBoxHeader">
                        <h2>Gerenciamento de Contas</h2>
                        <button onClick={createNewRegister} className="btn btn-success"><FaPlus/></button>
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
                                        <th style={{width: "90%"}}>Nome</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody className="DiretoriaTableBody">
                                    {
                                        list.map((item, i) => {
                                            return (
                                                <tr>
                                                    <td><Button className="Button" color="primary" onClick={() => { editarRegistro(item)}} title="Editar Registro"><FaRegEdit/></Button></td>
                                                    <td><Button className="Button" color="danger" onClick={() => { deleteRegistroButton(item.idconta )}} title="Excluir registro"><FaTrash/></Button></td>
                                                    <td style={{padding: "8px"}}>{item.idconta}</td>
                                                    <td style={{textAlign: "left", padding: "8px"}}>{item.nome}</td>
                                                    <td>{item.email}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {modalCreateIsOpen && 
                <Modal title="Cadastro de Cargo" btnText="Salvar" setOpenModal={setModalCreateIsOpen} callback={createCallback}>
                    <form role="form" className="FormCreateRegister">
                        <div className="FormBox">
                            <div className="BoxField">
                                {/* <Field label="Descrição" classe="LighterThemeInput" typeInput="text" typeOfField="input" get={nome} set={setNome}/> */}
                                {/* <label>Nome</label>
                                <input type="text" value={nome} onChange={(e) => {setNome(e.target.value)}} placeholder="Nome..."/> */}
                            </div>
                            <div className="BoxField">
                                {/* <Field label="Ordem de Importância" classe="LighterThemeInput" typeInput="number" typeOfField="input" get={ordem} set={setOrdem}/> */}

                                {/* <label>Cargo</label>
                                <input type="text" value={cargo} onChange={(e) => {setCargo(e.target.value)}} placeholder="Cargo..."/> */}
                            </div>
                        </div>
                    </form>
                </Modal>
            }
        </>

        
    );
}

export default ContasAdmin;