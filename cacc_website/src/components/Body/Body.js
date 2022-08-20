import { Route, Routes } from 'react-router-dom';
import Contato from '../../pages/Contato/contato';
import Eventos from '../../pages/Eventos/Eventos';
import Inicio from '../../pages/Publicacoes/Publicacoes';
import Login from '../../pages/Login/Login';
import QuemSomos from '../../pages/QuemSomos/quemSomos';
import "./Body.css";
import { useState } from 'react';


const Body = ({scrollPage}) => {
    return (
        <div className={!scrollPage ? 'Body' : 'Body BodyScrolled'}>
            <div className='Page'>
                <div className={!scrollPage ? 'ContentPage' : 'ContentPage ContentPageScrolled'}>
                    <Routes>
                        <Route path="/inicio" element={<Inicio/>}/>
                        <Route path="/eventos" element={<Eventos/>}/>
                        <Route path="/contato" element={<Contato/>}/>
                        <Route path="/quem_somos" element={<QuemSomos/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Body;