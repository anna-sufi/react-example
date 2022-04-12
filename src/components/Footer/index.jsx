import React from "react";
import "./style.css";
import Logo from "../Logo";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="container">
            <div className="column">
                <Logo/>
                <div>copy</div>
            </div>
            <ul className="column">
                <Link to="/catalog">Каталог</Link>
                <Link to="/contacts">Контакты</Link>
            </ul>
            
            <div className="column">
               <div>text</div>
               <div>mail</div>
               <div>phone</div>
            
               <ul className="soc">
                   <li>soc</li>
                   <li>soc</li>
                   <li>soc</li>
                   <li>soc</li>
                   <li>soc</li>
               </ul>
            </div>
           
        </footer>
    )
}

export default Footer;