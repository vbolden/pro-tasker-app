import { useState, useEffect } from "react";
import API from "../api/axios";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await API.get("/api/projects");

                setProjects(res.data);
            } catch (error) {
                console.error("Failed to load projects:", error);
            } finally {
                setLoading(false);
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
        const confirmed = window.confirm('Delete this project?');
        if (!confirmed) return;

        try {
            await API.delete(`/api/projects/${id}`);

            setProjects((prev) =>
                prev.filter((project) => project._id !== id));
        } catch (error) {
            console.error("Delete failed:", error);
        }
    };

    const handleSaveProject = async (projectData) => {
        try {
            if (selectedProject) {
                // UPDATE
                const res = await API.put(
                    `/api/projects/${selectedProject._id}`,
                    projectData
                );

                setProjects((prev) =>
                    prev.map((p) =>
                        p._id === selectedProject._id ? res.data : p
                    )
                );
            } else {
                console.log("Creating project:", projectData);
                // CREATE
                const res = await API.post("/api/projects", projectData);
                console.log("Create response:", res.data);
                setProjects((prev) => [...prev, res.data]);
            }

            setShowModal(false);
            setSelectedProject(null);
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
                {loading ? (
                    <div className="loader-wrapper">
                        <div className="loader"></div>
                    </div>
                ) : projects.length === 0 ? (
                    <div className="empty-state">
                        <h3>No projects yet</h3>
                        <p>Create your first project to get started.</p>
                    </div>
                ) : (
                    projects.map((project) => (
                        <ProjectCard
                            key={project._id}
                            project={project}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))
                )}
            </div>
            {showModal && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setShowModal(false)}
                    onSave={handleSaveProject}
                />
            )}
        </div>
    );
}

export default Projects;