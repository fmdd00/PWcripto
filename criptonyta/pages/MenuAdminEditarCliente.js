import Encabezado from "../components/Encabezado.Components"
import Footer2 from "../components/Footer2.Components"
import LogoAdministrador from "../components/LogoAdmin.Component"

export default function menuEditarCliente() {
    return <div className="container">

        <LogoAdministrador />
        <Encabezado />
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="mx-auto mt-2">
                        <h3>Editar Cliente</h3>
                    </div>
                    <div className="mt-2">
                        <nav className="navbar navbar-light bg-light">
                            <div className="container-fluid">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Filtrar por cliente" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                                </form>
                            </div>
                        </nav>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>ID</th>
                                    <th>DNI</th>
                                    <th>Correo electónico</th>
                                    <th>Telefono</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>NOMBRE1,NOMBRE2,APELLIDO1,APELLIDO2</td>
                                    <td>16161561</td>
                                    <td>71406823</td>
                                    <td>CLIENTE@CLIENTE.COM</td>
                                    <td>013461323</td>
                                    <td>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Estado
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item active" href="#">Pendiente</a></li>
                                                <li><a className="dropdown-item" href="#">Validado</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>NOMBRE1,NOMBRE2,APELLIDO1,APELLIDO2</td>
                                    <td>24512515</td>
                                    <td>42561232</td>
                                    <td>CLIENTE@CLIENTE.COM</td>
                                    <td>018646323</td>
                                    <td>
                                    <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Estado
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item active" href="#">Pendiente</a></li>
                                                <li><a className="dropdown-item" href="#">Validado</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>NOMBRE1,NOMBRE2,APELLIDO1,APELLIDO2</td>
                                    <td>34587654</td>
                                    <td>64571522</td>
                                    <td>CLIENTE@CLIENTE.COM</td>
                                    <td>017661323</td>
                                    <td>
                                    <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Estado
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item active" href="#">Pendiente</a></li>
                                                <li><a className="dropdown-item" href="#">Validado</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>NOMBRE1,NOMBRE2,APELLIDO1,APELLIDO2</td>
                                    <td>87643452</td>
                                    <td>33512144</td>
                                    <td>CLIENTE@CLIENTE.COM</td>
                                    <td>016741323</td>
                                    <td>
                                    <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Estado
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item active" href="#">Pendiente</a></li>
                                                <li><a className="dropdown-item" href="#">Validado</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>NOMBRE1,NOMBRE2,APELLIDO1,APELLIDO2</td>
                                    <td>95463425</td>
                                    <td>93412313</td>
                                    <td>CLIENTE@CLIENTE.COM</td>
                                    <td>012161323</td>
                                    <td>
                                    <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Estado
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item active" href="#">Pendiente</a></li>
                                                <li><a className="dropdown-item" href="#">Validado</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-center d-grid gap-2 col-4 mx-auto">
                            <button className="btn btn-primary">Cambiar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer2 />
    </div>
}