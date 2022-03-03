import Link from 'next/link'
const NavOpe = () => {
    return <nav aria-label="...">
    <ul className="pagination justify-content-center mt-4">
      
      <li className="page-item">
      <Link href="/MenuAdminClientes">
        <a className="page-link">Clientes</a>
      </Link>
        
        
        </li>
      <li className="page-item">
      <Link href="/MenuAdminTipocambio">
        <a className="page-link">Tipo de Cambio</a>
      </Link>
       
        
        </li>
      <li className="page-item active" aria-current="page">
        <span className="page-link">Operaciones</span>
      </li>
    </ul>
  </nav>
  }
  export default NavOpe