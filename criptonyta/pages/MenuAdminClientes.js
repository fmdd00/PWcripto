import Footer2 from "../components/Footer2.Components"
import LogoAdministrador from "../components/LogoAdmin.Component"
import NavegacionAdmin from "../components/NavAdmin.Component"
import ListaClientes from "../components/ListaClientes.Component"
import { useEffect, useState } from "react"

const MenuAdminClientes = () => {

    const [listadoCliente, setListadoClientes] = useState([])

    return <div className="container">
        <LogoAdministrador />
        <NavegacionAdmin />
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="mx-auto">
                        <h3>Lista de Clientes</h3>
                    </div>
                    <ListaClientes clientes={ listadoClientes } modo={ "crud" } />
                </div>
            </div>
        </div>

        <Footer2 />
    </div>
}

export default MenuAdminClientes