const CuerpoVerTipoCambio = () => {
    return <div>


        <div className="row mt-4">
            <h2 className="mt-4">Opciones</h2>

            <div className="col-3">
                <div className="list-group mt-4 ">
                    <a href="/Login" className="list-group-item list-group-item-action active " aria-current="true">
                        Comprar/Vender
                    </a>
                    <a href="/CuentaActiva" className="list-group-item list-group-item-action ">Historial</a>
                    <a href="/CerrarSesion" className="list-group-item list-group-item-action">Cerrar Sesión</a>
                </div>
            </div>

            <div className="col-5 ">

                <h3>Tipo Cambio:</h3>
                <select className="form-select" aria-label="Default select example">
                    <option selected className="SeleccioneMoneda">Seleccione Moneda</option>
                    <option value="1">BitCoins</option>
                    <option value="2">Soles</option>
                </select>
                <div>
                    <form class="row g-3">
                        <div class="col-auto mt-4 CompraColor">
                            <h5 className="img-thumbnail">1 BTC = S/. 162,915.38</h5>
                        </div>
                    </form>

                    <form class="row g-3">
                        <div class="col-auto mt-4 CompraColor">
                            <h5 className="img-thumbnail">S/.1.00 = 0.00000061 BTC</h5>
                        </div>
                    </form>
                </div>


                <div className="d-grid gap-2">
                    <a type="button" className="btn btn-primary mt-4" href="/compraventa" >Comprar / Vender</a>
                </div>
            </div>

            <div className="col-3 ms-4">


                
                

                <p className="mt-4 pensamiento"> En esta sección podrás cambiar de BitCoins a Soles y/o de Soles a BitCoins con un
                    sólo click.
                    <img width={240} height={300} src="https://img.freepik.com/vector-gratis/mujer-diseno-personajes-dibujos-animados-personas-presentando-algo-alegremente_311865-7632.jpg?size=338&ext=jpg"></img>
                </p>


            </div>
        </div>





    </div>


}

export default CuerpoVerTipoCambio