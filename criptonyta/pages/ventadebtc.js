import Footer2 from "../components/Footer2.Components"
import Activa from "../components/Activa.Components"
import Link from 'next/link'
export default function MainPage() {
    return <div>
        <Activa/>
        <h2><nav >
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Transacción</a></li>
                <li className="breadcrumb-item active" aria-current="page">Vender</li>
            </ol>
        </nav></h2>
        <div className="row">
        <div className="col-6">
         <div className="card">
            <div className="card-body">
                <form>
                    <div className="mx-auto d-block">
                    <img className="mx-auto d-block" src="https://cimg.co/w/guides-attachments/1/5ca/36a871927b.jpg"/>
                    </div>
                    <div className="mt-2">
                        </div>
                </form>
            </div>
        </div>
        </div>
        <div className="col-6">
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
                        <Link href="/SolicitarVenta">
        <a>Solicitar</a>
      </Link>
                          </div>
                </form>
            </div>
        </div>
        </div>
        </div>
        <Footer2 />
    </div>
}