import React from "react";
import './ModalButtons.css';
import Button from '../Button/Button';

const ModalButtons = ({singleButton, dangerAction, label1, label2}) => {
    return (
        <div className="ModalButtons">
            {singleButton 
                ?(dangerAction 
                    ? <Button size="large" filled danger="true" label={label1}></Button>
                    : <Button size="large" filled  label={label1}></Button>
                ) 
             : (dangerAction 
                ?
                <><Button size="large" filled  label={label1}></Button>
                <Button size="large" filled danger="true" label={label2}></Button></> 
                :<><Button size="large" label={label1}></Button>
                <Button size="large" filled label={label2}></Button></>)
            }
            
        </div>
    );
}

export default ModalButtons;