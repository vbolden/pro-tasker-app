import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

function ProjectCard() {
    return (
        <div className="card-body">
            <h3>Finish MERN Project</h3>
            <p>Create a full stack app that allows user to...</p>
            <div className="project-btns">
                <button id="edit">Edit <FaEdit /></button>
                <button id="delete">Delete <FaTrash /></button>
            </div>
        </div>
    );
}

export default ProjectCard;