import React from 'react';

const ToGetSum = () => {
    let inputRef_1,inputRef_2, msgSpanRef;
    const onClick=()=>{
       msgSpanRef.innerText=parseFloat(inputRef_1.value)+parseFloat(inputRef_2.value);
    }
    const onFocus=()=>{
        msgSpanRef.innerText="";
    }
    return (
        <div>
            <div>
                <label>
                    Введіть перше число :
                    <input onFocus={onFocus} ref={node => inputRef_1 = node} type="number"  required/>
                </label>
            <br/>
                <label>
                    Введіть друге число :
                    <input onFocus={onFocus} ref={node => inputRef_2 = node} type="number"  required/>
                </label>
            </div>
            <button onClick={onClick}>Знайти суму</button>
            <div >
                <span id="span_id" ref ={node=>msgSpanRef=node}></span>
            </div>
        </div>
    );
};



export default ToGetSum;






