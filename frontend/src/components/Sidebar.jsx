import { NavLink } from "react-router-dom";
import { CiGrid31, CiGrid41, CiCalendar } from 'react-icons/ci';
import { IoIosCheckboxOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

function Sidebar({ menuOpen }) {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <aside className={`sidebar ${menuOpen ? "active" : ""}`}>
            <h2>ProTasker</h2>
            <div className="sidebar-header">
                <div className="circle">{user?.username.charAt(0)}</div>
                <div className="user-details">
                    <p>{user?.username.toUpperCase()}</p>
                    <span>Product Lead</span>
                </div>
            </div>
            <hr />
            <div className="navbar">
                <ul>
                    <li>
                        <NavLink to="/dashboard" end className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }>
                            <CiGrid31 /> Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/projects" className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }>
                            <CiGrid41 /> All Projects
                        </NavLink>
                    </li>
                    <li><NavLink to="/dashboard/mytasks"> <IoIosCheckboxOutline /> My Tasks</NavLink></li>
                    <li><NavLink to="/dashboard/schedule"> <CiCalendar /> Schedule</NavLink></li>
                    <li><NavLink to="/dashboard/messages"> <AiOutlineMessage /> Messages</NavLink></li>
                    <li><NavLink to="/dashboard/settings"> <IoSettingsOutline /> Settings</NavLink></li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;