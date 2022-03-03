import LogoAdministrador from "../components/LogoAdmin.Component"
import NavOpe from "../components/NavOpe.Component"

export default function ListaOperaciones() {
    return <div className="container">
        <LogoAdministrador />
        <NavOpe />
        <div className="mt-4">
            <h1>
                En esta sección, se deberían mostrar las operaciones realizadas por el usuario, ya
                sean de compra o venta, al momento de solicitar un cambio. Para esto, la solicutud
                de cambio realizada por el usuario deberá ser almacenada en una BD, para luego ser
                consultada por este medio y mostrar los datos de tal solicutud en formato de
                tabla en esta página.
            </h1>
        </div>
    </div>
}