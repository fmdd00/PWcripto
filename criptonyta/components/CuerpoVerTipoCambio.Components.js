const CuerpoVerTipoCambio = () => {
    return <div>


        <div className="row mt-4">
            <h2 className="mt-4">Opciones</h2>

            <div className="col-3">
                <div className="list-group mt-4 ">
                    <a href="/Login" className="list-group-item list-group-item-action active " aria-current="true">
                        Comprar/Vender
                    </a>
                    <a href="/Registro" className="list-group-item list-group-item-action ">Historial</a>
                    <a href="/Registro" className="list-group-item list-group-item-action">Cerrar Sesión</a>
                </div>
            </div>

            <div className="col-5 ">

                <h3>Tipo Cambio:</h3>
                <form class="row g-3">
                    <div class="col-auto mt-4">
                        Compra:
                    </div>
                    <div class="col-auto">

                        <input type="text" className="form-control" id="inputPassword2" placeholder="" />
                    </div>
                </form>
                <p className="mt-4">Saldo Disponible</p>
                <input type="text" className="form-control mt-4" id="inputPassword2" placeholder="" />

                <p className="mt-4">Monto a Introducir</p>
                <input type="text" className="form-control mt-4" id="inputPassword2" placeholder="" />

                <div className="d-grid gap-2 d-md-block">
                <button type="button" className="btn btn-primary  gap-2 col-5 mx-auto mt-4 me-4">Compra</button>
                <button type="button" className="btn btn-primary  gap-2 col-5 mx-auto mt-4">Venta</button>
                </div>
            </div>

            <div className="col-3 ms-4">

                
                <select className="form-select" aria-label="Default select example">
                    <option selected className="SeleccioneMoneda">Seleccione Moneda</option>
                    <option value="1">Dólar</option>
                    <option value="2">Soles</option>
                </select>
                <form className="row g-3">
                    <div className="col-auto mt-4">
                        Venta:
                    </div>
                    <div className="col-auto">

                        <input type="text" className="form-control" id="inputPassword2" placeholder="" />
                    </div>
                </form>

                <p className="mt-4"> Lorem ipsum dolor sit amet consectetur adipiscing elit, ultricies penatibus dui sociis a mollis,
            vivamus aenean euismod dignissim conubia porttitor. Montes lobortis ante lectus hendrerit erat metus
            eu nisi in enim non sociosqu, odio luctus sagittis turpis donec eget hac bibendum nisl commodo. </p>
            

            </div>
        </div>





    </div>


}

export default CuerpoVerTipoCambio