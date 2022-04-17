import React, {useEffect, useState} from "react";
import "./index.css";
import Button from "../Button";
import Counter from "../Counter";
import api from "../../Api";
import Review from "../Review";
import UserPhotos from "../UsersPhotos";


const Product = (props) => {
    const [prod, setProd] = useState({});
    const [prodReviews, setprodReviews] = useState([]);
    const [cntReviews, setCntReviews] = useState(0);

    useEffect(() => {
			api.getProduct(props.id).then(ans => {
			console.log(ans);
            setProd(ans);
		},);}, [])
      
    useEffect(() => {
            api.getReviews(props.id).then(ans => {
			console.log(ans);
            setprodReviews(ans);
            setCntReviews(ans.length);
    },);}, [])

    const setCart = (e) => {
        let arr = [...props.store];
        console.log(arr);
        let flag = true;
        console.log("props.id",props.id);
        arr.forEach(( el) => {
            if (el.id === props.id) {
                el.cnt++;
                flag = false;
            }})
        if (flag) arr.push({id: props.id, cnt: 1});
        props.updStore(arr);
    }

    return (
        <>
        <h1 className="prod_title">{prod.name || "нет названия"}</h1>
        <div></div>
        <div></div>
        {/* <div>Артикул продукта</div>  - нет таких данных в ответе c сервера*/}
        {/* <div>Рейтинг - звездочки - <span>{prod.reviews && prod.reviews[0].rating}</span></div> */}
        <div>Рейтинг - звездочки - <span>{cntReviews ? (prod.reviews[0] && prod.reviews[0].rating) : "0"}</span></div>
        
        <div className="prod_container">
            <div className="prod_photoContainer">
              <img className="prod_bigPhoto" src={prod.pictures || "нет фото"}></img>
              <img className="prod_smallPhoto" src={prod.pictures || "нет фото"}></img>
            </div>
                            
            <div className="prod_buy">
               <p className="prod_fullPrice">{prod.price || "нет цены"} руб.</p>
               <h3 className="prod_discPrice">{prod.price * 0.9 || "нет цены"} руб.</h3>
               <div className="prod_buy_btn">
                   <div className="prod_counter"><Counter/></div>
                    <button className="product_btn_buy" onClick={setCart}>в Корзину</button>
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
            <p>{prod.description || "нет описания"}</p>
            <h2 className="prod_about_title">Характеристики</h2>
            <p>Вес ............  1 шт.  {prod.wight || "нет веса"}</p>
            <p>Цена .........  {prod.price * 0.9 || "нет цены"} руб. за 100 г.</p>
            <h2 className="prod_about_title">Отзывы</h2>
            <div style={{width: "200px", margin: "0px"}}>
            <Button  text="Написать отзыв"/></div>
            <h3>Фотографии наших покупателей</h3>
            {(prodReviews && prodReviews.length == 0) ? <p>Пока нет фотографий </p> : <UserPhotos/>}
            
            {(prodReviews && prodReviews.length == 0) ? <h3>Отзывов пока нет</h3> : prodReviews.map(el => <Review {...el} key={el._id}/>)}

            {/* <Button text="Все отзывы"></Button> */}
        </div>

        </>

    )
}

export default Product;