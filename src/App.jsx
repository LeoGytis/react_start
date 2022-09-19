import logo from "./logo.svg";
import "./App.scss";
import { useState, useRef, useEffect } from "react";
import randomNumber from "./Functions/randomNumber";

function App() {
    const [kv, setKv] = useState([]);
    const randomNr = randomNumber(1, 5);

    let myNumber = useRef(0);

    const addKv = () => {
        console.log(randomNr);

        myNumber.current = myNumber.current + randomNr;
        console.log(myNumber.current);

        for (let i = 0; i < randomNr; i++) {
            setKv((k) => [...k, 1]);
        }
    };

    const undoKv = () => {
        setKv((k) => k.slice(myNumber.current));
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={addKv}>Add [ ]</button>
                <button onClick={undoKv}>Undo [ ]</button>
                <div className="kvc">
                    {kv.map((c, i) => (
                        <div className="kv" key={i}>
                            {i}
                        </div>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;
