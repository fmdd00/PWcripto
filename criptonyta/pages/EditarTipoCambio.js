import VentaCabecera from "../components/VentaCabecera.Components";
import Paginacion from "../components/Paginacion.Components"
import Footer2 from "../components/Footer2.Components"
export default function EditarTipoCambio() {
    return <div >
        <VentaCabecera/>
        
        <Paginacion/>
        
        <div className="col-6">
        <div className="col">
        <h2 >BTC-PEN</h2>
        <div className="col-auto">
        <input className="form-control form-control-lg" type="text" placeholder="X X 1" aria-label=".form-control-lg example"/>
  </div>
        </div>
        
        <div className="col">
        <h2 >PEN-BTC</h2>
        <input className="form-control form-control-lg" type="text" placeholder="X X 2" aria-label=".form-control-lg example"/>
        </div>
        
            </div>
            <button className="btn btn-primary btn-5" type="submit">Cambiar</button>
      
       <Footer2/>
        </div>

}