import React from "react";
import "./index.css";
import Button from "../Button";
import {Routes, Route, Link} from "react-router-dom"

const Modal = (props) => {
    return (
        <div className={props.active ? "modal active" : "modal"}>
            <div className="modal__container">
                <Routes>
                    <Route path="/login" element={
                        <>
                        <h2>Войти</h2>
                        <Button text="Войти" type="yellow" />
                        <Link to="/signup"><Button text="Регистрация"/></Link>
                        </> }
                    />

                   <Route path="/signup" element={
                        <>
                       <h2>Войти</h2>
                       <Button text="Зарегистрироваться" type="yellow" />
                       <Button text="Войти" />
                        </> }
                    />                  
                </Routes>
                <div className="modal__close" onClick={e => props.changeActive(!props.active)}>X</div>
            </div>
        </div>
    )
}

export default Modal;