import Exams from "./Exams";

function List({ examsList, setDeleteData, setModalData }) {
    return (
        <div className="col-8">
            <div className="card">
                <div className="card-header">List of Exams</div>
                <div className="card-body text-start">
                    <ul className="list-group">
                    {
                    examsList ? examsList.map(ex => <Exams key={ex.id} exam={ex} setDeleteData={setDeleteData} setModalData={setModalData}></Exams>) : null
                    }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default List;
