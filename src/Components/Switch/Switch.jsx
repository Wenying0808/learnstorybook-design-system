import React, {useState} from 'react';
import './Switch.css';


const Switch = (
    { 
    label,
    disabled,
    }) => {
        const [isOn, setIsOn] = useState(false);
        const handleToggle = () => {
            if(!disabled){
                setIsOn(!isOn);
            }
        };

        return (
            <label >
                {label}
            <div className ={`switch ${isOn ? 'on' : ' off'} ${disabled? ' disabled' :''}`} onClick={handleToggle} >
                <div className="slider"></div>
            </div>
            </label>
        );

};

export default Switch;