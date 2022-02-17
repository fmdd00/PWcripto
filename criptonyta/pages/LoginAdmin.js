import Footer2 from "../components/Footer2.Components"
import LoginAdministrador from "../components/LoginAdministrador.Component"


const LoginAdmin = () =>{
    return <div >
        <div >
            <h1>Crypto-Nita</h1>
            <div>

            </div>
            <div className="row mt-4">
                <div className="col">
                    <div className="mb-2">Escojer administrador:</div>
                    <input className="form-control" placeholder="Nuevo administrador"></input>
                </div>
                <div className="col"> <LoginAdministrador/></div>
                <div className="col"></div>
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
export default LoginAdmin