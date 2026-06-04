import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

function ProjectCard({ project, onEdit, onDelete }) {
    return (
        <div className="card-body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-btns">
                <button
                    id="edit"
                    onClick={() => onEdit(project)}
                >
                    Edit <FaEdit />
                </button>

                <button
                    id="delete"
                    onClick={() => onDelete(project._id)}
                >
                    Delete <FaTrash />
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;