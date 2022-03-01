
import NavegacionAdmin from "../components/NavAdmin.Component"
import OpcionesCerrarSesion from "../components/OpcionesCerrarSesion.Components"
import Footer2 from "../components/Footer2.Components"
export default function CerrarSesion() {
    return <div>
         
        <NavegacionAdmin />
        <div className="row ">
            <div className="col-3 mt-4"><OpcionesCerrarSesion /></div>
            <div className="col-3"><img className="ratio ratio-10x9 img-thumbnail" width={50} height={50} src="https://icones.pro/wp-content/uploads/2021/02/symbole-masculin-icone-l-utilisateur-vert.png" />
                                     <h5 className="centrar mt-4">USUARIO 1</h5>
                <div class="d-grid gap-2 col-6 mx-auto mt-4">
  <button class="btn btn-primary" type="button">Cerrar Sesión</button>
  
</div></div>
                
            <div className="col-6 ">
                <h3 className="mt-4">Información Personal</h3>
                <p>En esta sección se encontrará la información personal del usuario</p>
              

            </div>

        </div >
        <Footer2 />


    </div>
}