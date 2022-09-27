import "./App.scss";
import "./crud.scss";

import { useReducer, useState } from "react";
import colorReducer from "./Reducers/colorReducer";
import numberReducer from "./Reducers/numberReducer";
import rand from './Functions/rand';

function App() {
    // const [color, setColor] = useState('skyblue');
    const [color, dispatchColor] = useReducer(colorReducer, "skyblue");
    const [numb, dispachNumber] = useReducer(numberReducer, "0000");

    // const goPink = () => {
    //   setColor('pink');
    // }

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
          type: 'do2',
          payload: rand(0, 100)
      }
      dispachNumber(action);
  }

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{ backgroundColor: color }}>020 Lesson - Reducer</h1>
                <span> {numb} </span>
                <div>
                    <button onClick={goPink}>Go pink</button>
                    <button onClick={goYellow}>Go yellow</button>
                    <button onClick={changeColor}>Change Color</button>
                    <button onClick={randomNumber}>Random Number</button>
                    <button onClick={number2}>Random Number</button>
                </div>
            </header>
        </div>
    );
}

export default App;
