import "./App.scss";
import "./crud.scss";
import { useReducer } from "react";
import listReducer from "./Reducers/listReducer";
import { useState } from "react";

function App() {
    const [list, listDispachd] = useReducer(listReducer, []);
    // const [sortedList, getSortedList] = useState[list];

    const getNewList = () => {
        const action = {
            type: "new_list",
        };
        listDispachd(action);
    };

    const sortList = () => {
        const action = {
            type: "sort",
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
                    {list.map((a, i) => (
                        <div className="kv" style={{backgroundColor :a.color}} key={i}>
                            {a.number}
                        </div>
                    ))}
                </div>
                <button
                    className="btn btn-outline-success mt-2"
                    onClick={sortList}
                >
                    Sort the List
                </button>

            </header>
        </div>
    );
}

export default App;
