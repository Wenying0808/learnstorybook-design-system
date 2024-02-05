import React from "react";
import './ModalButtons.css';
import Button from '../Button/Button';

const ModalButtons = ({singleButton, dangerAction, label1, label2, closeModal}) => {

    const handleButtonClick = () => {
        closeModal(); // Call the closeModal function when a button is clicked
    };

    return (
        <div className="ModalButtons">
            {singleButton 
                ?(dangerAction 
                    ? <Button size="large" filled danger="true" label={label1} onClick={handleButtonClick}></Button>
                    : <Button size="large" filled  label={label1} onClick={handleButtonClick}></Button>
                ) 
             : (dangerAction 
                ?
                <><Button size="large" filled  label={label1} onClick={handleButtonClick}></Button>
                <Button size="large" filled danger="true" label={label2} onClick={handleButtonClick}></Button></> 
                :<><Button size="large" label={label1} onClick={handleButtonClick}></Button>
                <Button size="large" filled label={label2} onClick={handleButtonClick}></Button></>
                )
            }
            
        </div>
    );
}

export default ModalButtons;