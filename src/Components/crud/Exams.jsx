function Exams({ exam, setDeleteData, setModalData }) {

    const handleDelete = () => {
        setDeleteData(exam);
    };

    const handleEdit = () => {
        setModalData(exam);
    };

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>{exam.name}</b>
                    <span>{["Test", "Written", "Spoken"][exam.type - 1]}</span>
                    <i>{exam.place}</i>
                </div>
                <div className="buttons">
                    <button
                        type="button"
                        className="btn btn-outline-success me-2"
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Exams;
