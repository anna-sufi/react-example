import React, {useState} from "react";
import "./index.css";

const Counter = ({cnt}) => {
    const [count, updateCnt] = useState(0);

    const countDec =() => updateCnt(count-1);
    const countInc =() => updateCnt(count+1);
    return <div className="counter">
    <button className="btn_card" onClick={countDec}>-</button>
    {count}
    <button className="btn_card" onClick={countInc}>+</button>

    </div>
}

export default Counter;