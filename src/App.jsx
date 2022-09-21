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
        Create(createData);
    }, [createData]);

    return (
        <div className="App">
            <header className="App-header">
                <div className="container text-black">
                    <div className="row">
                        <Create setCreateData={setCreateData} />
                    </div>
                </div>
            </header>
        </div>
    );
}
export default App;
