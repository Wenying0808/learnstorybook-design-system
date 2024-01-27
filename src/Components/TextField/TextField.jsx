import React from 'react';
import './TextField.css';

const TextField = (
    {
    label,
    id,
    onChange,
    value,
    isDisabled = false,
    isRequired = false,
    placeholder,
    error
    }) => {
        return(
            <div>
                <label htmlFor={id}>{label}</label>
                <input 
                id = {id}
                type = "text"
                value = {value}
                onChange = {onChange}
                disabled = {isDisabled}
                required = {isRequired}
                placeholder = {placeholder}
                className = {`${isDisabled ?"disabled" : ""} ${error ?"errored" : ""}`}
                />
            </div>
            
        );
    };

export default TextField;