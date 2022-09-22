import { useEffect, useState } from "react";

function Edit({ modalData, setModalData, setEditData }) {
    const [name, setName] = useState("");
    const [type, setType] = useState("1");
    const [place, setPlace] = useState("");

    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setName(modalData.name);
        setType(modalData.type);
        setPlace(modalData.place);
    }, [modalData]);

    const handleEdit = () => {
        const data = { name, type, place, id: modalData.id };
        setEditData(data);
        setModalData(null);
    };

    if (null === modalData) {
        return null;
    }

    return (
        <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Edit your exam</h2>
                        <button
                            onClick={() => setModalData(null)}
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        {/* <button
                            type="button"
                            className="close"
                            onClick={() => setModalData(null)}
                        >
                            <span>&times;</span>
                        </button> */}
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label className="form-label fs-6">Type</label>
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
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={handleEdit}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
