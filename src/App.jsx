import "./App.scss";
import "./crud.scss";
import { useEffect, useState } from "react";
import Create from "./Components/crud/Create";
import List from "./Components/crud/List";
import { create, read, remove, edit } from "./Functions/localStorage";

function App() {
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [exams, setExams] = useState(null);
    const [createData, setCreateData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [modalData, setModalData] = useState(null);

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

    // --------- Delete ---------
    useEffect(() => {
        if (null === deleteData) {
            return;
        }
        remove(deleteData);
        setLastUpdate(Date.now());

    }, [deleteData]);

    return (
        <div className="App">
            <header className="App-header">
                <div className="container text-black">
                    <div className="row">
                        <Create createData={setCreateData} />
                        <List examsList={exams} setDeleteData={setDeleteData} setModalData={setModalData}/>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default App;
