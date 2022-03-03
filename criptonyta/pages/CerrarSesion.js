
import EncabezadoOpciones from "../components/EncabezadoOpciones.Components"
import OpcionesCerrarSesion from "../components/OpcionesCerrarSesion.Components"
import Footer2 from "../components/Footer2.Components"
export default function CerrarSesion() {
    return <div>
        <h2>Crypto-Nyta</h2>

        <div className="mt-4"><EncabezadoOpciones /></div>
        <div className="row ">
            <div className="col-3 mt-4"><OpcionesCerrarSesion /></div>
            <div className="col-3"><img className="ratio ratio-10x9 img-thumbnail" width={50} height={50} src="https://www.itemformacion.com/img/netlog3.png" />
                <h5 className="centrar mt-4">Nombre de Usuario</h5>
                <div class="d-grid gap-2 col-6 mx-auto mt-4">
                    <a class="btn btn-primary" type="button" href="/" >Cerrar Sesión</a>

                </div></div>

            <div className="col-6 ">
                <h3 className="mt-4">Información Personal</h3>
                <p>En esta sección se encontrará la información personal del usuario</p>


            </div>

        </div >
        <Footer2 />


    </div>
}