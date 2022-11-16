import { FaTimes } from "react-icons/fa";
import { Button } from "reactstrap";

const Success = ({children, title, setOpenModal, callback}) => {

    const modalBakcground = document.getElementsByClassName("ModalBackground");
    modalBakcground.onclick = () => {
        setOpenModal(false);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
        if(callback)
            callback();
    }

    return (
        <div className="ModalBackground">
            <div className="Modal">
                <div className="ModalBox">
                    <div className="ModalBoxHeader">
                        <h2>{title}</h2>
                        <FaTimes onClick={handleCloseModal} className="IconClose"/>
                    </div>
                    <div className="ModalBoxBody">
                        {children}
                    </div>
                    <div className="ModalBoxFooter">
                        <Button color="success" onClick={handleCloseModal}>Fechar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success;
