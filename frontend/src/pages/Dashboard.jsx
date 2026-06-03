function Dashboard () {
    return (
        <div className="main-wrapper">
            <div className="main-left">
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
            <div className="main-right"></div>
        </div>
    )
}

export default Dashboard;