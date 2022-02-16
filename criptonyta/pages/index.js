import Banner from "../components/Banner.Components"
import Login from "../components/Login.Components"
import PiePagina from "../components/PiePagina.Components"
export default function Home() {
  return <div >
    <div >
        <h1>Grupo 5</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end btn-4" >
        <Login/>
        </div>
        <div className="btn-4">
        <Banner/>

        </div>
        
        
        

    </div>
    <div>
      <PiePagina/>
    </div>
    </div>

}
