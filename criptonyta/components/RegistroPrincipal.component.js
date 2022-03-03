import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from "react"

export default function FormatoRegistro(props) {

     // Variables internas (variables de estado) del componente
     const [txtNombre, setTxtNombre] = useState("")
     const [txtApellido, setTxtApellido] = useState("")
     const [txtDNI, setTxtDNI] = useState("")
 
     const txtNombreOnChange = (event) => {
         const txtNombreIngresado = event.target.value
         setTxtNombre(txtNombreIngresado)
         console.log(txtNombreIngresado)
     }
 
     const txtApellidoOnChange = (event) => {
         setTxtApellido(event.target.value)
         console.log(txtApellido)
     }

     const txtDNIOnChange = (event) => {
        setTxtDNI(event.target.value)
    }
 
     const butSiguienteOnClick = () => {
         // Se va a ejecutar la funcion que se paso por el props (onSiguiente)
         props.onSiguiente(txtNombre, txtApellido,  txtDNI)
     }

    const router = useRouter()

    return <aside >
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Paso 1 de 2</h3>
                <form>
                    <div className="mt-4 input-group">
                        <input id="txt_nombre" type="text" className="form-control" placeholder="Nombres" 
                        defaultValue={txtNombre} onChange={txtNombreOnChange}/>
                    </div>
                    <div className="mt-2 input-group">
                        <input id="txt_apellido" type="text" className="form-control" placeholder="Apellidos"
                        defaultValue={txtApellido} onChange={txtApellidoOnChange} />
                    </div>
                    <div className="mt-2">
                        <input id="txt_dni" type="number" className="form-control" placeholder="Número de DNI"
                        defaultValue={txtDNI} onChange={txtDNIOnChange} />
                    </div>
                    
                    <div className="d-grid gap-2 mt-2">
                    <Link href="/Registro2">
        <a id="butLogin" className="btn btn-primary" type="button"  onClick={butSiguienteOnClick}>Siguiente</a>
      </Link>
                        

                        <button id="butLogin" className="btn btn-secondary" type="button" onClick={ () => router.back() }>Regresar</button>
                    </div>
                </form>
            </div>
        </div>
    </aside>
}