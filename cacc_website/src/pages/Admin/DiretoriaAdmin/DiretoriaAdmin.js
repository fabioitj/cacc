import "./DiretoriaAdmin.css";
import { useEffect, useState } from "react";
import { getFullDiretoria, alternarAtividade, deleteRegistro, createRegistro } from "../../../hooks/diretoriaApi";
import { FaImage, FaRegEdit, FaHandPointUp, FaHandPointDown, FaTrash, FaPlus } from "react-icons/fa";
import { Button } from "reactstrap";
import Modal from "../../../components/Modal/Modal";
import { useDropzone } from "react-dropzone";

const DiretoriaAdmin = () => {

    const [list, setList] = useState([]);
    const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
    
    useEffect(() => {
        refreshTable();
    }, []);

    const refreshTable = () => {
        getFullDiretoria()
        .then((response) => {
            let data = response.data;
            if(data.success){   
                setList(data.data);
            }
        })
        .catch((error) => {
            alert(error);
        });
    }

    const visualizarImage = (id) => {
        setModalCreateIsOpen(true);
    }

    const editarRegistro = (item) => {
        setModalCreateIsOpen(true);
    }

    const alternarAtividadeButton = (id) => {
        console.log(id);
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

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [apresentacao, setApresentacao] = useState("");
    const [imagem, setImagem] = useState("");

    const createCallback = () => {
        console.log("files topzera: ", files);
        setImagem("https://pps.whatsapp.net/v/t61.24694-24/288007444_1092341074745244_5639014272169783211_n.jpg?ccb=11-4&oh=01_AVzGSay4kq9xtv-kxa85Tfaz-IBXVkAOQoE8IwFpnBRZOw&oe=630B341D");

        let dados = {
            nome,
            cargo,
            apresentacao,
            imagem
        };

        console.log(dados);

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
        setCargo("");
        setApresentacao("");
        setImagem("");
    }

    const [files, setFiles] = useState([]);
    // const {getRootProps, getInputProps} = useDropzone({
    //     accept: 'image/*',
    //     onDrop: acceptedFiles => {
    //         setFiles(acceptedFiles.map(file => Object.assign(file, {
    //             preview: URL.createObjectURL(file)
    //         })));
    //     }
        
    // });

    const thumbs = files.map(file => (
        <div key={file.name}>
        <div>
            <img
            src={file.preview}
            />
        </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <>
            <div className="Diretoria">
                <div className="DiretoriaBox">
                    <div className="DiretoriaBoxHeader">
                        <h2>Gerenciamento da Diretoria</h2>
                        <Button onClick={createNewRegister} color="success"><FaPlus/></Button>
                    </div>
                    <div className="DiretoriaBoxBody">
                        <div className="RowFilters">
                            {/* TODO: FILTERS AND INSERT BUTTON */}
                        </div>
                        <div className="RowTable">
                            
                            <table className="DiretoriaTable">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>Cargo</th>
                                        <th>Atuando</th>
                                    </tr>
                                </thead>
                                <tbody className="DiretoriaTableBody">
                                    {
                                        list.map((item, i) => {
                                            return (
                                                <tr>
                                                    <td><Button className="Button" color="info" onClick={() => {visualizarImage(item.iddiretoria)}} title="Visualizar Imagem" ><FaImage/></Button></td>
                                                    <td><Button className="Button" color="primary" onClick={() => { editarRegistro(item)}} title="Editar Registro"><FaRegEdit/></Button></td>
                                                    <td><Button className="Button" color={item.ativo == 'S' ? "danger" : "success"} onClick={() => { alternarAtividadeButton(item.iddiretoria)}} title={item.ativo == "S" ? "Desativar" : "Ativar"}>{item.ativo == "S" ? <FaHandPointDown/> : <FaHandPointUp/>}</Button></td>
                                                    <td><Button className="Button" color="danger" onClick={() => { deleteRegistroButton(item.iddiretoria )}} title="Excluir registro"><FaTrash/></Button></td>
                                                    <td>{item.iddiretoria}</td>
                                                    <td>{item.nome}</td>
                                                    <td>{item.cargo}</td>
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
                <Modal title="Criação" btnText="Criar" setOpenModal={setModalCreateIsOpen} callback={createCallback}>
                    <form role="form" className="FormCreateRegister">
                        <div className="FormBox">
                            <div className="BoxField">
                                <label>Nome</label>
                                <input type="text" value={nome} onChange={(e) => {setNome(e.target.value)}} placeholder="Nome..."/>
                            </div>
                            <div className="BoxField">
                                <label>Cargo</label>
                                <input type="text" value={cargo} onChange={(e) => {setCargo(e.target.value)}} placeholder="Cargo..."/>
                            </div>
                            <div className="BoxField">
                                <label>Apresentação</label>
                                <input type="text" value={apresentacao} onChange={(e) => {setApresentacao(e.target.value)}} placeholder="Apresentação..."/>
                            </div>
                            <div className="BoxField">
                                <div  className="dragNDrop">
                                    <input />
                                    <p>Arraste a sua <strong>IMAGEM</strong> aqui!</p>
                                    <input type="file" placeholder="Escolha a imagem"/>
                                </div>
                                <aside>
                                    {thumbs}
                                </aside>
                            </div>

                        </div>
                    </form>
                </Modal>
            }
        </>

        
    );
}

export default DiretoriaAdmin;