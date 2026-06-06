import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import Auth from "../pages/Auth";
import ComingSoon from "../pages/InProgress";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth />
    },
    {
        path: "/dashboard",
        element: <App />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "projects",
                element: <Projects />
            },
            {
                path: "projects/:id",
                element: <ProjectDetails />
            },
            {
                path: "mytasks",
                element: <ComingSoon title={"My Tasks"} />
            },
            {
                path: "schedule",
                element: <ComingSoon title={"Schedule"} />
            },
            {
                path: "messages",
                element: <ComingSoon title={"Messages"} />
            },
            {
                path: "settings",
                element: <ComingSoon title={"Settings"} />
            },
        ]
    }
]);

export default router;