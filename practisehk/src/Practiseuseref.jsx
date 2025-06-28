import React,{useRef} from "react";

const Practiseuserref = () =>{
    const inputRef = useRef(true);
    const focusInput = ()=>{
        inputRef.current.focus();
    }
    return (
        <div>
            <h2>Practise of useRef</h2>
            <input type="text" ref={inputRef}/>
            <button onClick={focusInput}>Focus input</button>
        </div>
    )
}
export default Practiseuserref