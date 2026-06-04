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
        <div className="modal-overlay">
            <div className="modal">
                <h2>
                    {project
                        ? 'Edit Project'
                        : 'Create Project'}
                </h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Project Name"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                    />

                    <textarea 
                        placeholder="Description" 
                        value={description}
                        onChange={(e) => 
                            setDescription(e.target.value)
                        }
                    ></textarea>

                    <div className="modal-btns">
                        <button
                        type="button" 
                        onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button type="submit">
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