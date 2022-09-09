import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Button } from "reactstrap";
import { getComentarios, deleteRegistro } from "../../../hooks/contatoApi.js";
import "./MensagensAdmin.css";

const MensagensAdmin = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        refreshTable();
    }, [])


    const refreshTable = () => {
        getComentarios()
            .then((response) => {
                let data = response.data;
                if(data.success){
                    setList(data.data);
                }
                else{
                    alert(data.itens[0].message);
                }
            });
    }

    const deleteRegistroButton = (id) => {
        deleteRegistro(id)
            .then((response) => {
                let data = response.data;
                if(data.success){
                    refreshTable();
                }
                else{
                    alert(data.itens[0].message);
                }
            });
    }

    return (
        <div className="Mensagens">
                <div className="MensagensBox">
                    <div className="MensagensBoxHeader">
                        <h2>Gerenciamento de Mensagens</h2>
                    </div>
                    <div className="MensagensBoxBody">
                        <div className="RowFilters">
                            {/* TODO: FILTERS AND INSERT BUTTON */}
                        </div>
                        <div className="RowTable">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Id</th>
                                        <th>Email</th>
                                        <th>Nome</th>
                                        <th>Mensagem</th>
                                    </tr>
                                </thead>
                                <tbody className="MensagensTableBody">
                                    {
                                        list.map((item, i) => {
                                            return (
                                                <tr>
                                                    <td><Button className="Button" color="danger" onClick={() => { deleteRegistroButton(item.idcomentario) }} title="Excluir registro"><FaTrash/></Button></td>
                                                    <td>{item.idcomentario}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.nome}</td>
                                                    <td>{item.obs}</td>    
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
    )
}

export default MensagensAdmin;