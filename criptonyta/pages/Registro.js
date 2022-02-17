import Encabezado from "../components/Encabezado.Components"
import Cuenta from "../components/CuentaR.Components"
import Icono from "../components/Icono.Components"
import Footer2 from "../components/Footer2.Components"
import RegistroPrincipal from "../components/RegistroPrincipal.component"

export default function Registro() {
    return <div >
        <div >
            <h1>Crypto-Nita</h1>
            <Encabezado />

            <div className="row mt-4">
                <div className="col-2"><Cuenta /></div>
                <div className="col-6"><Icono /></div>
                <div className="col-4"><RegistroPrincipal /></div>

            </div>
            <Footer2 />
        </div>
        <div className="mt-4">
            <p className="text-center fs-6 fw-light">
                Sitio protegido por reCAPTCHA, aplican las <a className="link-primary" href="https://policies.google.com/privacy">Políticas
                de Privacidad</a> y <a className="link-primary" href="https://policies.google.com/terms">Términos de Servicio</a> de Google.
            </p>
        </div>
    </div>
}