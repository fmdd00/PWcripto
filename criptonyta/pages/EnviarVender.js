import VentaCabecera from "../components/VentaCabecera.Components";
import Footer4 from "../components/Footer4.Components";
import CuerpoVenta from "../components/CuerpoVenta.Components";

export default function EnviarVender() {
    return <div >
        <VentaCabecera/>
        <h2 className="venta">Venta</h2>
        <CuerpoVenta/>



        <Footer4/>

    </div>
}