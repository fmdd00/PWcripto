import Link from 'next/link'
const Header = () => {
    return <div>
        <div className="row mt-4">
            <div className="col-md-8">
            <h1>Grupo 5</h1>

            </div>
            <div className="col-6 col-md-4 mt-4">
            <Link href="/Registro">
        <a className="mt-4 me-4 butRegistro">Abrir Cuenta</a>
      </Link>

            

                <div className="dropdown mt-2">
                    <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Iniciar Sesión
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <Link href="/Login">
                    <li><a className="dropdown-item">Soy un usuario</a></li>
      </Link>
                        
                        <Link href="/LoginAdmin">
                        <li><a className="dropdown-item">Soy un admin</a></li>
      </Link>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
export default Header
