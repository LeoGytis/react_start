import "./App.scss";
import { useEffect, useState } from "react";
import Create from "./Components/crud/Create";

function App() {
    const [createData, setCreateData] = useState(null);

    // ----- Create ------
    useEffect(() => {
        if (null === createData) {
            return;
        }
        // --- to localStorage ---
    }, [createData]);

    return (
        <div className="App">
            <header className="App-header">
                <div className="container text-black">
                    <div className="row">
                        <Create />
                    </div>
                </div>
            </header>
        </div>
    );
}
export default App;
