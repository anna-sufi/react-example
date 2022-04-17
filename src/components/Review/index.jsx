import React from "react";

const Review = (props) => {
    return (
        <>
        <div className="prod_rev_auth">
        <p><b>{props.author.name}</b></p>
        <p>{props.created_at.slice(0, 10)}</p>
   </div>
   <p>Оценка: {props.rating}</p>
   <p>Текст отзыва: {props.text}</p>

  
   </>
    )
}

export default Review;