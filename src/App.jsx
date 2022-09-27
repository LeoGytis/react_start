import "./App.scss";
import "./crud.scss";
import { useReducer } from "react";
import listReducer from "./Reducers/listReducer";
import { useState } from "react";

function App() {
    const [list, listDispach] = useReducer(listReducer, []);
    const [number, setNumber] = useState('');

    const getNewList = () => {
        const action = {
            type: "new_list",
        };
        listDispach(action);
    };

    const sortList = () => {
        const action = {
            type: "sort",
        };
        listDispach(action);
    };

    const more500 = () => {
        const action = {
            type: "more500",
        };
        listDispach(action);
    };

    const less400 = () => {
        const action = {
            type: "less400",
        };
        listDispach(action);
    };

    const filter_reset = () => {
        const action = {
            type: "filter_reset",
        };
        listDispach(action);
    };

    const defaultSortList = () => {
        const action = {
            type: 'defaultSortList'
        }
        listDispach(action);
    }

    const add = () => {
        const action = {
            type: 'add'
        }
        listDispach(action);
    }

    const hide = () => {
        const action = {
            type: 'hide',
            payload: number
        }
        setNumber('');
        listDispach(action);
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
                <button
                    className="btn btn-outline-success mt-2"
                    onClick={sortList}
                >
                    Sort the List
                </button>
                <div className="kvc">
                    {list.map((a, i) => a.show ? 
                        <div
                            className="kv"
                            style={{ backgroundColor: a.color }}
                            key={i}
                        ><button onClick={hide(a.i)}></button>
                            {a.number}
                        </div> : null
                    )}
                </div>
                <button
                    className="btn btn-outline-success mt-2"
                    onClick={more500}
                >
                    More than 500
                </button>
                <button
                    className="btn btn-outline-success mt-2"
                    onClick={less400}
                >
                    Less than 400
                </button>
                <button
                    className="btn btn-outline-success mt-2"
                    onClick={filter_reset}
                >
                    Filter reset
                </button>
                <button
                    className="btn btn-outline-success mt-2"
                    onClick={defaultSortList}
                >
                    Default sorted list
                </button>
                <button
                    className="btn btn-outline-success mt-2"
                    onClick={add}
                >
                    Add [ ]
                </button>
            </header>
        </div>
    );
}

export default App;
