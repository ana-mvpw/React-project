import { createBrowserRouter } from "react-router-dom";
import UserList from "../../pages/UserList";
import WelcomePage from "../../pages/WelcomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WelcomePage />,
    },
    {
        path: "/list",
        element: <UserList />,
    },

])

export default router;