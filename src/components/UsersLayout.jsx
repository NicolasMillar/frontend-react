import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function UsersLayout() {
    const {user, token} = useStateContext();

    if(!token){
        return <Navigate to="/login" />
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}