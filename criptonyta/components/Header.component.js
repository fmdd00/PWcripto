const Header = () => {
    return <div>
        <div className="row mt-4">
            <div className="col-md-8">
            <h1>Grupo 5</h1>

            </div>
            <div className="col-6 col-md-4 mt-4">

                <a className="mt-4 me-4 butRegistro" href="/Registro">Abrir Cuenta</a>
                <a className="btn btn-success butIniciarSesion" href="/Login">Iniciar Sesión</a>
            </div>
        </div>
    </div>
}
export default Header
