import Encabezado from "../components/Encabezado.Components"
import Footer2 from "../components/Footer2.Components"
import Activa2 from "../components/Activa2.Components"
import Bienvenida from "../components/Bienvenida.component"
import EncabezadoOpciones from "../components/EncabezadoOpciones.Components"
export default function MainPage() {
    return <div>
        
        <Activa2/>
        <EncabezadoOpciones />

        <h2>Comprar/Vender</h2>

        <div className="col"> <h2 className="text-center">¿Qué deseas hacer?</h2></div>

        <div className="mt-4">
        <div className="col">
         <div className="card">
            <div className="card-body">
                <h3 className="text-center">Quiero Comprar</h3>
                <form>
                    <div className="mx-auto d-block">
                    <img class="mx-auto d-block"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmm0dH-Sh4fIxhmMCRkIzoekj0EnWk5vuhegGTwcVD9a8qId9qLBcKrTdwxBBEJ4hGs4Q&usqp=CAU"/>
                    </div>
                    <div className="mt-2">
                        </div>
                    <div className="d-grid gap-2 mt-2">
                        <button id="butLogin" className="btn btn-primary" type="button">Compra</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        
        <div class="float-left">
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Quiero Vender</h3>
                <form>
                    <div className="mx-auto d-block">
                    <img class="mx-auto d-block"  src="data:image/jpeg;base64,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"/>
                    </div>
                    <div className="mt-2">
                        </div>
                    <div className="d-grid gap-2 mt-2">
                        <button id="butLogin" className="btn btn-primary" type="button">Vende</button>
                    </div>
                </form> 
            </div>
        </div>
        </div>
        <Footer2 />
    </div>
    </div>
}