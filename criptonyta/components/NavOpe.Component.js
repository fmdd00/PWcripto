const NavOpe = () => {
    return <nav aria-label="...">
    <ul className="pagination justify-content-center mt-4">
      <li className="page-item"><a className="page-link" href="/MenuAdminClientes">Clientes</a></li>
      <li className="page-item"><a className="page-link" href="/MenuAdminTipocambio">Tipo de Cambio</a></li>
      <li className="page-item active" aria-current="page">
        <span className="page-link">Operaciones</span>
      </li>
    </ul>
  </nav>
  }
  export default NavOpe