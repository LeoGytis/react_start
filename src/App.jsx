import logo from "./logo.svg";
import "./App.scss";
import { useState, useRef, useEffect } from "react";
import randomNumber from "./Functions/randomNumber";

function App() {
    const [kv, setKv] = useState(null);
    const istorija = useRef([]);

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
        istorija.current.unshift(kv);
    }, [kv]);

    const addKv = () => {
        const randomNr = randomNumber(1, 5);
        const squareCount = [];
        console.log(randomNr);

        for (let i = 0; i < randomNr; i++) {
            squareCount.push("^o^");
        }

        // setKv((k) => [...k, ...squareCount]);
        setKv((k) => (null === k ? [...squareCount] : [...k, ...squareCount]));
    };

    const cleanAll = () => {
        setKv([]);
    };

    const undo = () => {
        let senas = istorija.current.shift();
        if (!senas) {
            setKv([]);
        } else if (senas.length === kv.length) {
            senas = istorija.current.shift();
            if (!senas) {
                setKv([]);
            } else {
                setKv(senas);
            }
        } else {
            setKv(senas);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={addKv}>Add [ ]</button>
                <button onClick={cleanAll}>Clean all</button>
                <button onClick={undo}>Undo</button>
                <div className="kvc">
                    {kv
                        ? kv.map((k, i) => (
                              <div key={i} className="kv">
                                  {i}
                              </div>
                          ))
                        : null}
                </div>
            </header>
        </div>
    );
}

export default App;
