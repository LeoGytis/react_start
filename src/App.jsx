import logo from "./logo.svg";
import "./App.scss";
import { useState, useRef, useEffect } from "react";
import randomNumber from "./Functions/randomNumber";

const catsArray = ["Mulkis", "Kakius", "Pilkius", "Balčius"];
const dogsArray = ["Sniego", "Dingo", "Atsirado", "Pifas", "Bobikas"];

function App() {
    const [kv, setKv] = useState(null);
    const istorija = useRef([]);
    const [cats, setCats] = useState([]);
    const [animals, setAnimals] = useState([]);

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

    const showCats = () => {
        setAnimals([...animals, ...catsArray]);
    };

    const showDogs = () => {
        setAnimals([...dogsArray]);
    };

    const clearAnimals = () => {
        setAnimals([]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>013 Lesson - Praktimumas</h1>
                <button onClick={addKv}>Add [ ]</button>
                <button onClick={cleanAll}>Clean all</button>
                <button onClick={undo}>Undo</button>
                <button onClick={showCats}>Show Cats</button>
                <button onClick={showDogs}>Show Dogs</button>
                <button onClick={clearAnimals}>Clear Animal List</button>
                <div className="kvc">
                    {kv
                        ? kv.map((k, i) => (
                              <div key={i} className="kv">
                                  {i}
                              </div>
                          ))
                        : null}
                </div>
                <div>
                    {animals.map((a, i) => (
                        <div key={i}>{a}</div>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;
