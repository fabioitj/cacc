import { Route, Routes } from "react-router-dom";
import CargosAdmin from "../../../pages/Admin/CargosAdmin/CargosAdmin";
import ContasAdmin from "../../../pages/Admin/ContasAdmin/ContasAdmin";
import DiretoriaAdmin from "../../../pages/Admin/DiretoriaAdmin/DiretoriaAdmin";
import EventosAdmin from "../../../pages/Admin/EventosAdmin/EventosAdmin";
import MensagensAdmin from "../../../pages/Admin/MensagensAdmin/MensagensAdmin";
import "./ContentPageAdmin.css";

const ContentPageAdmin = () => {
    return (
        <div className="ContentPageAdmin">
            <Routes>
                <Route path="/admin/eventos" element={<EventosAdmin/>}/>
                <Route path="/admin/contas" element={<ContasAdmin/>}/>
                <Route path="/admin/mensagens" element={<MensagensAdmin/>}/>
                <Route path="/admin/diretoria" element={<DiretoriaAdmin/>}/>
                <Route path="/admin/cargos" element={<CargosAdmin/>}/>
            </Routes>
        </div>
    );
}

export default ContentPageAdmin;