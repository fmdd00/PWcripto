import Footer2 from "../components/Footer2.Components"
import Activa from "../components/Activa.Components"
export default function SolicitarVenta() {
    return <div>
       <Activa/>
        <h2><nav >
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Transacción</a></li>
                <li class="breadcrumb-item active" aria-current="page">Solicitud</li>
            </ol>
        </nav></h2>
        <h3 className="unode3">Paso 1 de 3</h3>
        <div className="card">
                    <div className="card-body">
                       

                            <h3 className="text-center soli">Solicitud</h3>
                       
                            
                                <h5>Número de Solicitud:</h5>
                                <input id="txt_username" type="text" className="form-control" placeholder="BTC" />
                                <div className="d-grid gap-2 mt-2">
                                <button id="butLogin" className="btn btn-primary btn-5" type="button">Siguiente</button>
                            </div>

                            </div>
                          
                       
                 
                
        
        <Footer2 />
    </div>
    </div>
}