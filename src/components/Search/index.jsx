import React, {useState} from 'react';
import "./index.css";
import  close from "./img/ic-close-input.svg";
import  srch from "./img/ic-search.svg";

const Search = ({searchText, searchHandler}) => {
    const [text, setText] =useState(searchText);
    const handleInput = e => {
        setText(e.target.value); //меняем переменную text на введенное значение
        searchHandler(e.target.value); //передаем в app введенное значение
           }
    return (
        <form className="search">
            <input 
            type="text" 
            placeholder="Поиск" 
            className="search__input"
            value={text}
            onInput={handleInput}
            />
            <button className="search__button">
                {text === "" ? <img src={srch}/> : <img src={close}/> }
                </button>
        </form>
    )
}
export default Search;