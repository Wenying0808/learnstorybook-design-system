import React, {useState} from 'react';
import './Checkbox.css';


const Checkbox = ({disabled,}) => {
        const [isChecked, setIsChecked] = useState (false);
        const handleCheckboxChange = () => {
            if (!disabled){
                setIsChecked(!isChecked);
            }
        }

        return (
            <input type='checkbox' className='checkbox' checked={isChecked} disabled ={disabled} onChange={handleCheckboxChange} />
        );

};

export default Checkbox;