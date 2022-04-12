import React from "react";
import "./index.css";
const Button =({type, text}) => {
    return (
        <button className={type ? "btn " + type : "btn"}>{text}</button>
    )
}

export default Button;