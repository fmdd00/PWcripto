import Activa from "../components/Activa.Components"
import Encabezado from "../components/Encabezado.Components"
import CuentaValidacion from "../components/CuentaValidacion.Components"
import Footer2 from "../components/Footer2.Components"
export default function ValidacionRegistro() {
    return <div>
        <Activa/>
        <div className="mt-4"><Encabezado /></div>
        

        <div className="row ">
            <div className="col-3 mt-4"> <CuentaValidacion /></div>
            <div className="col-3"><img className="ratio ratio-10x9 " src="https://www.itemformacion.com/img/netlog3.png" />
                <h5 className="nom"> Nombre de Usuario</h5></div>
            <div className="col-6 ">
                <h3 className="mt-4">Información Personal</h3>
                <p>En esta sección se encontrará la información personal del usuario</p>
                <p>Estado de la Cuenta:</p>
                <p className="me-4">En Revisión <div class="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <a className="btn btn-primary ms-4" href="#" role="button">Estado de Revisión</a>
                </p>
                
                

            </div>

        </div >
        <Footer2 />


    </div>

}