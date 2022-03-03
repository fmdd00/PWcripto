import Footer2 from "../components/Footer2.Components"
import LogoAdministrador from "../components/LogoAdmin.Component"
import NavegacionAdmin from "../components/NavAdmin.Component"

const MenuAdminClientes = () => {
    return <div className="container">
        <LogoAdministrador />
        <NavegacionAdmin />
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="mx-auto">
                        <h3>Lista de Clientes</h3>
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>NOMBRE1,NOMBRE2,APELLIDO1,APELLIDO2</td>
                                    <td>16161561</td>
                                    <td>71406823</td>
                                    <td>CLIENTE@CLIENTE.COM</td>
                                    <td>013461323</td>
                                </tr>
                                <tr>
                                    <td>NOMBRE1,NOMBRE2,APELLIDO1,APELLIDO2</td>
                                    <td>24512515</td>
                                    <td>42561232</td>
                                    <td>CLIENTE@CLIENTE.COM</td>
                                    <td>018646323</td>
                                </tr>
                                <tr>
                                    <td>NOMBRE1,NOMBRE2,APELLIDO1,APELLIDO2</td>
                                    <td>34587654</td>
                                    <td>64571522</td>
                                    <td>CLIENTE@CLIENTE.COM</td>
                                    <td>017661323</td>
                                </tr>
                                <tr>
                                    <td>NOMBRE1,NOMBRE2,APELLIDO1,APELLIDO2</td>
                                    <td>87643452</td>
                                    <td>33512144</td>
                                    <td>CLIENTE@CLIENTE.COM</td>
                                    <td>016741323</td>
                                </tr>
                                <tr>
                                    <td>NOMBRE1,NOMBRE2,APELLIDO1,APELLIDO2</td>
                                    <td>95463425</td>
                                    <td>93412313</td>
                                    <td>CLIENTE@CLIENTE.COM</td>
                                    <td>012161323</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>

        <Footer2 />
    </div>
}

export default MenuAdminClientes