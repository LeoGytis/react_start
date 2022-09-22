import { useState } from "react";
import Exams from "./Exams";

function List({ exes }) {
    return (
        <div className="col-8">
            <div className="card">
                <div className="card-header">List of Exams</div>
                <div className="card-body text-start">
                    <ul className="list-group">
                    {
                    exes ? exes.map(ex => <Exams key={ex.id} ex={ex}></Exams>) : null
                    }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default List;
