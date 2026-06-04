import { IoArrowBack } from "react-icons/io5";

function ProjectDetails() {
    return (
        <div className="details-container">
            <div className="page-header">
                <button className="back-btn"> <IoArrowBack /> Back</button>
                <div className="project-detail">
                    <h2>Project Title</h2>
                    <p>Project description...</p>
                </div>
            </div>

            <div className="page-section-header">
                <h3>Tasks</h3>
                <button className="add-task">
                    + New Task
                </button>
            </div>
            <div className="task-board">
                {/* task columns here */}
            </div>

        </div>
    );
}

export default ProjectDetails;