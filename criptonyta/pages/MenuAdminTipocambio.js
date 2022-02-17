import Footer2 from "../components/Footer2.Components"
import LogoAdministrador from "../components/LogoAdmin.Component"
import NavegacionAdmin from "../components/NavAdmin.Component"

const MenuAdminTipoCambio = () => {
    return <div className="container">
        <LogoAdministrador />
        <NavegacionAdmin />
        <div className="row">
            <div className="col-4">
            </div>
            <div className="col-4">
                <div className="card">
                    <div className="card-body mx-auto">
                        <h3>Tipo de cambio</h3>
                        <input className="form mt-2" value="3.75"></input>
                        <div className="mt-2">
                            <a className="btn btn-primary container-fluid"> CAMBIAR </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <Footer2 />
    </div>
}

export default MenuAdminTipoCambio