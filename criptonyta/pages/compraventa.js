import Activa from "../components/Activa.Components"
import Footer2 from "../components/Footer2.Components"
import Link from 'next/link'
import EncabezadoOpciones from "../components/EncabezadoOpciones.Components"
export default function MainPage() {
    return <div>
        
        <Activa/>
        <div className="mt-4">< EncabezadoOpciones /></div>
        

        <h2>Comprar/Vender</h2>

        <div className="col"> <h2 className="text-center">¿Qué deseas hacer?</h2></div>

        <div className="row">


        
        <div className="col-6">
         <div className="card">
            <div className="card-body">
                <h3 className="text-center">Quiero Comprar</h3>
                <form>
                    <div className="mx-auto d-block">
                    <img className="mx-auto d-block"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmm0dH-Sh4fIxhmMCRkIzoekj0EnWk5vuhegGTwcVD9a8qId9qLBcKrTdwxBBEJ4hGs4Q&usqp=CAU"/>
                    </div>
                    <div className="mt-2">
                        </div>
                    <div className="d-grid gap-2 mt-2">
                    <Link href="/comtraBTC">
        <a>Compra</a>
      </Link>

                       
                    </div>
                </form>
            </div>
        </div>
        </div>
        
        <div className="col-6">
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Quiero Vender</h3>
                <form>
                    <div className="mx-auto d-block">
                    <img className="mx-auto d-block" src="https://cimg.co/w/guides-attachments/1/5ca/36a871927b.jpg"/>
                    </div>
                    <div className="mt-2">
                        </div>
                    <div className="d-grid gap-2 mt-2">
                    <Link href="/ventadebtc">
        <a>Vende</a>
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