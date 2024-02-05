import React from "react";
import "./Overlay.css";

const Overlay = ({width, height}) => {
    return(
        <div className="Overlay" styles={{width: {width}, height: {height}}}></div>
    );
};

export default Overlay;