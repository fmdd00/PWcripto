import Activa from "../components/Activa.Components"
import EncabezadoOpciones from "../components/EncabezadoOpciones.Components"
import CuerpoVerTipoCambio from "../components/CuerpoVerTipoCambio.Components"
import Footer2 from "../components/Footer2.Components"
import LogoAdministrador from "../components/LogoAdmin.Component"

export default function VerTipoCambio() {
    return <div>
        <LogoAdministrador />
        <div className="mt-4"><EncabezadoOpciones /></div>
       

        <CuerpoVerTipoCambio/>



        <Footer2/>


    </div>
}