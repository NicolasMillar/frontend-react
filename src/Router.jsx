import { createBrowserRouter } from "react-router-dom";
import Login from "./views/login";
import Users from "./views/User";
import Home from "./views/Home";
import HomeLayout from "./components/HomeLayout";
import NotFound from "./views/NotFound";
import LoginLayout from "./components/LoginLayout";
import UsersLayout from "./components/UsersLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
        ]
    },
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
        ]
    },
    {
        path: '/',
        element: <UsersLayout />,
        children: [
            {
                path: '/users',
                element: <Users />
            },
        ]
    },
    
    {
        path: '*',
        element: <NotFound />   
    },
])

export default router;