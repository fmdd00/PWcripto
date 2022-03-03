import Footer2 from "../components/Footer2.Components"
import Activa from "../components/Activa.Components"
import { useState } from "react"

export default function MainPage() {

    const [monto, setMonto] = useState('')

    const handleInputChange = ({ target }) =>{
        setMonto(target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        console.log(monto)
    }

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
                                <img className="mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmm0dH-Sh4fIxhmMCRkIzoekj0EnWk5vuhegGTwcVD9a8qId9qLBcKrTdwxBBEJ4hGs4Q&usqp=CAU" />
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
                        <form onSubmit={ handleSubmit }>
                            <div className="mt-4 input-group">
                                <span className="input-group-text" >S/.</span>
                                <input id="txt_password" type="text" className="form-control" placeholder="Ingrese cantidad en soles" value={ monto } onChange={ handleInputChange }/>
                            </div>
                            <div className="mt-2 input-group">
                                <span className="input-group-text" >BTC</span>
                                <input id="txt_username" type="text" className="form-control" placeholder="Usted obtendrá" />
                            </div>
                            <div></div>
                            <div className="d-grid gap-2 mt-2">
                                <button className="btn btn-primary" type="submit">Calcular</button>
                                <a className="btn btn-secondary" type="button" href="/SolicitarCompra">Solicitar</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer2 />
    </div>
}