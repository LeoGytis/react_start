import "./App.scss";
import { useEffect, useState } from "react";
import Create from "./Components/crud/Create";
import List from "./Components/crud/List";
import { create, read } from "./Functions/localStorage";

function App() {

    const [exes, setExes] = useState(null);

    const [createData, setCreateData] = useState(null);

    // ----- Create ------
    useEffect(() => {
        if (null === createData) {
            return;
        }
        create(createData);
    }, [createData]);

    // ----- Read ------
    useEffect(() => {
       setExes(read());
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div className="container text-black">
                    <div className="row">
                        <Create setCreateData={setCreateData} />
                        <List exes={exes}/>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default App;
