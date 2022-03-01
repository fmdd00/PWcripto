import Paginacion from "../components/Paginacion.Components"
import Footer2 from "../components/Footer2.Components"
import LogoAdministrador from "../components/LogoAdmin.Component"


const MenuAdminTipoCambio = () => {
    return <div className="container">
        <LogoAdministrador />
        <Paginacion/>
        <div className="row">
            <div className="col-4"> 
            </div>
            <div className="col-4">
                <div className="card mt-4">
                    <div className="card-body mx-auto">
                        <h3>Tipo de cambio</h3>
                        <input className="form mt-2" defaultValue="3.75"></input>
                        <div className="mt-2">
                            <a className="btn btn-primary container-fluid"> CAMBIAR </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="mt-5">
        <Footer2 />
        </div>

        
    </div>
}

export default MenuAdminTipoCambio