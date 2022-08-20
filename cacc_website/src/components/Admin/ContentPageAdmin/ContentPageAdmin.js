import { Route, Routes } from "react-router-dom";
import ContasAdmin from "../../../pages/Admin/ContasAdmin/ContasAdmin";
import DiretoriaAdmin from "../../../pages/Admin/DiretoriaAdmin/DiretoriaAdmin";
import EventosAdmin from "../../../pages/Admin/EventosAdmin/EventosAdmin";
import MensagensAdmin from "../../../pages/Admin/MensagensAdmin/MensagensAdmin";
import PublicacoesAdmin from "../../../pages/Admin/PublicacoesAdmin/PublicacoesAdmin";
import "./ContentPageAdmin.css";

const ContentPageAdmin = () => {
    return (
        <div className="ContentPageAdmin">
            <Routes>
                <Route path="/admin/publicacoes" element={<PublicacoesAdmin/>}></Route>
                <Route path="/admin/eventos" element={<EventosAdmin/>}></Route>
                <Route path="/admin/contas" element={<ContasAdmin/>}></Route>
                <Route path="/admin/mensagens" element={<MensagensAdmin/>}></Route>
                <Route path="/admin/diretoria" element={<DiretoriaAdmin/>}></Route>
            </Routes>
        </div>
    );
}

export default ContentPageAdmin;