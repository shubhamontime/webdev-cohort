import React, { useState } from "react";
import ReactDOM from "react-dom/client"



function App(){
    const [count,setcount]= useState(0);
    const[number,setnumber]= useState(0);
    const [result, setresult] = useState(0);
   return (
    <> 
      <h1>count is: {count}</h1>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Decrement</button>
      <div>
        <h2>Fibbonnic number is:{result}</h2>
        <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)}></input>
      </div>
    </>
   );  
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);