import React from "react";
import ModalWrapper from "./ModalWrapper";
import ModalButtons from "./ModalButtons";
import "./Modal.css"

const Modal = ({title, description, note, singleButton, dangerAction, buttonLabel1, buttonLabel2, closeModal, }) => {
    return(
        <div className="modal">
            <ModalWrapper>
                <h2 className="title">{title}</h2>
                <div className="details">
                    <p className="description">{description}</p>
                    <p className="note">{note}</p>
                </div>
                <ModalButtons singleButton={singleButton} dangerAction={dangerAction} label1={buttonLabel1} label2={buttonLabel2} closeModal={closeModal}/>
            </ModalWrapper>
        </div>
        
    );
};

export default Modal;