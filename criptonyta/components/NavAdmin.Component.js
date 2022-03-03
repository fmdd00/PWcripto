import Link from 'next/link'
const NavegacionAdmin = () => {
  return <nav aria-label="...">
    <ul className="pagination justify-content-center mt-4">
      <li className="page-item active"><span className="page-link" href="#">Clientes</span></li>
      <li className="page-item">
      <Link href="/MenuAdminTipocambio">
        <a className="page-link">Tipo de Cambio</a>
      </Link>
      
        
        </li>
      <li className="page-item">
      <Link href="/ListaOperaciones">
        <a className="page-link">Operaciones</a>
      </Link>
       
        
        </li>
    </ul>
  </nav>
}
export default NavegacionAdmin