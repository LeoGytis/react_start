import "./App.scss";
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

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{ backgroundColor: color }}>020 Lesson - Reducer</h1>
                <button onClick={goPink}>Go pink</button>
            </header>
        </div>
    );
}

export default App;
