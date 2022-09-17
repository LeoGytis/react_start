import logo from "./logo.svg";
import "./App.css";
import { version } from "react";
import { useState } from "react";
import randomColor from "./Functions/randomColor";

const katinukai = ["pilkis", "murkis", "rainis"];

function App() {
  const [spalva, setSpalva] = useState("yellow"); // <<--- state
  const [number, setNumber] = useState(0);
  const [kv, setKv] = useState([]);

  const buttonNice = () => {
    console.log("I am nice ");
    return buttonMoreNice;
  };

  const buttonMoreNice = () => {
    console.log("I am more nice ");
  };

  const beArgumentu = () => {
    console.log("Without arguments");
  };

  const suArgumentu = (ka) => {
    console.log("With arguments " + ka + "React version: " + version);
  };

  const keistiSpalva = () => {
    const nauja = spalva === "yellow" ? "pink" : "yellow"; // blogai

    setSpalva((old) => (old === "yellow" ? "pink" : "yellow"));

    // setSpalva('skyblue');

    console.log(spalva); //  po setSpalva ne is karto pakeicia spalva (tik ekrane)
  };

  const addNumber = () => {
    setNumber((number) => number + 1);
  };

  const skaiciuotuvas = (ka) => {
    setNumber((number) => number + ka);
  };

  const addKv = () => {
    setKv(k => [...k, randomColor()]);
  };

  const remKv = () => {
    setKv(k => k.slice(1));
}

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: spalva }}>010 Lesson - State</h1>
        <h3>Skaiciuojam {number}</h3>
        <button onClick={buttonNice}>Press me!</button>
        <button onClick={beArgumentu}>Be!</button>
        <button onClick={() => suArgumentu("hello")}>Su!</button>{" "}
        {/*  pasileidzia funkcija () ir onclick iskviecia kita funkcija */}
        {/* <button onClick={keistiSpalva}>Kita spalva</button>
          <button onClick={addNumber}>Add number</button>
          <button onClick={() => skaiciuotuvas(1)}>+1</button>
          <button onClick={() => skaiciuotuvas(-1)}>-1</button> */}
        {/* //-------------------------------- */}
        <button onClick={addKv}>Add []</button>
        <button onClick={remKv}>REMOVE []</button>

        {katinukai.map((k, i) => (
          <div key={i}>{k}</div>
        ))}
        <div className="kvc">
          {
            kv.map((c, i) => (
              <div
                className="kv"
                key={i}
                style={{backgroundColor:c}}
              >{i}</div>
            )) // kai kintaomojo nenaudoji bet jis reikalingas sintaksei tai dedam _k
          }
        </div>
      </header>
    </div>
  );
}

export default App;
