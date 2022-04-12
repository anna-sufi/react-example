import React, {useEffect} from "react";
import Product from "../components/Product";
import { useParams } from "react-router";
import Button from "../components/Button";
// import api from "../Api";

const Page = (props) => {
   
   const params = useParams();
   const current = params.id;

    return (
        <>
        <Button text="Назад" />
        <Product id={current}/>
        </>
    )
}

export default Page;
