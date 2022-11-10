import "./Modal.css";
import { FaTimes } from "react-icons/fa";
import { Button } from "reactstrap";


const Modal = ({children, title, btnText, setOpenModal, callback}) => {

    const modalBakcground = document.getElementsByClassName("ModalBackground");
    modalBakcground.onclick = () => {
        setOpenModal(false);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleCallback = () => {
        // console.log("to aqui teste 1");
        callback();
        setOpenModal(false);
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
                        <Button onClick={handleCloseModal}>Cancelar</Button>
                        <Button color="primary" onClick={handleCallback}>{btnText}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;