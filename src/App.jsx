import "./App.scss";
import { useEffect, useState } from "react";
import Create from "./Components/crud/Create";
import List from "./Components/crud/List";
import { create, read } from "./Functions/localStorage";

function App() {
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [exams, setExams] = useState(null);
    const [createData, setCreateData] = useState(null);

    // --------- Read ---------
    useEffect(() => {
        setExams(read());
    }, [lastUpdate]);

    // --------- Create ---------
    useEffect(() => {
        if (null === createData) {
            return;
        }
        create(createData);
        setLastUpdate(Date.now());
    }, [createData]);

    return (
        <div className="App">
            <header className="App-header">
                <div className="container text-black">
                    <div className="row">
                        <Create createData={setCreateData} />
                        <List examsList={exams} />
                    </div>
                </div>
            </header>
        </div>
    );
}
export default App;
