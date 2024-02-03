import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
import './AccordionList.css';


const AccordionList = ({data}) => {

    return(
        <div className="accordionList">
            {data.map((item) => (
                <Accordion key={item.id} title={item.title} description={item.description} />
            ))}
        </div>
    );
};
export default AccordionList;