import Activa from "../components/Activa.Components"
import EncabezadoOpciones from "../components/EncabezadoOpciones.Components"
import Opciones from "../components/Opciones.Components"
import Footer2 from "../components/Footer2.Components"
export default function CuentaActiva() {
    return <div> 
        
            <Activa/>
            <div className="mt-4"><EncabezadoOpciones /></div>
            
            <div className="row mt-4">
                <div className="col-2 "><Opciones /></div>
                <div className="col-6"><img src="https://img.freepik.com/vector-gratis/ganar-dinero-freelance-trabajo-remoto-trabajo-distancia-gente-negocios-hombre-laptop-sentada-billetera_203228-133.jpg?size=626&ext=jpg"/></div>
                <div className="col-4">
                    <h3 className="mt-4">Actividad Reciente</h3>
                    <p>-Transferencia de la cuenta de Bitcoins a soles</p>

                    <h3>Operaciones Realizadas</h3>
                    <p>- Se transfiriÃ³ S/50</p>
                    </div>

            </div>
            <Footer2 />
    </div>
}