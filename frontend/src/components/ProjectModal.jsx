import { useState } from "react";

function ProjectModal({ project, onClose }) {
    const [title, setTitle] = useState(project?.title || '');
    const [description, setDescription] = useState(
        project?.description || ''
    );

    const handleSubmit = (e) => {
        e.preventdefault();

        if (project) {
            console.log('Update Project');
        } else {
            console.log('Create Project');
        }

        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>
                    {project ? 'Edit Project' : 'Create Project'}
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Project Name"
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                        />
                    </div>

                    <div className="modal-btns">
                        <button
                            className="cancel-btn"
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            {project
                                ? "Save Changes"
                                : "Create Project"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProjectModal;