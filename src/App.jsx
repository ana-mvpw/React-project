import {
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import router from "./app/routes/routes"
  
export default function App() {
return (
<>

<RouterProvider router={router} />
</>
);
}
