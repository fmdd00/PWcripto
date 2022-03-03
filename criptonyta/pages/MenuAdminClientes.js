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
                </div>
            </div>
        </div>

        <Footer2 />
    </div>
}

export default MenuAdminClientes