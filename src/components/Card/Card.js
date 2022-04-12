import React from "react";
import "./Card.css";
import Counter from "../Counter";
import {Link} from "react-router-dom";

const Card =(props) => {
		return (
			<div className="card">
				<img className="pic" src={props.pictures} alt={props.name}/>
				<div className="price">{props.price}</div>
				<div className="count">{props.stock}</div>
				<div className="card_bottom">
				<div className="name">{props.name}</div>
				<Link to={`/product/${props._id}`} className="card_about"> подробнее</Link>
				<Counter/>
				</div>
			</div>
		)
	}
export default Card;