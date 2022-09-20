import logo from "./logo.svg";
import "./App.scss";
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import randomColor from "./Functions/randomColor";

function App() {
    const [sheeps, setSheeps] = useState([]);

    const addSheep = () => {
        const newSheep = {
            id: uuidv4(),
            color: randomColor(),
            where: "ganykla",
        };
        setSheeps([...sheeps, newSheep]);
    };

    const goSheep = (id) => {

        // setSheeps(a => {
        //     const avis = a.filter(av => av.id === id)[0];   //[0] grazina masyvo pirma elementa
        //     avis.where = 'kirpykla';
        //     const kitos = a.filter(av => av.id !== id);
        //     return [...kitos, avis];
        // });

        setSheeps((a) =>
            a.map((avis) =>
                avis.id === id ? { ...avis, where: "kirpykla" } : avis
            )
        );
    };
    const goBackSheep = (id) => {
        setSheeps((a) =>
        a.map((avis) =>
            avis.id === id ? { ...avis, where: "ganykla" } : avis
        )
    );
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Sheeps!</h1>
                <div className="kvc">
                    {sheeps
                        .filter((a) => a.where === "kirpykla")
                        .map((sheep, i) => (
                            <div
                                onClick={() => goBackSheep(sheep.id)}
                                key={sheep.id}
                                className="kv"
                                style={{ background: sheep.color }}
                            ></div>
                        ))}
                </div>

                <button onClick={addSheep}>New sheep!</button>
                <div className="kvc">
                    {sheeps
                        .filter((a) => a.where === "ganykla")
                        .map((sheep, i) => (
                            <div
                                onClick={() => goSheep(sheep.id)}
                                key={sheep.id}
                                className="kv"
                                style={{ background: sheep.color }}
                            ></div>
                        ))}
                </div>
            </header>
        </div>
    );
}

export default App;
