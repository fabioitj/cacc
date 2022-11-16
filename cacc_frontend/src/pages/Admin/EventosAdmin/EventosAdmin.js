import "./EventosAdmin.css";
import { useEffect, useState } from "react";
import { getEventos, saveRegistro, deleteRegistro } from "../../../hooks/eventosApi.js";
import { FaImage, FaRegEdit, FaHandPointUp, FaHandPointDown, FaTrash, FaPlus } from "react-icons/fa";
import { Button } from "reactstrap";
import Modal from "../../../components/Modal/Modal";
import Field from "../../../components/Field/field";

const EventosAdmin = () => {

    const [list, setList] = useState([]);
    const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
    
    useEffect(() => {
        refreshTable();
    }, []);

    const refreshTable = () => {
        getEventos()
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

    useEffect(() => {
        if(!modalCreateIsOpen)
            resetFields();
    }, [modalCreateIsOpen])

    const editarRegistro = (item) => {
        setIdevento(item.idevento);
        setTitulo(item.titulo);
        setSubtitulo(item.subtitulo);
        setImagem(item.imagem);

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

    const [idevento, setIdevento] = useState("");
    const [titulo, setTitulo] = useState("");
    const [subtitulo, setSubtitulo] = useState("");
    const [imagem, setImagem] = useState("");


    const createCallback = () => {
        let dados = {
            idevento,
            titulo,
            subtitulo,
            imagem
        };

        dados.imagem = dados.imagem.replace("data:image/png;base64,", "");


        console.log("dados: ", dados);
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
        setIdevento("");
        setTitulo("");
        setSubtitulo("");
        setImagem("");
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
                        <h2>Gerenciamento de Eventos</h2>
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
                                        <th style={{width: "10%"}}>Título</th>
                                        <th>Subtítulo</th>
                                    </tr>
                                </thead>
                                <tbody className="DiretoriaTableBody">
                                    {
                                        list.map((item, i) => {
                                            return (
                                                <tr>
                                                    <td><Button className="Button" color="primary" onClick={() => { editarRegistro(item)}} title="Editar Registro"><FaRegEdit/></Button></td>
                                                    <td><Button className="Button" color="danger" onClick={() => { deleteRegistroButton(item.idevento )}} title="Excluir registro"><FaTrash/></Button></td>
                                                    <td style={{ padding: "8px "}}>{item.idevento}</td>
                                                    <td style={{ padding: "8px "}}>{item.titulo}</td>
                                                    <td>{item.subtitulo}</td>
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
                <Modal title="Cadastro de Evento" btnText="Salvar" setOpenModal={setModalCreateIsOpen} callback={createCallback}>
                    <form role="form" className="FormCreateRegister">
                        <div className="FormBox">
                            <div className="BoxField">
                                <Field label="Título" classe="LighterThemeInput" typeInput="text" typeOfField="input" get={titulo} set={setTitulo} />
                            </div>
                            <div className="BoxField">
                                <Field label="Subtítulo" classe="LighterThemeInput" typeInput="text" typeOfField="input" get={subtitulo} set={setSubtitulo} />
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

export default EventosAdmin;