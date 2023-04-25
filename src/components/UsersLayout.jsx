import { Navigate, Outlet, Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function UsersLayout() {
    const {user, token} = useStateContext();

    if(!token){
        return <Navigate to="/login" />
    }

    const onLogout = (ev) => {
        ev.prventDefault()
    }

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/">Algo voy a poner aca</Link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        {user.name}
                        <a className="btn-logout" href="#" onClick={onLogout}>Logout</a>
                    </div>
                </header>
                 <main>
                    <Outlet /> 
                </main>
            </div>
        </div>
    );
}