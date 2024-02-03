import React, {useState} from 'react';
import './Checkbox.css';


const Checkbox = ({id, name, disabled,}) => {
        const [isChecked, setIsChecked] = useState (false);
        const handleCheckboxChange = () => {
            if (!disabled){
                setIsChecked(!isChecked);
            }
        }

        return (
            <input type='checkbox' className='checkbox' id={id} name={name} checked={isChecked} disabled ={disabled} onChange={handleCheckboxChange} />
        );

};

export default Checkbox;