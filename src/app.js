import React, { useEffect, useState } from 'react';
import Header from "./components/Header/header.jsx";
import Footer from './components/Footer/index.jsx';
// import Test from "./components/Test";
import api from "./Api.js";
// import data from "./data.json";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import {Routes, Route} from "react-router-dom";
// import FormInput from './components/FormInput/index.jsx';
import Modal from './components/Modal/index.jsx';

function App () {
	//опрелеляем что searchText - это состояние, и оно будет меняться по функции setSearch, и это сотояние передается внуть тега Header
    const[searchText,setSearch] = useState("");
	const [data, setData] = useState([]);
	const [goods, setGoods] = useState(data);
	const [cnt, setSearchCnt] = useState(0);
	const [modalActivity, setModalActivity] = useState(false);
	const [key, setKey] = useState('');

	const appHandler = val => {
		console.log("app", val);
        setSearch(val);
		const newCards = data.filter(el => el.name.toLowerCase().includes(val.toLowerCase()));
		setGoods(newCards);
		setSearchCnt(newCards.length);
	}
	
	useEffect(() => {
		api.getProductList().then(ans => {
			setData(ans.products);
			setGoods(ans.products);
		    console.log(ans);
		    console.log(ans.products);
			},		
			);
	}, [])

   	// кастомный вариант внедрения стилей- 
	// создаем ОБЬЕКТ со стилем:
	let st = { 
		textAlign: "center",
		backgroundColor: "forestgreen",
		padding: "20px"
	}

	return <>
	    <Header searchText={searchText} appHandler={appHandler} modalActivity={modalActivity} setModalActivity={setModalActivity}/>
		
		{/* ниже в {} внедрется переменная JS  */}
		{/* <div style={st}>  
		    <Test/>
		</div> */}

        {/* ниже стиль внедряетя сразу как обьект внутри переменной  -поэтому {{}} */}
		{/* <div style={{backgroundColor: "blue", width: "100px", padding: "10px"}}/> */}
		{/* <FormInput/> */}
		
		<main>
		 <Routes>
			 <Route path="/cart" element={<Cart name="Корзина"/>}/>
			 <Route path="/catalog" element={<Catalog name="Каталог" searchText={searchText} cnt={cnt} goods={goods} />}/>
			 <Route path="/contacts" element={<Contacts name="Контакты"/>}/>
			 <Route path="/favorites" element={<Favorites name="Избранное"/>}/>
			 <Route path="/" element={<Main name="Главная"/>}/>
			 <Route path="/product/:id" element={<Product name="Товар" />}/>
			 <Route path="/profile" element={<Profile name="Личные данные"/>}/>
		 </Routes>
		</main>
		<Modal active={modalActivity} changeActive={setModalActivity}/>
		<Footer/>
	</>
}

export default App;