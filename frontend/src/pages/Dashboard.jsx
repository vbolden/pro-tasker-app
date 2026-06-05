import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CircularProgressbar } from 'react-circular-progressbar';

function Dashboard() {
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
                    <div className="projects">
                        <p>Recent Projects</p>
                    </div>
                    <div className="tasks">
                        <p>Recent Tasks</p>
                    </div>
                </div>
                <div className="dash-right">
                    <div id="project-stats">
                        <p>Project Count</p>
                        <span className='big-number'>0</span>
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