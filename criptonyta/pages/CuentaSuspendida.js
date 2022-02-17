import Suspendida from "../components/Suspendida.Components"
import EncabezadoOpciones from "../components/EncabezadoOpciones.Components"
import OpcionesCerrarSesion from "../components/OpcionesCerrarSesion.Components"
import Footer2 from "../components/Footer2.Components"
export default function CuentaSuspendida() {
    return <div>
        <h1>Crypto-Nita</h1>
        <Suspendida />
        <EncabezadoOpciones />
        <div className="row ">
            <div className="col-3 mt-4"><OpcionesCerrarSesion /></div>
            <div className="col-3"><img className="ratio ratio-10x9 " src="https://static.vecteezy.com/system/resources/previews/003/533/616/non_2x/user-icon-in-flat-style-person-icon-user-icon-for-web-site-user-icon-illustration-vector.jpg" />
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre de Usuario" /></div>
            <div className="col-6 ">
                <h3 className="mt-4">Información Personal</h3>
                <p>En esta sección se encontrará la información personal del usuario</p>
                <a className="btn btn-primary me-4" href="#" role="button">Cerrar Sesión</a>
                <button type="button" className="btn btn-outline-primary">Seguir Explorando</button>

            </div>

        </div >
        <Footer2 />
    </div>
}