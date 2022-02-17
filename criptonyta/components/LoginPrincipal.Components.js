import { useState } from "react"

const LoginPrincipal = (props) => {

    const [txtUsername, setTxtUsername] = useState("")
    const [txtPassword, setTxtPassword] = useState("")

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
                <h3>Iniciar Sesión</h3>
                <form>
                    <div>
                        
                        <input id="txt_username" type="text" className="form-control" placeholder="Usuario"
                            defaultValue={txtUsername} onChange={txtUsernameOnChange} />
                    </div>
                    <div className="mt-2">
                        
                        <input id="txt_password" type="password" className="form-control" placeholder="Contraseña"
                            defaultValue={txtPassword} onChange={txtPasswordOnChange} />
                    </div>
                    <div className="d-grid gap-2 mt-2">
                        <button id="butLogin" className="btn btn-primary" type="button"
                            onClick={butLoginOnClick} >Ingresar</button>
                    </div>
                    <div className="mt-2">
                        <a href="#">Quiero registrarme</a>
                    </div>
                    <div className="mt-2">
                        <a href="#">Olvidé mi contraseña</a>
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