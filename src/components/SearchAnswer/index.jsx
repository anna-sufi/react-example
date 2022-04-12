import React from 'react';
import "./index.css";

const SearchAnswer = ({searchText, cnt}) => {
    return (
        searchText && <div className="searchAnswer">
       По запросу <strong>{searchText}</strong> найдено {cnt} товаров
    </div>
    )
}

export default SearchAnswer;