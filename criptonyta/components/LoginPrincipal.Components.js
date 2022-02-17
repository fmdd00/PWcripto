const LoginPrincipal=()=>{
    return<aside >
    <div className="card">
        <div className="card-body">
            <h3>Inicio de Sesión</h3>
            <form>
                <div className="mt-2">
                    <input id="txt_username" type="text" className="form-control" placeholder="Dirección de correo..." />
                </div>
                <div className="mt-2">
                    <input id="txt_password" type="password" className="form-control" placeholder="Contraseña..." />
                </div>
                <div className="d-grid gap-2 mt-2">
                    <button id="butLogin" className="btn btn-primary" type="button">Ingresar</button>
                </div>
                <div className="mt-2 text-center">
                    <a href="#"> Olvidé mi contraseña</a>
                </div>
            </form>
                  
        </div>
    </div>
</aside>
}

export default LoginPrincipal