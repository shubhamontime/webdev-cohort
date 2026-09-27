import React from "react";
import ReactDOM from "react-dom/client";
import header from "./header";
import Body from "./Body";
function App(){
    return(
     <>
       <header></header>
       <Body></Body>
     </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);