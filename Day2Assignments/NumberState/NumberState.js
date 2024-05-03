import { useState } from "react";

function AssignNumberState(){
    let [numberValue, setNumber] = useState(0);
    let [textValue, setText] = useState("");
    const [style, setStyle] = useState("show");
    let flag = false;

    function incrementNumber(){
        let val = 1;
        setNumber(numberValue+val);
        setText(`increment by ${val} number`);
        setStyle("show");
        console.log(numberValue);
    }

    function decrementNumber(){
        let val = 1;
        if(numberValue>0){  
            setNumber(numberValue-1);
            setText(`decrement by ${val} number`);
        }else{
            setStyle("hide");
            return false;
        }
        console.log(numberValue);
    }

    function resetNumber(){
        
        if(numberValue==0){
            setStyle("hide");
            return false;
        }
        numberValue=0;
        setNumber(numberValue);
        console.log(numberValue);
    }

    return (
        <div>
            <div>
                <h1>Day2 Assignment</h1>
            </div>
            <div className="task">  
                <h3>
                Task1 - [Number Hook] Incrementing and Decrementing the values
                </h3> 
                <p>    
                    Counter value is {textValue}: {numberValue}
                </p>
                <span>
                        <button onClick = {incrementNumber}>Increment</button>
                        <button className= {`button ${style}`} onClick = {decrementNumber}>Decrement</button>
                        <button onClick = {resetNumber} >Reset</button> 
                </span>
                <p className= {`text-${style == "hide" ? "show" : " hide"}`}>
                        Value is set already set to Zero.
                </p>
            </div>
        </div>
    );
}

export default AssignNumberState;