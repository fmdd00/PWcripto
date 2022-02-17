export default function formatoRegistro() {
    return <aside >
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Regístrate</h3>
                <form>
                    <div className="mt-4 input-group">
                        <input id="txt_email" type="text" className="form-control" placeholder="Tu dirección de correo" />
                    </div>
                    <div className="mt-2 input-group">
                        <input id="txt_username" type="text" className="form-control" placeholder="Usuario" />
                    </div>
                    <div className="mt-2">
                        <input id="txt_password" type="password" className="form-control" placeholder="Contraseña" />
                    </div>
                    <div className="mt-2">
                        <input id="txt_password" type="password" className="form-control" placeholder="Repite tu contraseña" />
                    </div>
                    <div class="form-check mt-4">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                <p> Acepto los <a className="link-primary" href="#">Términos y Condiciones</a> de Crypto-Nita 
                                    y la <a className="link-primary" href="#">Política de privacidad</a> y autorizo el tratamiento 
                                    de mis datos personales de conformidad con la Política de Privacidad.</p>
                            </label>
                    </div>
                    <div className="d-grid gap-2 mt-2">
                        <button id="butLogin" className="btn btn-primary" type="button">Crear cuenta</button>
                    </div>
                </form>
            </div>
        </div>
    </aside>
}