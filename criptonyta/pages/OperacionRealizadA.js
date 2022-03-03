import Activa from "../components/Activa.Components";
import Footer4 from "../components/Footer4.Components";
import CuerpoVenta from "../components/CuerpoVenta.Components";

export default function EnviarVender() {
    return <div >
        <Activa />
        <h2 className="venta">Operacion Realizada</h2>
        <div className="card-body">
            <h4 className="mt-5">Número de Operación:</h4>
            <h1 className="mt-2">00000000111111222222222222</h1>
        </div>
        <div className="text-center">
            <a className="btn btn-primary" href="/VerTipoCambio">Regresar a Compra / Venta</a>
        </div>
        <div>
            <Footer4 />
        </div>
    </div>
}