import React, {useEffect} from "react";
import Product from "../components/Product";
import { useParams } from "react-router";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Page = (props) => {
   const params = useParams();
   const current = params.id;
    return (
        <>
        <Link to="/catalog"><Button text="Назад" /></Link>
        <Product id={current} store={props.store} updStore={props.updStore} />
        </>
    )}
export default Page;
