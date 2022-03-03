import Activa from "../components/Activa.Components"
import Footer2 from "../components/Footer2.Components"
import Link from 'next/link'
export default function Confiracion(){
    return <div>
        <Activa />
        <h2><nav >
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Transacción</a></li>
                <li className="breadcrumb-item" aria-current="page">Solicitud</li>
                <li className="breadcrumb-item active" aria-current="page">Confirmación</li>
            </ol>
        </nav></h2>
        <h3 className="unode3">Paso 2 de 3</h3>
        <div className="card">
            <div className="card-body">

                <h3 className="text-center soli">Confirmación</h3>
                <h5>Monto a vender:</h5>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Ingresar monto" aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">BTC</span>
                </div>
                <h5>Nro. de cuenta bancaria:</h5>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXX" aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">BCP</span>
                </div>
                <h5>Nro. de operación:</h5>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="XXXXXXXXXXXXXXXXX"/>
                </div>
                <div className="d-grid gap-2 mt-2">
                <Link href="/OperacionRealizadA">
        <a>Siguiente</a>
      </Link>
                       </div>
            </div>
            <Footer2 />
        </div>
    </div>
}