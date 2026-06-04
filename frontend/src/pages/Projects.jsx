import { useState, useEffect } from "react";
import API from "../api/axios";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await API.get("/projects");

                setProjects(res.data);
            } catch (error) {
                console.error("Failed to load projects:", error);
            }
        };
        fetchProjects();
    }, []);

    const handleCreate = () => {
        setSelectedProject(null);
        setShowModal(true);
    };

    const handleEdit = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            'Delete this project?'
        );

        if (!confirmed) return;

        try {
            await projectService.deleteProject(id);

            setProjects((prev) =>
                prev.filter((project) => project._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="projects-container">
            <div className="projects-top">
                <h2>My Projects</h2>
                <button id="new-project" onClick={handleCreate}>+ New Project</button>
            </div>
            <div className="project-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project._id}
                        project={project}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
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