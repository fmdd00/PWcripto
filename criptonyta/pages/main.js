import Encabezado from "../components/Encabezado.Components"
import Footer2 from "../components/Footer2.Components"
import Bienvenida from "../components/Bienvenida.component"
import Activa from "../components/Activa.Components"

export default function MainPage() {
    return <div>
        <Activa />
        <div className="mt-4"><Encabezado /></div>
        
        <Bienvenida />
        <Footer2 />
    </div>
}