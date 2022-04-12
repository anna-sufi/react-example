import React, {useState} from "react";
import Logo from "../Logo";
import Search from "../Search";
//SPA - Single Page Application - одностраничное приложение
import {Link} from "react-router-dom";
// import SignInForm from "../SignInForm";
const Header = function({searchText, appHandler, modalActivity, setModalActivity}) {
    const searchHandler = inpVal => {
        console.log("header", inpVal);
        appHandler(inpVal);
    }
const clickHandler = (e) => {
    
    setModalActivity(!modalActivity);
}

    return (
        <header>
        <div className="container">
        <Logo/>
        <Search searchText={searchText} searchHandler={searchHandler}/>
        <nav style={{display: "flex", gap: "10px"}}>
           {/* <Link to="/">Главная</Link> */}
           <Link to="/favorites">Избранное</Link>
           <Link to="/cart">Корзина</Link>
           <Link to="/profile">Профиль</Link>
           <Link to="/login" onClick={clickHandler}>Sign in</Link>
           {/* <SignInForm active={modalActive} setActive={setModalclassName="popupform"/> */}
            <Link to="/signup" onClick={clickHandler}>Sign up</Link>
                  
        </nav>

        </div>

        </header>
    )
}

export default Header;