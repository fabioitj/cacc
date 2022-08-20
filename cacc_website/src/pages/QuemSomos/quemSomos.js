import { useEffect, useState } from "react";
import {getDiretoria} from "../../hooks/diretoriaApi";
import "./quemSomos.css";
import QuemSomosRow from "./QuemSomosRow/QuemSomosRow";

const QuemSomos = () => {
    // const src = "https://via.placeholder.com/300x350";
    // const src = "https://media-exp1.licdn.com/dms/image/C4D03AQHmhmDVOnVx2g/profile-displayphoto-shrink_800_800/0/1619752537248?e=1665619200&v=beta&t=LpO6EYtt_zQ9PqWHbwU7mbGACZNHa8Il5Tc-fKoixkM";
    const [list, setList] = useState([]);

    useEffect(() => {
        getDiretoria()
        .then((response) => {
            let data = response.data;
            if(data.success){   
                setList(data.data);
            }
        })
        .catch((error) => {
            alert(error);
        });
    }, [])
    
    return (
        <div className="QuemSomos">
            <div className="QuemSomosBox">
                <div className="QuemSomosBoxHeader">
                    <h2>QUEM SOMOS</h2>
                </div>
                <div className="QuemSomosBoxBody">
                    {
                        list.map(function(item, i) {
                            return (
                                <div>
                                    <QuemSomosRow src={item.imagem} title={item.nome} subtitle={item.cargo} apresentation={item.apresentacao} isReverse={i % 2 == 1}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default QuemSomos;