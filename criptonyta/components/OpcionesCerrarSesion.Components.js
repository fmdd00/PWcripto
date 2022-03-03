import Link from 'next/link'

const OpcionesCerrarSesion = () => {
    return <div>
        <h2 className="mt-4">Opciones</h2>
        
        <div className="list-group mt-4 ">
        <Link href="/VerTipoCambio">
        <a className="list-group-item list-group-item-action ">Comprar/Vender</a>
      </Link>

            
            <Link href="/CuentaActiva">
        <a className="list-group-item list-group-item-action ">Historial</a>
      </Link>
            
            <Link href="/CerrarSesion">
        <a className="list-group-item list-group-item-action active">Cerrar Sesión</a>
      </Link>
            
      
            
        </div>
    </div>
}

export default OpcionesCerrarSesion