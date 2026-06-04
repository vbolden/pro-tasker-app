import { useEffect, useState } from "react";

function TaskModal({ task, onClose, onSave }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState("To Do");

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setStatus(task.status);
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const taskData = {
            title,
            description,
            status
        };

        onSave(taskData);
        onClose();
    };

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()}
            >
                <h2>
                    {task ? "Edit Task" : "Create Task"}
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter task title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            placeholder="Enter Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>

                    <div className="modal-btns">
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            {task ? "Save Changes" : "Create Task"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskModal;