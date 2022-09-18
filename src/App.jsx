import logo from "./logo.svg";
import "./App.scss";
import { useState, useRef } from "react";


function App() {
  
    const [count, setCount] = useState(0);

    const mano = useRef(0);             // plain js kintamasis kuris neitakoja nieko kito
    const panda = useRef();

    const add = () => {
        setCount(c => c + 1)
        mano.current = mano.current + 3;
        console.log(mano.current);
        // const p = document.querySelector('#panda');

        const p = panda.current;
        console.log(p.dataset.panda);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>useRef LocalStorage</h1>
                <h2>Counting {count}</h2>
                <button onClick={add}>Add +1</button>
                <div ref={panda} id="panda" data-panda="miega"></div>
            </header>
        </div>
    );
}

export default App;
