
import Paginacion from "../components/Paginacion.Components"
import Footer2 from "../components/Footer2.Components"
import LogoAdministrador from "../components/LogoAdmin.Component"

export default function EditarTipoCambio() {
    return <div >
        <LogoAdministrador />

        <Paginacion />

        <div className="col-6">
            <div className="mt-4 col">
                <h2 >BTC-PEN</h2>
                <div className="col-auto">
                    <input className="form-control form-control-lg" type="text" placeholder="X X 1" aria-label=".form-control-lg example" />
                </div>
            </div>

            <div className="mt-2 col">
                <h2 >PEN-BTC</h2>
                <input className="form-control form-control-lg" type="text" placeholder="X X 2" aria-label=".form-control-lg example" />
            </div>

        </div>
        <button className="mt-4 btn btn-primary btn-5" type="submit">Cambiar</button>

        <Footer2 />
    </div>

}