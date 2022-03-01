import Footer2 from "../components/Footer2.Components"
import LoginAdministrador from "../components/LoginAdministrador.Component"


const LoginAdmin = () =>{
    return <div >
        <div  >
            <h1>Crypto-Nita</h1>
            
            <div className="row mt-4">
            <div className="col">
            <img className="ratio ratio-7x9 IconoUser " src="https://i.pinimg.com/736x/d2/97/a3/d297a3eced48990f8001c8624ec84145.jpg" />
            
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