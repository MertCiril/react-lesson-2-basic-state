import {useState} from "react";

function Counter() {
    const [count,setCount]=useState(0);
    const increase= () => {
      setCount(count+1);
    }
    const decrease = () =>{
        setCount(count-1);
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=> increase()}>+</button>
            <br></br>
            <button onClick={()=> decrease()}>-</button>
        </div>
    )
    
}
export default Counter;