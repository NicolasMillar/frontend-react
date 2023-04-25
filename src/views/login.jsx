export default function Login() {

    const onSubmit = (ev) => {
        ev.prventDefault()
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Iniciar sesion en tu cuenta</h1>
                    <input type="text" placeholder="Rut" />
                    <input type="password" placeholder="Contraseña" />
                    <button className="btn btn-block">LogIn</button>    
                </form>
            </div>
        </div>
    );
}