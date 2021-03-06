import React from 'react';
import Card from "../Card/Card.js";

function Cards({goods}) {
    return (
    <div className="container">
			{goods.map(el => <Card {...el} key={el._id}/>)}
		</div>
    )
}

export default Cards;