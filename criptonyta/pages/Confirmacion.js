import Activa from "../components/Activa.Components"
import Footer2 from "../components/Footer2.Components"

export default function Confiracion(){
    return <div>
        <Activa />
        <h2><nav >
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Transacción</a></li>
                <li class="breadcrumb-item" aria-current="page">Solicitud</li>
                <li class="breadcrumb-item active" aria-current="page">Confirmación</li>
            </ol>
        </nav></h2>
        <h3 className="unode3">Paso 2 de 3</h3>
        <div className="card">
            <div className="card-body">

                <h3 className="text-center soli">Confirmación</h3>
                <h5>Monto a vender:</h5>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Ingresar monto" aria-describedby="basic-addon2" />
                    <span class="input-group-text" id="basic-addon2">BTC</span>
                </div>
                <h5>Nro. de cuenta bancaria:</h5>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXX" aria-describedby="basic-addon2" />
                    <span class="input-group-text" id="basic-addon2">BCP</span>
                </div>
                <h5>Nro. de operación:</h5>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="XXXXXXXXXXXXXXXXX"/>
                </div>
                <div className="d-grid gap-2 mt-2">
                    <a id="butLogin" className="btn btn-primary btn-5" type="button" href="/OperacionRealizadA">Siguiente</a>
                </div>
            </div>
            <Footer2 />
        </div>
    </div>
}