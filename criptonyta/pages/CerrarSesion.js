import Activa from "../components/Activa.Components"
import EncabezadoOpciones from "../components/EncabezadoOpciones.Components"
import OpcionesCerrarSesion from "../components/OpcionesCerrarSesion.Components"
import Footer2 from "../components/Footer2.Components"
export default function CerrarSesion() {
    return <div>
        <Activa/>
        <EncabezadoOpciones />
        <div className="row ">
            <div className="col-3 mt-4"><OpcionesCerrarSesion /></div>
            <div className="col-3"><img className="ratio ratio-10x9 " src="https://static.vecteezy.com/system/resources/previews/003/533/616/non_2x/user-icon-in-flat-style-person-icon-user-icon-for-web-site-user-icon-illustration-vector.jpg" />
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre de Usuario" />
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