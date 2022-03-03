import Paginacion from "../components/Paginacion.Components"
import Footer2 from "../components/Footer2.Components"
import LogoAdministrador from "../components/LogoAdmin.Component"
import Link from 'next/link'

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
                        <p className="text-center fs-1 fw-bold form mt-2">S/. 3.75</p>
                        <div className="mt-2">
                        <Link href="/EditarTipoCambio">
        <a>CAMBIAR</a>
      </Link>
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