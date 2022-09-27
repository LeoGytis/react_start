import "./App.scss";
import "./crud.scss";

import { useReducer, useState } from "react";
import colorReducer from "./Reducers/colorReducer";

function App() {

    // const [color, setColor] = useState('skyblue');

    const [color, dispatchColor] = useReducer(colorReducer, 'skyblue');

    // const goPink = () => {
    //   setColor('pink');
    // }

    
    const goPink = () => {

      const action = {
        type: 'go_pink'
      }

      dispatchColor(action);
    }
    
    const goYellow = () => {

      const action = {
        type: 'go_yellow'
      }

      dispatchColor(action);
    }

    const changeColor= () => {

      const action = {
        type: 'change_color'
      }

      dispatchColor(action);
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{ backgroundColor: color }}>020 Lesson - Reducer</h1>
                <div>
                <button onClick={goPink}>Go pink</button>
                <button onClick={goYellow}>Go yellow</button>
                <button onClick={changeColor}>Change Color</button>
                </div>
            </header>
        </div>
    );
}

export default App;
