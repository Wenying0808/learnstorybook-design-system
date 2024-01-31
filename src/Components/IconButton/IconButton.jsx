import React from 'react';
import './IconButton.css';

const IconButton = (
    {disabled,
    icon,
    onClick,
    onMouseover,
    }) => {
        const getClassName = () => {
            let className = `IconButtonDiv ${disabled ? "disabled" : ""}`;
            return className;
        };
    return(<div className={getClassName()}>{icon}</div>);
};

export default IconButton;