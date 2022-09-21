import { useState } from "react";

function Create() {
    const [name, setName] = useState("");
    const [type, setType] = useState("1");
    const [place, setPlace] = useState("");

    return (
        <div className="col-4">
            <div className="card">
                <div className="card-header">Create new Ex</div>
                <div className="card-body text-start">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Type</label>
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
                        <label>Place</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setPlace(e.target.value)}
                            value={place}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-primary mt-3"
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Create;
