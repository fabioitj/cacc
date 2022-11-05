import "./CargosAdmin.css";
import { useEffect, useState } from "react";
import { getFullCargos, saveRegistro, deleteRegistro } from "../../../hooks/cargosApi.js";
import { FaImage, FaRegEdit, FaHandPointUp, FaHandPointDown, FaTrash, FaPlus } from "react-icons/fa";
import { Button } from "reactstrap";
import Modal from "../../../components/Modal/Modal";
import { useDropzone } from "react-dropzone";
import Field from "../../../components/Field/field";

const CargosAdmin = () => {

    const [list, setList] = useState([]);
    const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
    
    useEffect(() => {
        refreshTable();
    }, []);

    useEffect(() => {
        if(!modalCreateIsOpen)
            resetFields();
    }, [modalCreateIsOpen])

    const refreshTable = () => {
        getFullCargos()
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
        setIdcargo(item.idcargo);
        setDescricao(item.descricao);
        setOrdem(item.ordem);


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

    const [idcargo, setIdcargo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ordem, setOrdem] = useState("");

    const createCallback = () => {
        let dados = {
            idcargo,
            descricao,
            ordem
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
        setIdcargo("");
        setDescricao("");
        setOrdem("");
    }

    return (
        <>
            <div className="Diretoria">
                <div className="DiretoriaBox">
                    <div className="DiretoriaBoxHeader">
                        <h2>Gerenciamento de Cargos</h2>
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
                                        <th style={{width: "90%"}}>Descrição</th>
                                        <th>Ordem</th>
                                    </tr>
                                </thead>
                                <tbody className="DiretoriaTableBody">
                                    {
                                        list.map((item, i) => {
                                            return (
                                                <tr>
                                                    <td><Button className="Button" color="primary" onClick={() => { editarRegistro(item)}} title="Editar Registro"><FaRegEdit/></Button></td>
                                                    <td><Button className="Button" color="danger" onClick={() => { deleteRegistroButton(item.idcargo )}} title="Excluir registro"><FaTrash/></Button></td>
                                                    <td style={{padding: "8px"}}>{item.idcargo}</td>
                                                    <td style={{textAlign: "left", padding: "8px"}}>{item.descricao}</td>
                                                    <td>{item.ordem}</td>
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
                                <Field label="Descrição" classe="LighterThemeInput" typeInput="text" typeOfField="input" get={descricao} set={setDescricao}/>
                                {/* <label>Nome</label>
                                <input type="text" value={nome} onChange={(e) => {setNome(e.target.value)}} placeholder="Nome..."/> */}
                            </div>
                            <div className="BoxField">
                                <Field label="Ordem de Importância" classe="LighterThemeInput" typeInput="number" typeOfField="input" get={ordem} set={setOrdem}/>

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

export default CargosAdmin;