const Paginacion = () => {
  return <nav aria-label="...">
    <ul className="pagination justify-content-center mt-4">
      <li className="page-item"><a className="page-link" href="/MenuAdminClientes">Clientes</a></li>
      <li className="page-item active" aria-current="page">
        <span className="page-link">Tipo de Cambio</span>
      </li>

      <li className="page-item"><a className="page-link" href="#">Operaciones</a></li>
    </ul>
  </nav>
}

export default Paginacion