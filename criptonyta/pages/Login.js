import Encabezado from "../components/Encabezado.Components"
import Cuenta from "../components/Cuenta.Components"
import Icono from "../components/Icono.Components"
import LoginPrincipal from "../components/LoginPrincipal.Components"
export default function Login() {
    return <div >
        <div >
            <h1>Crypto-Nyta</h1>
            <Encabezado />

            <div className="row mt-4">
                <div className="col-2"><Cuenta /></div>
                <div className="col-5"><Icono /></div>
                <div className="col-5"><LoginPrincipal /></div>

            </div>


        </div>
    </div>

}