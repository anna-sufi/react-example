import React from "react";
import Cards from "../components/Cards/Cards.jsx";
import SearchAnswer from '../components/SearchAnswer/index.jsx';
import Filters from '../components/Filters/index.jsx';

const Page = (props) => {
    console.log(props.goods);
    return (
        <div>
            <h1>
            {props.name}
        </h1>
        <SearchAnswer searchText={props.searchText} cnt={props.cnt}/>
        <Filters goods={props.goods}/>
        <Cards goods={props.goods}/>
        </div>
    )
}

export default Page;
