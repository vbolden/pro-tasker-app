import { Link } from "react-router-dom";

function Sidebar({menuOpen}) {
    return (
        <aside className={`sidebar ${menuOpen ? "active" : ""}`}>
            <h2>ProTasker</h2>
            <div className="sidebar-header">
                <div className="circle"></div>
                <div className="user-details">
                    <p>User's Name</p>
                    <span>Product Lead</span>
                </div>
            </div>
            <hr />
            <div className="navbar">
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="projects">All Projects</Link></li>
                    <li><a href="#">My Tasks</a></li>
                    <li><a href="#">Schedule</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;