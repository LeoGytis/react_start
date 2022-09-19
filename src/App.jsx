import logo from "./logo.svg";
import "./App.scss";
import { useState, useRef, useEffect } from "react";
import randomNumber from "./Functions/randomNumber";

function App() {
    const [kv, setKv] = useState(null);

    // First load
    useEffect(() => {
        setKv(JSON.parse(localStorage.getItem("kv")));
    }, []);

    // Saves changes
    useEffect(() => {
        if (null === kv) {
            return;
        }
        localStorage.setItem("kv", JSON.stringify(kv));
    }, [kv]);

    // let myNumber = useRef(0);

    // setKv((k) => [...parseInt(localStorage.getItem("count") ?? 0)]);

    const addKv = () => {
        const randomNr = randomNumber(1, 5);
        const squareCount = [];
        console.log(randomNr);

        for (let i = 0; i < randomNr; i++) {
            squareCount.push("^o^");
        }

        // setKv((k) => [...k, ...squareCount]);
        setKv(k => null === k ? [...squareCount] : [...k, ...squareCount]);
    };

    const cleanAll = () => {
        setKv([]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={addKv}>Add [ ]</button>
                <button onClick={cleanAll}>Clean all</button>
                <div className="kvc">
                    {kv
                        ? kv.map((k, i) => (
                              <div key={i} className="kv">
                                  {k}
                              </div>
                          ))
                        : null}
                </div>
            </header>
        </div>
    );
}

export default App;
