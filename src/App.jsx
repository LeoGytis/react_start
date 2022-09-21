import "./App.scss";
import { useState } from "react";
import Create from "./Components/crud/Create";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container text-black">
                    <div className="row">
                       <Create/>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default App;
