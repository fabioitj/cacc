import { useEffect, useState } from "react";
import {getDiretoria} from "../../hooks/diretoriaApi";
import "./quemSomos.css";
import QuemSomosRow from "./QuemSomosRow/QuemSomosRow";

const QuemSomos = () => {
    // const src = "https://via.placeholder.com/300x350";
    // const src = "https://media-exp1.licdn.com/dms/image/C4D03AQHmhmDVOnVx2g/profile-displayphoto-shrink_800_800/0/1619752537248?e=1665619200&v=beta&t=LpO6EYtt_zQ9PqWHbwU7mbGACZNHa8Il5Tc-fKoixkM";
    const [list, setList] = useState([]);
    const [emptyList, setEmptyList] = useState(list.length == 0);

    useEffect(() => {
        getDiretoria()
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
    }, []);

    useEffect(() => {
        setEmptyList(list.length == 0);
    }, [list])
    
    return (       
        <div className={!emptyList ? "QuemSomos" : "QuemSomosEmpty"}>
            <div className="QuemSomosBox">
                <div className="QuemSomosBoxHeader">
                    <h2>QUEM SOMOS</h2>
                </div>
                <div className="QuemSomosBoxBody">
                    {!emptyList ? 
                        list.map(function(item, i) {
                            return (
                                <div>
                                    <QuemSomosRow src={item.imagem} title={item.nome} subtitle={item.dscargo} apresentation={item.apresentacao} isReverse={i % 2 == 1}/>
                                </div>
                            )
                        })
                     :
                    <h2><b>Ops... </b>Parece que estamos sem diretoria.</h2>
                    }
                </div>
            </div>
        </div> 
    )
}

export default QuemSomos;