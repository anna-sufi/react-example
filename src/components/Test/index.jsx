import React, {useState} from 'react';

const Test = () => {

    //вводим динамическую переменную через useState(сперва import из react)
    //изменяем переменную text по функции updateText
    const [text, updateText] = useState("");
 
   //создаем функцию обработчик, принимающую e-event
    const handler = (e) => {
        let el = e.target;
        if (el.nodeName === "INPUT") { //если меняем Input
        updateText(e.target.value)
    } else { //если жмем кнопку
        updateText("OOOps");
    }
    }

//стирать текст при фокусировке в Input
    const focused =(e) => {
        e.target.value = "";
    }

    return (
        <>
         <input type = "text" onInput={handler} onFocus={focused} />
         {/* <input type = "text" onChange={handler} /> */}
        
         <button onClick={handler}>Click</button>
        <p>{text}</p>

        </>
    )
}

// в итоге при измкенении Input меняется обвновляется переменная text
// onChange в React работает также как и onInput
export default Test;