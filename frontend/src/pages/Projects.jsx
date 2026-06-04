import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

function Projects() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCreate = () => {
        setSelectedProject(null);
        setShowModal(true);
    };

    const handleEdit = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    return (
        <div className="projects-container">
            <div className="projects-top">
                <h2>My Projects</h2>
                <button id="new-project" onClick={handleCreate}>+ New Project</button>
            </div>
            <div className="project-grid">
                <ProjectCard
                    project={{
                        id: 1,
                        title: "Finish MERN Project",
                        description: 'Create a full stack app that allows user to...'
                    }}
                    onEdit={handleEdit}
                />
            </div>
            {showModal && (
                <ProjectModal 
                    project={selectedProject}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}

export default Projects;