import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useEffect, useState } from 'react';
import API from '../api/axios';

function Dashboard() {
    const [projects, setProjects] = useState([]);
    const [projectCount, setProjectCount] = useState(0);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await API.get("/api/projects");

            // KEEP 2 MOST RECENT
            setProjects(res.data.slice(-2));

            setProjectCount(res.data.length)
        } catch (error) {
            console.error(error);
            
        }
    };

    return (
        <div className='dashboard'>
            <div className="dash-wrapper">
                <div className="dash-left">
                    <div className="schedule">
                        <p>Upcoming Schedule</p>
                        <div className="schedule-content">
                            <div className="calendar">
                                <Calendar />
                            </div>
                            <div className="upcoming-events">
                                <div className="event-card">
                                    <h4>Project Review</h4>
                                    <span>2:00 PM</span>
                                </div>
                                <div className="event-card">
                                    <h4>Sprint Planning</h4>
                                    <span>4:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='projects'>
                        <p>Recent Projects</p>
                        <div className="projects-wrapper">
                            {projects.length === 0 ? (
                                <span>No Projects Yet</span>
                            ) : (
                                projects.map((project) => (
                                    <div key={project._id} className="project-card">
                                        <h4>{project.title}</h4>
                                        <p>{project.description}</p>
                                        <a href={`/dashboard/projects/${project._id}`}>View Project</a>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="tasks">
                        <p>Recent Tasks</p>
                    </div>
                </div>
                <div className="dash-right">
                    <div id="project-stats">
                        <p>Project Count</p>
                        <span className='big-number'>{projectCount}</span>
                    </div>
                    <div id="tasks-done">
                        <p>Tasks Done</p>
                        <span>10/20</span>
                        <div className='progress'>
                            <CircularProgressbar value={50} />
                        </div>
                    </div>
                    <div id="stats">
                        <p>On Track</p>
                        <div className='progress'>
                            <CircularProgressbar value={90} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;