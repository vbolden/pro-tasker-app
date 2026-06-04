import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <div>
            <div className="projects-top">
                <h2>My Projects</h2>
                <button id="new-project">+ New Project</button>
            </div>
            <div className="project-grid">
                <ProjectCard />
            </div>
        </div>
    );
}

export default Projects;