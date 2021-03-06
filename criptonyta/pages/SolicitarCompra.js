import Footer2 from "../components/Footer2.Components"
import Activa from "../components/Activa.Components"
import Link from 'next/link'
export default function SolicitarCompra() {
    return <div>
        <Activa />
        <h2><nav >
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Transacción</a></li>
                <li className="breadcrumb-item active" aria-current="page">Comprar</li>
            </ol>
        </nav></h2>
        <div className="row">
            <div className="col-6">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="mx-auto d-block">


                                <h3 className="text-center">Solicitar Cambio</h3>
                                <form>
                                    <div className="mt-4">
                                        <h5>Monto:</h5>
                                        <input id="txt_username" type="text" className="form-control" placeholder="BTC" />
                                    </div>
                                    <div className="mt-4">
                                        <h5>Billetera:</h5>
                                        <input id="txt_password" type="password" className="form-control" placeholder="S/." />
                                    </div>
                                    <div></div>
                                    <div className="d-grid gap-2 mt-2">
                                    <Link href="/Solicitud">
        <a>Cambiar</a>
      </Link>
                                        
                                    </div>
                                </form>






                            </div>
                            <div className="mt-2">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="card pasos">


                    <h6 className="transac">Sólo unos pasos más y tu transacción estará completa!</h6>
                    <img className="mx-auto d-block" width={280} height={280} src="https://img.freepik.com/vector-gratis/hombre-muestra-gesto-gran-idea_10045-637.jpg?size=338&ext=jpg&ga=GA1.2.1549050659.1639612800" />



                </div>
            </div>
        </div>

        <Footer2 />
    </div>
}