import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function App() {
 const [color, setColor] = useState("");
   document.body.style.backgroundColor = color;
   console.log('hello')
  return (
    <div id="main" >
        <h1 id="headline">Color changing button</h1>
        <div id="button">
        <button onClick={() => setColor("red")} id="red">Red</button>
        <button onClick={() => setColor("pink")} id="pink">Pink</button>
        <button onClick={() => setColor("yellow")} id="yellow">Yellow</button>
        <button onClick={() => setColor("white")} id="white">White</button>
        <button onClick={() => setColor("orange")} id="orange">Orange</button>
        </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
