import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

const LoginPrincipal = (props) => {

    const [txtUsername, setTxtUsername] = useState("")
    const [txtPassword, setTxtPassword] = useState("")

    const onChange = () => {
        console.log('Hubo un cambio')
    }

    const txtUsernameOnChange = (event) => {
        const txtUsernameIngresado = event.target.value
        setTxtUsername(txtUsernameIngresado)
    }

    const txtPasswordOnChange = (event) => {
        setTxtPassword(event.target.value)
    }

    const butLoginOnClick = () => {
        // Se va a ejecutar la funcion que se paso por el props (onLogin)
        props.onLogin(txtUsername, txtPassword)
    }

    return <aside >
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Inicio de Sesión</h3>
                <form>
                    <div className="mt-4">
                        <input id="txt_username" type="text" className="form-control"
                            defaultValue={txtUsername} onChange={txtUsernameOnChange} placeholder="Usuario o correo electónico" />
                    </div>
                    <div className="mt-2">
                        <input id="txt_password" type="password" className="form-control"
                            defaultValue={txtPassword} onChange={txtPasswordOnChange} placeholder="Contraseña" />
                    </div>
                    <div className="recaptcha mt-4 mb-4">
                        <ReCAPTCHA
                            sitekey="6LfghIMeAAAAAIFAvBEOxKVvcrc8ud8Th1okwNxZ"
                            onChange={onChange}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-2">
                        <button id="butLogin" className="btn btn-primary" type="button"
                            onClick={butLoginOnClick}>Ingresar</button>
                    </div>
                    <div className="mt-2 text-center">
                        <a href="#"> Olvidé mi contraseña</a>
                    </div>
                </form>

                {
                    (() => {
                        if (props.error) {
                            return <div className="alert alert-danger mt-2">Error en login</div>
                        }
                    })()
                }
            </div>
        </div>
    </aside>
}

export default LoginPrincipal