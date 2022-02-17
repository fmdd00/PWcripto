import Suspendida from "../components/Suspendida.Components"
import Encabezado from "../components/Encabezado.Components"
import CuentaValidacion from "../components/CuentaValidacion.Components"
import Footer2 from "../components/Footer2.Components"
export default function ValidacionRegistro() {
    return <div>
        <Suspendida />
        <Encabezado />

        <div className="row ">
            <div className="col-3 mt-4"> <CuentaValidacion /></div>
            <div className="col-3"><img className="ratio ratio-10x9 " src="https://static.vecteezy.com/system/resources/previews/003/533/616/non_2x/user-icon-in-flat-style-person-icon-user-icon-for-web-site-user-icon-illustration-vector.jpg" />
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre de Usuario" /></div>
            <div className="col-6 ">
                <h3 className="mt-4">Información Personal</h3>
                <p>En esta sección se encontrará la información personal del usuario</p>
                <p>Estado de la Cuenta:</p>
                <p className="me-4">En Revisión <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <a className="btn btn-primary ms-4" href="#" role="button">Estado de Revisión</a>
                </p>
                
                

            </div>

        </div >
        <Footer2 />


    </div>

}