import React from "react";
import './CheckboxOption.css';

const CheckboxOption = ({
    id,
    label,
    disabled,
    checked,
    }) => {

    const handleCheckboxChange = () => {
        if (!disabled){
            !checked;
        }
    }
    return (
        <label className={`CheckboxOption ${disabled? " labelDisabled" : ""}`} onClick={handleCheckboxChange} id={id}>
            <input type="checkbox" disabled={disabled} checked={checked}></input>
            {label}
        </label>
    );

}

export default CheckboxOption;