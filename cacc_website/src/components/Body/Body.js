import { Route, Routes } from 'react-router-dom';
import Contato from '../../pages/Contato/contato';
import Eventos from '../../pages/Eventos/Eventos';
import Inicio from '../../pages/Publicacoes/Publicacoes';
import Login from '../../pages/Login/Login';
import QuemSomos from '../../pages/QuemSomos/quemSomos';
import "./Body.css";


const Body = (children) => {
    return (
        <div className='Body'>
            <div className='ColorBox'>
                <Particles
                    params={{
                        particles: {
                          number: {
                            value: 200,
                            density: {
                              enable: true,
                              value_area: 1000,
                            }
                          },
                        },
                      }}/>
                <div className='Page'>
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