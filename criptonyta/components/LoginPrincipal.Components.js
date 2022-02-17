const LoginPrincipal=()=>{
    return<aside >
    <div className="card">
        <div className="card-body">
            <h3>Inicio de Sesión</h3>
            <form>
                <div>
                    <label htmlFor="txt_username" className="form-label">Correo Electrónico</label>
                    <input id="txt_username" type="text" className="form-control" placeholder="Dirección de correo..." />
                </div>
                <div className="mb-2">
                    <label htmlFor="txt_password" className="form-label">Contraseña</label>
                    <input id="txt_password" type="password" className="form-control" placeholder="Contraseña..." />
                </div>
                <button id="butLogin" className="btn btn-primary me-4" type="button">Ingresar</button>
                <a href="#"> Olvidé mi contraseña</a>
            </form>
                  
        </div>
    </div>
</aside>
}

export default LoginPrincipal