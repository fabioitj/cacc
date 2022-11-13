import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Geral from "./components/Geral/Geral";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Eventos from "./pages/Eventos/Eventos";
import Contato from "./pages/Contato/contato";
import QuemSomos from "./pages/QuemSomos/quemSomos";
import Publicacoes from "./pages/Publicacoes/Publicacoes";
import Admin from "./pages/Admin/Admin";
import PublicacoesAdmin from "./pages/Admin/PublicacoesAdmin/PublicacoesAdmin";
import EventosAdmin from "./pages/Admin/EventosAdmin/EventosAdmin";
import ContasAdmin from "./pages/Admin/ContasAdmin/ContasAdmin";
import MensagensAdmin from "./pages/Admin/MensagensAdmin/MensagensAdmin";
import DiretoriaAdmin from "./pages/Admin/DiretoriaAdmin/DiretoriaAdmin";
import CargosAdmin from "./pages/Admin/CargosAdmin/CargosAdmin";
import ParticlesComp from "./components/Particles/Particles";
import RedirectTo from "./components/ProtectedRouter";
import ProtectedRoute from "./components/ProtectedRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParticlesComp />
    <BrowserRouter>
      {/* <RedirectTo> */}
        <Routes>
          <Route path="/" element={<Navigate to="/eventos"/>}></Route>

          <Route path="/" element={<Geral />}>
            {/* <Route path="/inicio" element={<Publicacoes/>}/> */}
            <Route exact path="/eventos" element={<Eventos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/quem_somos" element={<QuemSomos />} />
          </Route>

          <Route path="/login" element={<Login />} />

          <Route path="/" element={<ProtectedRoute><Admin /></ProtectedRoute>}>
            <Route path="/admin/eventos" element={<EventosAdmin />} />
            <Route path="/admin/contas" element={<ContasAdmin />} />
            <Route path="/admin/mensagens" element={<MensagensAdmin />} />
            <Route path="/admin/diretoria" element={<DiretoriaAdmin />} />
            <Route path="/admin/cargos" element={<CargosAdmin />} />
          </Route>
        </Routes>
      {/* </RedirectTo> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
