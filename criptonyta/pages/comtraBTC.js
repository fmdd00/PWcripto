import Footer2 from "../components/Footer2.Components"
import Activa2 from "../components/Activa2.Components"
export default function MainPage() {
    return <div>
        <Activa2/>
        <h2>Transacción  /  Comprar</h2>
        <div class="row">
        <div className="col-6">
         <div className="card">
            <div className="card-body">
                <form>
                    <div className="mx-auto d-block">
                    <img class="mx-auto d-block"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmm0dH-Sh4fIxhmMCRkIzoekj0EnWk5vuhegGTwcVD9a8qId9qLBcKrTdwxBBEJ4hGs4Q&usqp=CAU"/>
                    </div>
                    <div className="mt-2">
                        </div>
                </form>
            </div>
        </div>
        </div>
        <div class="col-6">
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Calcular Cambio</h3>
                <form>
                    <div className="mt-4">
                        <input id="txt_username" type="text" className="form-control" placeholder="BTC" />
                    </div>
                    <div className="mt-2">
                        <input id="txt_password" type="password" className="form-control" placeholder="S/." />
                    </div>
                    <div></div>
                    <div className="d-grid gap-2 mt-2">
                        <button id="butLogin" className="btn btn-primary" type="button">Cambiar</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
        <Footer2 />
    </div>
}