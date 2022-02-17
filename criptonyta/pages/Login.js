import Encabezado from "../components/Encabezado.Components"
import Cuenta from "../components/Cuenta.Components"
import Icono from "../components/Icono.Components"
import LoginPrincipal from "../components/LoginPrincipal.Components"
import Footer2 from "../components/Footer2.Components"
import { useState } from "react"

export default function Login() {

    const [errorLogin, setErrorLogin] = useState(false)

    const loginHandler = (username, password) => {
        if (username == "user1" && password == "user1pass") {
            location.href = "/main"
        } else {
            console.log("Error en login")
            setErrorLogin(true)
        }
    }

    return <div >
        <div >
            <h1>Crypto-Nyta</h1>
            <Encabezado />

            <div className="row mt-4">
                <div className="col-2"><Cuenta /></div>
                <div className="col-6"><Icono /></div>
                <div className="col-4"><LoginPrincipal onLogin={loginHandler} error={errorLogin} /></div>
            </div>
            <Footer2 />
        </div>
        <div className="mt-4">
            <p className="text-center fs-6 fw-light">Sitio protegido por reCAPTCHA, aplican las <a className="link-primary" href="https://policies.google.com/privacy">Politicas de Privacidad</a> y <a className="link-primary" href="https://policies.google.com/terms">Terminos de Servicio</a> de Google.</p>
        </div>
    </div>


}