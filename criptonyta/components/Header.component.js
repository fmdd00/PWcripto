const Header = () => {
    return <div>
        <div className="row mt-4">
            <div className="col-md-8">
            <h1>Grupo 5</h1>

            </div>
            <div className="col-6 col-md-4 mt-4">

                <a className="mt-4 me-4 butRegistro" href="/Registro">Abrir Cuenta</a>

                <div className="dropdown mt-2">
                    <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Iniciar Sesión
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="/Login">Soy un usuario</a></li>
                        <li><a className="dropdown-item" href="/LoginAdmin">Soy un admin</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
export default Header
