import "./DiretoriaAdmin.css";
import { useEffect, useState } from "react";
import { getDiretoria, alternarAtividade, deleteRegistro, createRegistro } from "../../../hooks/diretoriaApi";
import { getFullCargos } from "../../../hooks/cargosApi";
import { FaRegEdit, FaHandPointUp, FaHandPointDown, FaTrash, FaPlus } from "react-icons/fa";
import { Button } from "reactstrap";
import Modal from "../../../components/Modal/Modal";
import Field from "../../../components/Field/field";

const DiretoriaAdmin = () => {

    const [list, setList] = useState([]);
    const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
    
    useEffect(() => {
        refreshTable();

        loadCargosSelect();
    }, []);

    useEffect(() => {
        if(!modalCreateIsOpen)
            resetFields();
    }, [modalCreateIsOpen])

    const [selectCargoList, setSelectCargoList] = useState([]);
    const loadCargosSelect = () => {
        getFullCargos()
        .then((response) => {
            let data = response.data;
            if(data.success){
                setSelectCargoList(data.data);
            }
        })
        .catch((error) => {
            alert(error);
        })
    }

    const refreshTable = () => {
        getDiretoria()
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
        setIddiretoria(item.iddiretoria);
        setNome(item.nome);
        setIdcargo(item.idcargo);
        setApresentacao(item.apresentacao);
        setImagem(item.imagem);


        setModalCreateIsOpen(true);
    }

    const alternarAtividadeButton = (id) => {
        alternarAtividade(id)
            .then(() => {
                refreshTable();
            })
            .catch((error) => alert(error));
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

    const [iddiretoria, setIddiretoria] = useState("");
    const [nome, setNome] = useState("");
    const [idcargo, setIdcargo] = useState("");
    const [apresentacao, setApresentacao] = useState("");
    const [imagem, setImagem] = useState("");

    const createCallback = () => {
        let dados = {
            iddiretoria,
            nome,
            idcargo,
            apresentacao,
            imagem
        };

        dados.imagem = dados.imagem.replace("data:image/png;base64,", "");

        createRegistro(dados)
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
        setNome("");
        setIdcargo("");
        setApresentacao("");
        setImagem("");
        setIddiretoria("");
    }

    const handleChangeEvent = (e) => {
        const fileTarget = e.target.files[0];

        getBase64(fileTarget, (result) => {
            setImagem(result);
        });
    }

    const getBase64 = (fileTarget, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(fileTarget);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    return (
        <>
            <div className="Diretoria">
                <div className="DiretoriaBox">
                    <div className="DiretoriaBoxHeader">
                        <h2>Gerenciamento da Diretoria</h2>
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
                                        <th></th>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>Cargo</th>
                                        <th>Ativo</th>
                                    </tr>
                                </thead>
                                <tbody className="DiretoriaTableBody">
                                    {
                                        list.map((item, i) => {
                                            return (
                                                <tr>
                                                    <td><Button className="Button" color="primary" onClick={() => { editarRegistro(item)}} title="Editar Registro"><FaRegEdit/></Button></td>
                                                    <td><Button className="Button" color={item.ativo == 'S' ? "warning" : "success"} onClick={() => { alternarAtividadeButton(item.iddiretoria)}} title={item.ativo == "S" ? "Desativar" : "Ativar"}>{item.ativo == "S" ? <FaHandPointDown/> : <FaHandPointUp/>}</Button></td>
                                                    <td><Button className="Button" color="danger" onClick={() => { deleteRegistroButton(item.iddiretoria )}} title="Excluir registro"><FaTrash/></Button></td>
                                                    <td style={{padding: "8px"}}>{item.iddiretoria}</td>
                                                    <td>{item.nome}</td>
                                                    <td>{item.dscargo}</td>
                                                    <td>{item.ativo == "S" ? "Sim" : "Não"}</td>    
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
                <Modal title="Cadastro de Diretoria" btnText="Salvar" setOpenModal={setModalCreateIsOpen} callback={createCallback}>
                    <form role="form" className="FormCreateRegister">
                        <div className="FormBox">
                            <div className="BoxField">
                                <Field label="Nome" classe="LighterThemeInput" typeInput="text" typeOfField="input" get={nome} set={setNome} />
                                {/* <label>Nome</label>
                                <input type="text" value={nome} onChange={(e) => {setNome(e.target.value)}} placeholder="Nome..."/> */}
                            </div>
                            <div className="BoxField">
                                <Field label="Cargo" classe="LighterThemeInput" typeInput="text" typeOfField="select" get={idcargo} set={setIdcargo} >
                                    {
                                        selectCargoList.map((item, index) => {
                                            return (
                                                <option value={item.idcargo}>
                                                    {item.descricao}
                                                </option>
                                            )
                                        })
                                    }
                                </Field>

                                {/* <label>Cargo</label>
                                <input type="text" value={cargo} onChange={(e) => {setCargo(e.target.value)}} placeholder="Cargo..."/> */}
                            </div>
                            <div className="BoxField">
                                <Field label="Apresentação" classe="LighterThemeInput" typeInput="text" typeOfField="input" get={apresentacao} set={setApresentacao} />

                                {/* <label>Apresentação</label>
                                <input type="text" value={apresentacao} onChange={(e) => {setApresentacao(e.target.value)}} placeholder="Apresentação..."/> */}
                            </div>
                            <div className="BoxField">
                                <div className="dragNDrop">
                                    <p>Escolha a sua <strong>IMAGEM</strong> aqui!</p>
                                    <input type="file" accept="image/png" onChange={(e) => { handleChangeEvent(e)}} placeholder="Escolha a imagem"/>
                                    <img src={imagem}/>
                                </div>
                            </div>

                        </div>
                    </form>
                </Modal>
            }
        </>

        
    );
}

export default DiretoriaAdmin;