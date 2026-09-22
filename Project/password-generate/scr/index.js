import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";

function App(){
    const[Password,setpassword] =useState("HFSXHTGDU");
    const[Length,setLength] =useState(10);
    const[Numberchange,setNumberchange]=useState(false);
    const[Specialchange,setSpecialchange]=useState(false);
 
    function generatepassword(){
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(Numberchange)
        str+="0123456789";
    if(Specialchange)
        str+="+-)(*!@#$%^&";
    let pass=""
    for(let i=0;i<Length;i++){
    pass+=str[Math.floor(Math.random()*str.length)]
    }
    setpassword(pass);  
}
useEffect(()=>{
generatepassword();
},[Length,Numberchange,Specialchange]);
   return (
    <div id="main">
        <div id="first">
            <h1>Password-Generater</h1>
        </div>
        <div id="up">
           <h1>Password:- {Password}</h1>
        </div>
        <div id="down">
           <h2>Length:- {Length}</h2>
        <input type="range" min="5" max="20" value={Length} onChange={(e)=>setLength(Number(e.target.value))}></input>
        <input type="checkbox" checked={Numberchange} onChange={()=>setNumberchange(!Numberchange)}></input>
           <h2>Add Number</h2>
        <input type="checkbox" checked={Specialchange} onChange={()=>setSpecialchange(!Specialchange)}></input>
           <h2>Add Special Characters</h2>
       
    </div>
</div>
  );
        
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);