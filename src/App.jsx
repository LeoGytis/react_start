import "./App.scss";
import "./crud.scss";

import { useReducer, useState, useEffect } from "react";
import colorReducer from "./Reducers/colorReducer";
import numberReducer from "./Reducers/numberReducer";
import rand from "./Functions/randomNumber";
import textReducer from "./Reducers/textReducer";

function App() {
    const [colorName, setColorName] = useState("skyblue");
    const [color, dispatchColor] = useReducer(colorReducer, "skyblue");
    const [numb, dispachNumber] = useReducer(numberReducer, "0000");

    const [colorInput, setColorInput] = useState("#F8dd00");

    const [textInput, setTextInput] = useState("Labas");
    // const [text, dispatchText] = useReducer(textReducer, "Hello");


    const goPink = () => {
        const action = {
            type: "go_pink",
        };

        dispatchColor(action);
    };

    const goYellow = () => {
        const action = {
            type: "go_yellow",
        };

        dispatchColor(action);
    };

    const changeColor = () => {
        const action = {
            type: "change_color",
        };

        dispatchColor(action);
    };

    const randomNumber = () => {
        const action = {
            type: "change_number",
        };
        dispachNumber(action);
    };

    const number2 = () => {
        const action = {
            type: "do2",
            payload: rand(0, 100),
        };
        dispachNumber(action);
    };

    const changeColor2 = () => {
        const action = {
            type: 'change_color_to',
            payload: colorInput,
        };
        dispatchColor(action);
    };

    const changeText = () => {
      const action = {
          type: 'change_text',
          payload: textInput,
      };
      dispachNumber(action);
  };

    // useEffect(() => {
    //       // setInterval(()=> dispachColor({type: 'change_color'}), 3000)
    //   }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{ backgroundColor: color }}>020 Lesson - Reducer</h1>
                <span> {numb} </span>
                <div className="mb-3">
                    <button
                        className="btn btn-outline-success"
                        onClick={goPink}
                    >
                        Go pink
                    </button>
                    <button
                        className="btn btn-outline-success ms-2"
                        onClick={goYellow}
                    >
                        Go yellow
                    </button>
                    <button
                        className="btn btn-outline-success ms-2"
                        onClick={changeColor}
                    >
                        Change Color
                    </button>
                    <button
                        className="btn btn-outline-success ms-2"
                        onClick={randomNumber}
                    >
                        Random Number
                    </button>
                    <button
                        className="btn btn-outline-success ms-2"
                        onClick={number2}
                    >
                        Random Number
                    </button>
                </div>
                <div>
                    <input
                        type="color"
                        value={colorInput}
                        onChange={(e) => setColorInput(e.target.value)}
                    ></input>
                    <button
                        className="btn btn-outline-success ms-2"
                        onClick={changeColor2}
                    >
                        Change Color Now
                    </button>
                </div>
                <div>
                    <input
                        type="text"
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                    ></input>
                    <button
                        className="btn btn-outline-success ms-2"
                        onClick={changeText}
                    >
                        Change Text
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
