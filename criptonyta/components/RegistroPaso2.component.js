import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from "react"

export default function FormatoRegistroPaso2(props) {

    // Variables internas (variables de estado) del componente
    const [txtCorreo, setTxtCorreo] = useState("")
    const [txtPassword, setTxtPassword] = useState("")
    const [txtRepPassword, setTxtRepPassword] = useState("")
    const [txtTelefono, setTxtTelefono] = useState("")

    const txtCorreoOnChange = (event) => {
        const txtCorreoIngresado = event.target.value
        setTxtCorreo(txtCorreoIngresado)
        console.log(txtCorreoIngresado)
    }

    const txtPasswordOnChange = (event) => {
        setTxtPassword(event.target.value)
    }

    const txtRepPasswordOnChange = (event) => {
       setTxtRepPassword(event.target.value)
   }
   const txtTelefonoOnChange = (event) => {
    setTxtTelefono(event.target.value)
}

    const butFinalizarOnClick = () => {
        // Se va a ejecutar la funcion que se paso por el props (onSiguiente)
        props.onFinalizar(txtCorreo, txtPassword,  txtRepPassword, txtTelefono)
    }

    const router = useRouter()

    return <aside >
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Paso 2 de 2</h3>
                <form>
                    <div className="mt-4 input-group">
                        <input id="txt_correo" type="text" className="form-control" placeholder="Dirección de correo" 
                        defaultValue={txtCorreo} onChange={txtCorreoOnChange}/>
                    </div>
                    <div className="mt-2">
                        <input id="txt_password" type="password" className="form-control" placeholder="Contraseña" 
                        defaultValue={txtPassword} onChange={txtPasswordOnChange}/>
                    </div>
                    <div className="mt-2">
                        <input id="txt_RepPassword" type="password" className="form-control" placeholder="Repite la contraseña" 
                        defaultValue={txtRepPassword} onChange={txtRepPasswordOnChange}/>
                    </div>
                    <div className="mt-2 input-group">
                        <span className="input-group-text" id="cod_pe">+ 51</span>
                        <input id="txt_telefono" type="number" className="form-control" placeholder="Número telefónico" 
                        defaultValue={txtTelefono} onChange={txtTelefonoOnChange}/>
                    </div>
                    <div className="form-check mt-4">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                <p> Acepto los 
                                <Link href="/TerminosCondiciones">
        <a className="link-primary">Términos y Condiciones</a>
      </Link>
                                    
                                    
                                    
                                     de Crypto-Nita 
                                    y la 
                                    
                                    
                                    <a className="link-primary" href="https://policies.google.com/terms">Política de privacidad</a>
                                    
                                     de Google y autorizo el tratamiento 
                                    de mis datos personales de conformidad con la Política de Privacidad.</p>
                            </label>
                    </div>
                    <div className="d-grid gap-2 mt-2">

                    <Link href="/main">
        <a id="butLogin" className="btn btn-primary" type="button" onClick={butFinalizarOnClick}>Finalizar</a>
      </Link>


                        


                        <button id="butLogin" className="btn btn-secondary" type="button" onClick={ () => router.back() }>Regresar</button>
                    </div>
                </form>
            </div>
        </div>
    </aside>
}