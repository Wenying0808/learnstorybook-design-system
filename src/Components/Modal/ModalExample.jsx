import React, {useState} from "react";
import Button from "../Button/Button";
import Modal from "./Modal";
import Overlay from "../Overlay/Overlay"
import "./ModalExample.css";


const ModalExample = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [isDanger, setIsDanger] = useState(false);

    const openModal = (danger) => {
        setModalOpen(true);
        setIsDanger(danger);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <div className="buttons-div">
                <Button label="Open Normal Modal" size="regular" filled onClick={ () => {openModal (false)} }></Button>
                <Button label="Open Danger Modal" size="regular" filled danger onClick={() => {openModal (true)}}></Button>
            </div>
            
            {modalOpen && (
                <>
                <Overlay></Overlay>
                {isDanger
                ? (<Modal className="modal" title="Title" description="Here is the placeholder for the content." buttonLabel1="Cancel" buttonLabel2="Delete" dangerAction closeModal={closeModal}></Modal>)
                : (<Modal className="modal" title="Title" description="Here is the placeholder for the content." buttonLabel1="Cancel" buttonLabel2="Confirm" closeModal={closeModal}></Modal>)
                }
                </>
            )}
        </div>
    );
}

export default ModalExample;