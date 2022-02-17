import Encabezado from "../components/Encabezado.Components"
import Cuenta from "../components/Cuenta.Components"
import Icono from "../components/Icono.Components"
import LoginPrincipal from "../components/LoginPrincipal.Components"
import { useState } from "react"

export default function Login() {

    const [errorLogin, setErrorLogin] = useState(false)

    const loginHandler = (username,password) =>{
        if (username == "user1" && password == "user1pass"){
            location.href = "#"
        }else{
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
                <div className="col-5"><Icono /></div>
                <div className="col-5"><LoginPrincipal onLogin={ loginHandler } error={ errorLogin } /></div>
            </div>
        </div>
    </div>

}