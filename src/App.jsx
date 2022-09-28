import "./App.scss";
import { useEffect, useState } from "react";
import Books from "./Components/011/Books";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://in3.dev/knygos/").then((res) => {
            setBooks(res.data);
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
