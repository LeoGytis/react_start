import "./App.scss";
import "./crud.scss";
import { useEffect, useReducer, useRef, useState } from "react";
import listReducer from "./Reducers/listReducer";

function App() {
    const [list, listDispach] = useReducer(listReducer, []);
    const [number, setNumber] = useState("");
    const [range, setRange] = useState("0");
    const doRange = useRef(true);

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
            type: "defaultSortList",
        };
        listDispach(action);
    };

    const add = () => {
        const action = {
            type: "add",
        };
        listDispach(action);
    };

    const hide = (nr) => {
        const action = {
            type: "hide",
            payload: nr,
        };
        listDispach(action);
    };

    const hideNumber = () => {
        const action = {
            type: "hide",
            payload: number,
        };
        setNumber("");
        listDispach(action);
    };

    useEffect(() => {
        if (!doRange.current) {
            return;
        }
        doRange.current = false;
        setTimeout(() => (doRange.current = true), 20);

        const action = {
            type: "range",
            payload: range,
        };
        listDispach(action);
    }, [range]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>021 lesson - Reducer uzduotys</h1>
                <div>
                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={getNewList}
                    >
                        Get New List
                    </button>
                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={sortList}
                    >
                        Sort the List
                    </button>

                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={more500}
                    >
                        More than 500
                    </button>
                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={less400}
                    >
                        Less than 400
                    </button>
                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={filter_reset}
                    >
                        Filter reset
                    </button>
                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={defaultSortList}
                    >
                        Default sorted list
                    </button>
                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={add}
                    >
                        Add [ ]
                    </button>
                </div>
                <div className="form-group">
                    <label className="form-label mt-3">
                        Type in number to hide
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}
                    />
                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={hideNumber}
                    >
                        Hide!
                    </button>
                </div>
                <div className="form-group mt-3">
                    <h2>{range}</h2>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        onChange={(e) => setRange(e.target.value)}
                        value={range}
                    ></input>
                </div>
                <div className="kvc mt-3">
                    {list.map((a, i) =>
                        a.show ? (
                            <div
                                className="kv list-box"
                                style={{ backgroundColor: a.color }}
                                key={i}
                                onClick={() => hide(a.number)}
                            >
                                {a.number}
                            </div>
                        ) : null
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
