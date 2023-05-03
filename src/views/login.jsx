import { useRef,useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axiosClient";


export default function Login() {
    const rutRef = useRef();
    const passwordRef = useRef();
    const { setUser, setToken } = useStateContext()
    const [message, setMessage] = useState(null)

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            rut: rutRef.current.value,
            password: passwordRef.current.value,
            userType: "administrador",
        }
        console.log(payload);
        axiosClient.post('/login', payload)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token);
        }).catch((err) => {
            const response = err.response;
            if (response && response.status === 422) {
                setMessage(response.data.message)
            }
        }) 
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Iniciar sesion en tu cuenta</h1>
                    {message &&
                        <div className="alert">
                            <p>{message}</p>
                        </div>
                    }
                    <input ref={rutRef} type="text" placeholder="Rut" />
                    <input ref={passwordRef} type="password" placeholder="Contraseña" />
                    <button className="btn btn-block">LogIn</button>    
                </form>
            </div>
        </div>
    );
}