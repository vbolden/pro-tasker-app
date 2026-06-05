import { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import TaskModal from "../components/TaskModal";
import { FaTrash } from "react-icons/fa";
import API from "../api/axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProjectDetails() {
    const [project, setProject] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [showTaskModal, setShowTaskModal] = useState(false);
    const { id: projectId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // console.log("Fetching tasks...");

                const [projectRes, tasksRes] = await Promise.all([
                    API.get(`/api/projects/${projectId}`),
                    API.get(`/api/projects/${projectId}/tasks`)
                ]);

                setProject(projectRes.data);
                setTasks(tasksRes.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [projectId]);

    const handleSaveTask = async (taskData) => {
        try {
            if (selectedTask) {
                // UPDATE
                const res = await API.put(
                    `/api/projects/${projectId}/tasks/${selectedTask._id}`,
                    taskData
                );

                setTasks((prev) =>
                    prev.map((task) =>
                        task._id === selectedTask._id
                            ? res.data
                            : task
                    )
                );
            } else {
                // CREATE
                const res = await API.post(
                    `/api/projects/${projectId}/tasks`,
                    taskData
                );

                setTasks((prev) => [...prev, res.data]);
            }

            setShowTaskModal(false);
            setSelectedTask(null);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteTask = async (taskId) => {
        const confirmed = window.confirm(
            "Delete this task?"
        );

        if (!confirmed) return;

        try {
            await API.delete(`/api/projects/${projectId}/tasks/${taskId}`);

            setTasks((prev) =>
                prev.filter((t) => t._id !== taskId)
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="details-container">
            <div className="page-header">
                <button className="back-btn" onClick={() => navigate("/dashboard/projects")} > <IoArrowBack /> Back</button>
                <div className="project-detail">
                    <h2>{project?.title}</h2>
                    <p>{project?.description}</p>
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
                                key={task._id}
                                className="task-row"
                                onClick={() => {
                                    setSelectedTask(task);
                                    setShowTaskModal(true);
                                }}
                            >
                                <div>
                                    <h4>{task.title}</h4>
                                    <p>{task.description}</p>
                                    <p className={`status ${task.status?.toLowerCase().replace(' ', '-') || ''}`}>{task.status}</p>
                                </div>

                                <button
                                    className="delete-task"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteTask(task._id);
                                    }}
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))
                    )}
                </div>
                {showTaskModal && (
                    <TaskModal
                        task={selectedTask}
                        onClose={() => setShowTaskModal(false)}
                        onSave={handleSaveTask}
                    />
                )}
            </div>

        </div>
    );
}

export default ProjectDetails;