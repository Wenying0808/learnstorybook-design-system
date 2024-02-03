import React, {useState} from "react";
import './ModalWrapper.css';

const ModalWrapper = ({children}) => {
    return(
        <div className="ModalWrapper">
            {children}
        </div>
    );
};

export default ModalWrapper;