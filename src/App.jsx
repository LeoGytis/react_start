import "./App.scss";
import { useEffect, useState, useReducer } from "react";
import Books from "./Components/011/Books";
import axios from "axios";
import booksReducer from "./Reducers/booksReducer";

function App() {
    // const [books, setBooks] = useState([]);
    const [books, dispachBooks] = useReducer(booksReducer, []);


    const getNewList = (responseData) => {
        const action = {
            type: "new_list",
            payload: responseData
        };
        dispachBooks(action);
    };

    useEffect(() => {
        axios.get("https://in3.dev/knygos/").then((res) => {
            // const action = {
            //     type: "new_list",
            //     payload: res.data
            // };
            // dispachBooks(action);
            getNewList(res.data);
        });
    }, []);

 


    return (
        <div className="App">
            <header className="App-header">
                <h1>022 Lesson</h1>
                <div>
                    {
                       books.length ? books.map(b => <div key={b.id}>{b.title} <i>{b.price} EUR</i></div>) : <h2>Loading...</h2>
                    }
                </div>
            </header>
        </div>
    );
}

export default App;
