import EncabezadoOpciones from "../components/EncabezadoOpciones.Components"
import Opciones from "../components/Opciones.Components"
import Footer2 from "../components/Footer2.Components"
export default function CuentaActiva() {
    return <div>
        <h1>Crypto-Nita</h1>
            <Activa/>
            <EncabezadoOpciones />
            <div className="row mt-4">
                <div className="col-2"><Opciones /></div>
                <div className="col-6"><img src="https://img.freepik.com/vector-gratis/ganar-dinero-freelance-trabajo-remoto-trabajo-distancia-gente-negocios-hombre-laptop-sentada-billetera_203228-133.jpg?size=626&ext=jpg"/></div>
                <div className="col-4">
                    <h3 className="mt-4">Actividad Reciente</h3>
                    <p>-Transferencia de la cuenta en dólares a soles</p>

                    <h3>Operaciones Realizadas</h3>
                    <p>- Se transfirió $50</p>
                    </div>

            </div>
            <Footer2 />
    </div>
}