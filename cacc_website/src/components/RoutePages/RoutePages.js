import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from '../../pages/Contato/contato';
import Eventos from '../../pages/Inicio/Inicio';
import Inicio from '../../pages/Publicacoes/Publicacoes';
import Login from '../../pages/Login/Login';
import QuemSomos from '../../pages/QuemSomos/quemSomos';
import Body from '../Body/Body';
import Navbar from '../Header/Navbar/Navbar';
import Geral from "../Geral/Geral";
import Admin from '../../pages/Admin/Admin';
import PublicacoesAdmin from '../../pages/Admin/PublicacoesAdmin/PublicacoesAdmin';
import EventosAdmin from '../../pages/Admin/EventosAdmin/EventosAdmin';
import ContasAdmin from '../../pages/Admin/ContasAdmin/ContasAdmin';
import DiretoriaAdmin from '../../pages/Admin/DiretoriaAdmin/DiretoriaAdmin';
import "./RoutePages.css"
import MensagensAdmin from '../../pages/Admin/MensagensAdmin/MensagensAdmin';

const RoutePages = () => {

    return (
        <div className='RoutePages'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Geral/>}>
                       
                        <Route path="/inicio" element={<Inicio/>}/>
                        <Route path="/eventos" element={<Eventos/>}/>
                        <Route path="/quem_somos" element={<QuemSomos/>}/>
                        <Route path="/contato" element={<Contato/>}/>
                    </Route>
                    <Route path='/login' element={<Login/>}/>
                    <Route path="/" element={<Admin/>}>
                        <Route path="/admin/publicacoes" element={<PublicacoesAdmin/>}></Route>
                        <Route path="/admin/eventos" element={<EventosAdmin/>}></Route>
                        <Route path="/admin/mensagens" element={<MensagensAdmin/>}></Route>
                        <Route path="/admin/contas" element={<ContasAdmin/>}></Route>
                        <Route path="/admin/diretoria" element={<DiretoriaAdmin/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RoutePages;