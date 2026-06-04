import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import TaskModal from "../components/TaskModal";

function ProjectDetails() {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [showTaskModal, setShowTaskModal] = useState(false);

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
                <button
                    className="add-task"
                    onClick={() => {
                        setSelectedTask(null);
                        setShowTaskModal(true);
                    }}
                >
                    + New Task
                </button>
            </div>
            <div className="task-board">
                <div className="task-list">
                    {tasks.length === 0 ? (
                        <p>No tasks yet. Create one to view it here.</p>
                    ) : (
                        tasks.map((task) => (
                            <div
                                key={task.id}
                                className="task-row"
                                onClick={() => {
                                    setSelectedTask(task);
                                    setShowTaskModal(true);
                                }}
                            >
                                <div>
                                    <h4>{task.title}</h4>
                                    <p>{task.description}</p>
                                    <p className="status">{task.status}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>
    );
}

export default ProjectDetails;