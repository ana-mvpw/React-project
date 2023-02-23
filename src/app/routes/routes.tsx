import { createBrowserRouter } from "react-router-dom";
import Layout from "../../pages/Layout";
import UserList from "../../pages/UserList";
import WelcomePage from "../../pages/WelcomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "/welcome",
                element: <WelcomePage />,
            },
            {
                path: "/list",
                element: <UserList />,
            },
        ]
    }, 

])

export default router;