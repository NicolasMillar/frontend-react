import { createBrowserRouter } from "react-router-dom";
import Login from "./views/login";
import Users from "./views/User";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/users',
        element: <Users />
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <NotFound />   
    },
])

export default router;