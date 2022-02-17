const NavegacionAdmin = () => {
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class=" container collapse navbar-collapse" id="navbarNavDropdown">
                <div className="col-4">
                    <a class="nav-link active text-black" aria-current="page" href="#">Clientes</a>
                </div>
                <div className="col-4">
                    <a class="nav-link active text-black" aria-current="page" href="#"> Tipo de cambio</a> 
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Seleccione la divisa</option>
                        <option value="1">Dolares</option>
                        <option value="2">Bitcoin</option>
                    </select>
                    <div class="dropdown-menu text-black" aria-labelledby="navbarDropdownMenuLink">
                        <span><a class="dropdown-item" href="#">Dolares</a></span>
                    </div>
                </div>
                <div className="col-4">
                    <a class="nav-link text-black" href="#">Operación</a>
                </div>
            </div>
        </div>
    </nav>
}
export default NavegacionAdmin