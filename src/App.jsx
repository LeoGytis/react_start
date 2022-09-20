import "./App.scss";
import { useState } from "react";

function App() {
    const [text, setText] = useState("");
    const [select, setSelect] = useState("three");
    const [cb, setCb] = useState({ a: false, b: false, c: true, d: true });
    const [radio, setRadio] = useState('a');

    const [color, setColor] = useState('pink');

    const inputText = (e) => {
        setText(e.target.value);
    };

    const cbClick = (value) => {
        setCb((checkBox) => ({ ...checkBox, [value]: !checkBox[value] }));
    };

    const inputColor = e => {
        setColor(e.target.value);
    }

    return (
        <div className="App">
            <header className="App-header" style={{background:color}}>
                <fieldset>
                    <legend>Text</legend>
                    <input
                        type="text"
                        onChange={inputText}
                        value={text}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Select</legend>
                    <select
                        value={select}
                        onChange={(e) => setSelect(e.target.value)}
                    >
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                        <option value="four">Four</option>
                        <option value="five">Five</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>Checkbox</legend>A
                    <input
                        type="checkbox"
                        onChange={() => cbClick("a")}
                        checked={cb.a}
                    ></input>
                    B
                    <input
                        type="checkbox"
                        onChange={() => cbClick("b")}
                        checked={cb.b}
                    ></input>
                    C
                    <input
                        type="checkbox"
                        onChange={() => cbClick("c")}
                        checked={cb.c}
                    ></input>
                    D
                    <input
                        type="checkbox"
                        onChange={() => cbClick("d")}
                        checked={cb.d}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Radio buttons</legend>
                    A<input type="radio" name="r" value="a" onChange={e => setRadio(e.target.value)} checked={radio === 'a'}></input>
                    B<input type="radio" name="r" value="b" onChange={e => setRadio(e.target.value)} checked={radio === 'b'}></input>
                    C<input type="radio" name="r" value="c" onChange={e => setRadio(e.target.value)} checked={radio === 'c'}></input>
                    D<input type="radio" name="r" value="d" onChange={e => setRadio(e.target.value)} checked={radio === 'd'}></input>
                </fieldset>
                <fieldset>
                    <legend>T-COLOR</legend>
                    <input type="color" onChange={inputColor} value={color}></input>
                </fieldset>
            </header>
        </div>
    );
}

export default App;
