import { useState } from "react";

function Create({ createData }) {
    const [name, setName] = useState("");
    const [type, setType] = useState("1");
    const [place, setPlace] = useState("");

    const handleCreate = () => {
        const data = { name, type, place };
        createData(data);
        setName("");
        setType("1");
        setPlace("");
    };

    return (
        <div className="col-4">
            <div className="card">
                <div className="card-header">Create new Exam</div>
                <div className="card-body text-start">
                    <div className="form-group">
                        <label className="form-label fs-6">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label fs-6">Type</label>
                        <select
                            className="form-select"
                            onChange={(e) => setType(e.target.value)}
                            value={type}
                        >
                            <option value="1">Test</option>
                            <option value="2">Written</option>
                            <option value="3">Spoken</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label fs-6">Place</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setPlace(e.target.value)}
                            value={place}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            type="button"
                            className="btn btn-outline-primary mt-3"
                            onClick={handleCreate}
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Create;
