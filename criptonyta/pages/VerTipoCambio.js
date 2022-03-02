
import EncabezadoOpciones from "../components/EncabezadoOpciones.Components"
import CuerpoVerTipoCambio from "../components/CuerpoVerTipoCambio.Components"
import Footer2 from "../components/Footer2.Components"
import Activa from "../components/Activa.Components"

export default function VerTipoCambio() {
    return <div>
        <Activa />

        <div className="mt-4"><EncabezadoOpciones /></div>
       

        <CuerpoVerTipoCambio/>



        <Footer2/>


    </div>
}