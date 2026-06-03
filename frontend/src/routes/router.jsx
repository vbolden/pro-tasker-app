import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Auth from "../pages/Auth";

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
            }
        ]
    }
]);

export default router;