import { FaTrash, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ project, onEdit, onDelete }) {
    const navigate = useNavigate();

    return (
        <div className="card-body" onClick={() => navigate(`/dashboard/projects/${project._id}`)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-btns">
                <button
                    id="edit"
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit(project);
                    }}
                >
                    Edit <FaEdit />
                </button>

                <button
                    id="delete"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(project._id)
                    }}
                >
                    Delete <FaTrash />
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;