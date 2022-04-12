import React from "react";
import "./index.css";

const Filters = ({goods}) => {
    const handleClickPopular = () => {
        
    }
    return (
        <div className="filters">
            <button className="filt_btn" onClick={handleClickPopular}>Популярные</button>
            <button className="filt_btn">Новинки</button>
            <button className="filt_btn">Сначала дешевые</button>
            <button className="filt_btn">Сначала дорогие</button>
            <button className="filt_btn">По рейтингу</button>
            <button className="filt_btn">По скидке</button>
        </div>
    )
}

export default Filters;