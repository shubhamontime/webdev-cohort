import { createElement } from "react";
import { createRoot } from "react-dom/client";


function App() {
    function calculate() {
    const number1 = Number(document.getElementById("quanlity1").value);
    const number2 = Number(document.getElementById("quanlity2").value);
    const total = number1 + (number1 * number2 / 100);
    document.getElementById("total").textContent = `Total: ${total}`;
    }
    return (
    <div id="box1">
        <div id="first">
            <h1>Tip Calculator</h1>
        </div>
        <div id="secound">
         <p>Enter the bill amount and tip percentage to calculate the total.</p>
        </div>
        <div id="third">
            <p>Bill amount:</p>
        </div>
        <div id="forth">
         <form>
            <input type="number" id="quanlity1" ></input>
         </form>
​        </div>
        <div id="fifth">
            <p>Tip percentage:</p>
        </div>
        <div id="sixth">
            <form>
            <input type="number" id="quanlity2" ></input>
         </form>
        </div>
        <div id="seventh">
            <button onClick={calculate} id="button">CALCULATE</button>
        </div>
        <div id="eighth">
            <p id="total">Total: </p>
        </div>
     </div>
  );
}
createRoot(document.getElementById("root")).render(<App />); 