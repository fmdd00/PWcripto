import { useRouter } from 'next/router'

export default function formatoRegistroPaso2() {

    const router = useRouter()

    return <aside >
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Paso 2 de 2</h3>
                <form>
                    <div className="mt-4 input-group">
                        <input id="txt_email" type="text" className="form-control" placeholder="Dirección de correo" />
                    </div>
                    <div className="mt-2">
                        <input id="txt_password" type="password" className="form-control" placeholder="Contraseña" />
                    </div>
                    <div className="mt-2">
                        <input id="txt_password" type="password" className="form-control" placeholder="Repite la contraseña" />
                    </div>
                    <div className="mt-2 input-group">
                        <span class="input-group-text" id="cod_pe">+ 51</span>
                        <input id="txt_username" type="number" className="form-control" placeholder="Número telefónico" />
                    </div>
                    <div className="form-check mt-4">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                <p> Acepto los <a className="link-primary" href="/TerminosCondiciones">Términos y Condiciones</a> de Crypto-Nita 
                                    y la <a className="link-primary" href="https://policies.google.com/terms">Política de privacidad</a> de Google y autorizo el tratamiento 
                                    de mis datos personales de conformidad con la Política de Privacidad.</p>
                            </label>
                    </div>
                    <div className="d-grid gap-2 mt-2">
                        <a id="butLogin" className="btn btn-primary" type="button" href="/main">Finalizar</a>
                        <button id="butLogin" className="btn btn-secondary" type="button" onClick={ () => router.back() }>Regresar</button>
                    </div>
                </form>
            </div>
        </div>
    </aside>
}