import Link from 'next/link'
const Paginacion=()=>{
  return <nav aria-label="...">
    <ul className="pagination justify-content-center mt-4">
      <li className="page-item">
      <Link href="/MenuAdminClientes">
        <a className="page-link">Clientes</a>
      </Link>
    
        
        </li>
      <li className="page-item active" aria-current="page">
        <span className="page-link">Tipo de Cambio</span>
      </li>

      <li className="page-item">
      <Link href="/ListaOperaciones">
        <a className="page-link">Operaciones</a>
      </Link>
       
        
        </li>
    </ul>
  </nav>
}

export default Paginacion