import "./App.scss";
import { useEffect, useState, useReducer } from "react";
import Books from "./Components/011/Books";
import axios from "axios";
import booksReducer from "./Reducers/booksReducer";

function App() {
    // const [books, setBooks] = useState([]);
    const [books, dispachBooks] = useReducer(booksReducer, []);
    const [btypes, setBtypes] = useState([]);

    // const getNewList = (responseData) => {
    //     const action = {
    //         type: "new_list",
    //         payload: responseData
    //     };
    //     dispachBooks(action);
    // };

    useEffect(() => {
        axios.get("https://in3.dev/knygos/").then((res) => {
            const action = {
                type: "new_list",
                payload: res.data,
            };
            console.log(res.data);

            dispachBooks(action);
            // getNewList(res.data);
        });
    }, []);

    const sortList = () => {
        const action = {
            type: "sort_list",
        };
        dispachBooks(action);
    };

    const defaultSortList = () => {
        const action = {
            type: "defaultSortList",
        };
        dispachBooks(action);
    };

    const more13 = () => {
        const action = {
            type: "more13",
        };
        dispachBooks(action);
    };

    const filterReset = () => {
        const action = {
            type: "freset",
        };
        dispachBooks(action);
    };

    // Is naujo atsiuncia knygas is serverio
    const bookReload = () => {
        const action = {
            type: "freset",
        };
        dispachBooks(action);
    };

    // sujungti knygu tipus is https://in3.dev/knygos/types/
    useEffect(() => {
        axios.get("https://in3.dev/knygos/types/").then((res) => {
            const action = {
                type: "get_types",
                payload: res.data,
            };
            dispachBooks(action);
        });
    }, [btypes]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>022 Lesson</h1>
                <div>
                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={sortList}
                    >
                        Sort the List
                    </button>
                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={defaultSortList}
                    >
                        Default sort list
                    </button>
                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={more13}
                    >
                        More than 13eur
                    </button>
                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={filterReset}
                    >
                        Filter reset
                    </button>
                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={bookReload}
                    >
                        Book reload
                    </button>
                    <button
                        className="btn btn-outline-success mt-2 ms-3"
                        onClick={() => setBtypes([])}
                    >
                        Get book types
                    </button>
                </div>
                {/* <div>
                    {
                       books.length ? books.map((b, i) => <div key={b.id}>{b.title} <i>{b.price} EUR</i></div>) : <h2>Loading...</h2>
                    }
                </div> */}
                <div>
                    {books.map((b, i) =>
                        b.show ? (
                            <div key={b.id}>
                                {b.title} <i>{b.price} EUR</i>
                                {b.typename}
                            </div>
                        ) : null
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
