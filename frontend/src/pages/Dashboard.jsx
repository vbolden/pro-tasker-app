function Dashboard () {
    return (
        <div className="dash-wrapper">
            <div className="dash-left">
                <div className="schedule">
                    <p>Upcoming Schedule</p>
                </div>
                <div className="projects">
                    <p>Recent Projects</p>
                </div>
                <div className="tasks">
                    <p>Recent Tasks</p>
                </div>
            </div>
            <div className="dash-right"></div>
        </div>
    )
}

export default Dashboard;