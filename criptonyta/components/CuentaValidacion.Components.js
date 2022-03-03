import Link from 'next/link'
const CuentaValidacion=()=>{
    return <div>
        <h2>Cuenta</h2>
        
        <div className="list-group mt-4 ">
        <Link href="/Login">
        <a className="list-group-item list-group-item-action active" aria-current="true">Información</a>
      </Link>
            
            
        </div>

    </div>
}

export default CuentaValidacion