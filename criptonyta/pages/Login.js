import Encabezado from "../components/Encabezado.Components"
import Cuenta from "../components/Cuenta.Components"
import Icono from "../components/Icono.Components"
import LoginPrincipal from "../components/LoginPrincipal.Components"
import Footer2 from "../components/Footer2.Components"
export default function Login() {
    return <div >
        <div >
            <h1>Crypto-Nyta</h1>
            <Encabezado />

            <div className="row mt-4">
                <div className="col-2"><Cuenta /></div>
                <div className="col-6"><Icono /></div>
                <div className="col-4"><LoginPrincipal /></div>

            </div>

            <Footer2/>


        </div>
    </div>

}