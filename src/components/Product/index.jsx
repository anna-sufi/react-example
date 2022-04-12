import React, {useEffect, useState} from "react";
import "./index.css";
import Button from "../Button";
import Counter from "../Counter";

const Product = (props) => {
    const [prod, setProd] = useState({});
    const [prodReviews, setprodReviews] = useState([]);
    const responseHandler = (res) => {
        return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
    }

    useEffect(() => {
		// 	api.getProduct("622c779c77d63f6e70967d1c").then(ans => {
		// 	console.log(ans);
		// }
			// );
           fetch(`https://api.react-learning.ru/products/${props.id}`, {
                    headers: {
                        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac`
                    }
                }).then(responseHandler).then(ans => {
                    console.log(ans);
                    setProd(ans);
    },);}, [])

    useEffect(() => {
           fetch(`https://api.react-learning.ru/products/review/${props.id}`, {
                    headers: {
                        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac`
                    }
                }).then(responseHandler).then(ans => {
                    console.log(ans);
                    setprodReviews(ans);
    },);}, [])

    return (
        <>
        <h1 className="prod_title">{prod.name}</h1>
        <div></div>
        <div></div>
        {/* <div>Артикул продукта</div>  - нет таких данных в ответе c сервера*/}
        <div>Рейтинг - звездочки - <span>{prod.reviews && prod.reviews[0].rating}</span></div>
        
        <div className="prod_container">
            <div className="prod_photoContainer">
              <img className="prod_bigPhoto" src={prod.pictures}></img>
              <img className="prod_smallPhoto" src={prod.pictures}></img>
              </div>
                            
            <div className="prod_buy">
               <p className="prod_fullPrice">{prod.price} руб.</p>
               <h3 className="prod_discPrice">{prod.price * 0.9} руб.</h3>
               <div className="prod_buy_btn">
                   <div className="prod_counter"><Counter/></div>
                    <Button text="В корзину" type="yellow"/>
               </div>

               <div className="prod_delivery">
                  <h3>Доставка по всему миру!</h3>
                  <p>Доставка курьером - <b>от 399 руб.</b></p>
                  <p>Доставка в пункт выдачи - <b>от 199 руб.</b></p>
               </div>

               <div className="prod_delivery">
                  <h3>Гарантия качества</h3>
                  <p>Если вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>
                  
               </div>

            </div>
        </div>

        <div className="prod_about">
            <h2 className="prod_about_title">Описание</h2>
            <p>{prod.description}</p>
            <h2 className="prod_about_title">Характеристики</h2>
            <p>Вес ............  1 шт.  {prod.wight}</p>
            <p>Цена .........  {prod.price * 0.9} руб. за 100 г.</p>
            <h2 className="prod_about_title">Отзывы</h2>
            <div style={{width: "200px", margin: "0px"}}>
            <Button  text="Написать отзыв"/></div>
            <h3>Фотографии наших покупателей</h3>
            <div className="rev_Photos">
            <img className="rev_Photo" src="https://bipbap.ru/wp-content/uploads/2017/10/2015-10-15_175403ya.jpg"></img>
            <img className="rev_Photo" src="https://bipbap.ru/wp-content/uploads/2017/10/a23a7bf21352f181956f7909cedf5fdd.jpg"></img>
            <img className="rev_Photo" src="https://bipbap.ru/wp-content/uploads/2017/10/00115b52c3100b01ac0a0b.jpg"></img>
            <img className="rev_Photo" src="https://bipbap.ru/wp-content/uploads/2017/10/dog.jpg"></img>
            </div>

            <div className="prod_rev_auth">
                 <p><b>{prodReviews[0] && prodReviews[0].author.name}</b></p>
                 <p>{prodReviews[0] && prodReviews[0].created_at.slice(0, 10)}</p>
            </div>
            <p>Оценка: {prodReviews[0] && prodReviews[0].rating}</p>
            <p>Текст отзыва: {prodReviews[0] && prodReviews[0].text}</p>

            <div className="prod_rev_auth">
                 <p><b>{prodReviews[1] && prodReviews[1].author.name}</b></p>
                 <p>{prodReviews[1] && prodReviews[1].created_at.slice(0, 10)}</p>
            </div>
            <p>Оценка: {prodReviews[1] && prodReviews[1].rating}</p>
            <p>Текст отзыва: {prodReviews[1] && prodReviews[1].text}</p>

            <Button text="Все отзывы >"></Button>


        </div>

        </>

    )
}

export default Product;