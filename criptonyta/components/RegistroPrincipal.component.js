import { useRouter } from 'next/router'


export default function formatoRegistro() {

    const router = useRouter()

    return <aside >
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Paso 1 de 2</h3>
                <form>
                    <div className="mt-4 input-group">
                        <input id="txt_email" type="text" className="form-control" placeholder="Nombres" />
                    </div>
                    <div className="mt-2 input-group">
                        <input id="txt_username" type="text" className="form-control" placeholder="Apellidos" />
                    </div>
                    <div className="mt-2">
                        <input id="txt_password" type="number" className="form-control" placeholder="Número de DNI" />
                    </div>
                    
                    <div className="d-grid gap-2 mt-2">
                        <a id="butLogin" className="btn btn-primary" type="button" href="/Registro2">Siguiente</a>
                        <button id="butLogin" className="btn btn-secondary" type="button" onClick={ () => router.back() }>Regresar</button>
                    </div>
                </form>
            </div>
        </div>
    </aside>
}