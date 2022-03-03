import Footer2 from "../components/Footer2.Components"
import Activa from "../components/Activa.Components"
export default function MainPage() {
    return <div>
        <Activa/>
        <h2><nav >
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Transacción</a></li>
                <li class="breadcrumb-item active" aria-current="page">Vender</li>
            </ol>
        </nav></h2>
        <div class="row">
        <div className="col-6">
         <div className="card">
            <div className="card-body">
                <form>
                    <div className="mx-auto d-block">
                    <img class="mx-auto d-block" src="https://cimg.co/w/guides-attachments/1/5ca/36a871927b.jpg"/>
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
                        <a className="btn btn-primary" type="button" href="#">Calcular</a>
                        <a className="btn btn-secondary" type="button" href="/SolicitarVenta">Solicitar</a>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
        <Footer2 />
    </div>
}