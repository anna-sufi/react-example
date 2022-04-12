import React from "react";
import "./index.css";
import logo from "./logo1.svg";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo_pic"/>
        </Link>
    )
}
export default Logo;