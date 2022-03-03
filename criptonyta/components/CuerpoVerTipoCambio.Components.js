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
                <form class="row g-3">
                    <div class="col-auto mt-4 CompraColor">
                        <h5 className="img-thumbnail">Compra:  S/ 3.90</h5>
                    </div>

                </form>
                <h5 className="mt-4">Saldo Disponible :     ........</h5>


                <h5 className="mt-4">Monto a Introducir:</h5>
                <input type="text" className="form-control mt-4" id="inputPassword2" placeholder="" />

                <div className="d-grid gap-2">
                    <a type="button" className="btn btn-primary mt-4" href="/compraventa" >Comprar</a>
                    <a type="button" className="btn btn-primary mt-2" href="/compraventa" >Vender</a>
                </div>
            </div>

            <div className="col-3 ms-4">

                
                <select className="form-select" aria-label="Default select example">
                    <option selected className="SeleccioneMoneda">Seleccione Moneda</option>
                    <option value="1">BitCoins</option>
                    <option value="2">Soles</option>
                </select>
                <form className="row g-3">
                    <div className="col-auto mt-4 ">
                        <h5 className="ventaColor img-thumbnail">Venta:  S/ 3.71</h5>
                    </div>
                    
                </form>

                <p className="mt-4 pensamiento"> En esta sección podrás cambiar de BitCoins a Soles y/o de Soles a BitCoins con un
                sólo click.
                <img width={240} height={300} src="https://img.freepik.com/vector-gratis/mujer-diseno-personajes-dibujos-animados-personas-presentando-algo-alegremente_311865-7632.jpg?size=338&ext=jpg"></img>
                 </p>
            

            </div>
        </div>





    </div>


}

export default CuerpoVerTipoCambio