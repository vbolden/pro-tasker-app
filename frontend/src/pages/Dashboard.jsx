import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useEffect, useState } from 'react';
import API from '../api/axios';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [projects, setProjects] = useState([]);
    const [projectCount, setProjectCount] = useState(0);
    const [tasks, setTasks] = useState([]);

    const [taskStats, setTaskStats] = useState({
        total: 0,
        done: 0
    });

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const projectRes = await API.get("/api/projects");

            const allProjects = projectRes.data;

            setProjectCount(allProjects.length);

            const recentProjects = [...allProjects]
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 2);

            setProjects(recentProjects);

            const taskRequests = projectRes.data.map(project =>
                API.get(`/api/projects/${project._id}/tasks`)
            );

            const taskResponses = await Promise.all(taskRequests);

            const allTasks = taskResponses.flatMap(
                response => response.data
            );

            const total = allTasks.length;

            const done = allTasks.filter(
                task => task.status === "Done"
            ).length;

            setTaskStats({ total, done });
            setTasks(allTasks);
        } catch (error) {
            console.error(error);
        }
    };

    const percentage = taskStats.total === 0 ? 0 : Math.round((taskStats.done / taskStats.total) * 100);

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
                                        <Link to={`/dashboard/projects/${project._id}`}>View Project</Link>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="tasks">
                        <p>Recent Tasks</p>
                        <div className="task-wrapper">
                            {tasks.length === 0 ? (
                                <span>No Tasks Yet</span>
                            ) : (
                                tasks.slice(0, 5).map((task) => (
                                    <div key={task._id} className="task-card">
                                        <h5>{task.title}</h5>
                                        <p>{task.description}</p>
                                        <Link to={`/dashboard/projects/${task.project}`}>View</Link>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <div className="dash-right">
                    <div id="project-stats">
                        <p>Project Count</p>
                        <span className='big-number'>{projectCount}</span>
                    </div>
                    <div id="tasks-done">
                        <p>Tasks Done</p>
                        <span>{taskStats.done}/{taskStats.total}</span>
                        <div className='progress'>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        </div>
                    </div>
                    <div id="stats">
                        <p>On Track</p>
                        <div className='progress'>
                            <CircularProgressbar value={0} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;