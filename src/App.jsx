import "./App.scss";
import "./crud.scss";
import { useReducer } from "react";
import listReducer from "./Reducers/listReducer";


function App() {
    // const [numb, dispachNumber] = useReducer(numberReducer, "0000");

    const [list, listDispachd] = useReducer(listReducer, []);
    

    const getNewList = () => {
        const action = {
            type: "new_list",
        };
        listDispachd(action);

    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>021 lesson - Reducer uzduotys</h1>
                <button
                        className="btn btn-outline-success mt-2"
                        onClick={getNewList}
                    >
                        Get New List
                    </button>
                    <div className="kvc">
                    {list.map((l, i) => (
                        <div className="kv" key={i}>{l}</div>
                    ))}
                </div>

            </header>
        </div>
    );
}

export default App;
