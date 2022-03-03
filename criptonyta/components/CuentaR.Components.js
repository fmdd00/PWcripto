import Link from 'next/link'
const Cuenta = () => {
    return <div>
        <h2>Cuenta</h2>
        
        <div className="list-group mt-4 ">
        <Link href="/Login">
        <a className="list-group-item list-group-item-action" aria-current="true">Iniciar Sesión</a>
      </Link>
      <Link href="/Registro">
        <a className="list-group-item list-group-item-action active" >Abrir Cuenta</a>
      </Link>
           
            
        </div>
    </div>
}

export default Cuenta