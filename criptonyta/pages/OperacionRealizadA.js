import Activa from "../components/Activa.Components";
import Footer4 from "../components/Footer4.Components";

import Link from 'next/link'
export default function EnviarVender() {
    return <div >
        <Activa />
        <h2 className="venta">Operacion Realizada</h2>
        <div className="card-body">
            <h4 className="mt-5">Número de Operación:</h4>
            <h1 className="mt-2">00000000111111222222222222</h1>
        </div>
        <div className="text-center mt-4">
        <Link href="/VerTipoCambio">
        <a>Regresar a Compra / Venta</a>
      </Link>
           
        </div>
        <div>
            <Footer4 />
        </div>
    </div>
}