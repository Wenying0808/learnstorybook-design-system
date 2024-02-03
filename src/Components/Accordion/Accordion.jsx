import React, { useState } from "react";

import "./Accordion.css";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

const Accordion = ({id, title, description}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleOnChange =() => {
        setIsExpanded(!isExpanded);
    };

    return(
        
        <div id={id} className={`accordion ${isExpanded ? " expanded" : ""}`}>
            <div className="control" onClick={handleOnChange}>
                <h3>{title}</h3>
                {isExpanded ? <ExpandLessOutlinedIcon style={{color:"#4758DC"}}/> : <ExpandMoreOutlinedIcon style={{color:"#4758DC"}}/>}
                
            </div>
            {isExpanded &&
                <div className="content">
                <p>{description}</p>  
            </div>
            }
            
            
        </div>
    );
};

export default Accordion;