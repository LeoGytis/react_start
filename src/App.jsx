import "./App.scss";
import { useEffect, useState } from "react";
import Create from "./Components/crud/Create";
import { create } from './Functions/localStorage';

function App() {
    const [createData, setCreateData] = useState(null);

    // ----- Create ------
    useEffect(() => {
        if (null === createData) {
            return;
        }
        create(createData);
    }, [createData]);

    return (
        <div className="App">
            <header className="App-header">
                <div className="container text-black">
                    <div className="row">
                        <Create setCreateData={setCreateData}/>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default App;
