function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>ProTasker</h2>
            <div className="circle"></div>
            <div className="user-details">
                <p>User's Name</p>
                <p>Product Lead</p>
            </div>
            <div className="navbar">
                <ul>
                    <li>Dashboard</li>
                    <li>My Projects</li>
                    <li>My Tasks</li>
                    <li>Schedule</li>
                    <li>Messages</li>
                    <li>Settings</li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;