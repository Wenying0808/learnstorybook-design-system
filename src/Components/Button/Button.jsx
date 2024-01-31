import React from 'react';
import './Button.css';
import '/src/Components/Loader/Loader.jsx';
import Loader from '../Loader/Loader';

const Button = (
    {label,
    id,
    size,
    filled,
    disabled,
    danger,
    loading,
    icon,
    onClick,
    onMouseover,
    }

) => {
    const getButtonClassName = () => {
        let className = `button ${size} ${filled ? 'filled' : ''}`;
        if (disabled){
            className = className + ' disabled'; // add a space before the name
        }
        if (danger) {
            className = className + ' danger'; 
        }
        if (loading) {
            className = className + ' loading';
        }
        if (icon) {
            className = className + ' with-icon';
        }
        return className;
    };

    const getIconColor = () => {
        return filled ? '#FFF' : '#4758DC';
    };

    return(
        <div>
            <button
            id = {id}
            type = "button"
            onClick = {onClick}
            onMouseover = {onMouseover}
            className= {getButtonClassName()}
            >
                {loading ? 
                <>{label}<Loader/></> 
                : 
                <>{label} {icon && <span className='icon-div' color={getIconColor()}>{icon}</span>}</>}
            </button>
        </div>
    );
};

export default Button;