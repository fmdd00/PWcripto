import Link from 'next/link'
const Encabezado=()=>{
    return <ul className="nav nav-tabs nav justify-content-end">
      <li className="nav-item">
      <Link href="/">
        <a className="nav-link ">Inicio</a>
      </Link>
      
    </li>
    <li className="nav-item">
    <Link href="/Nosotros">
        <a className="nav-link ">Conocenos</a>
      </Link>
      
    </li>
    <li className="nav-item">
    <Link href="/VerTipoCambio">
        <a className="nav-link">Opciones</a>
      </Link>
    </li>
    <li className="nav-item">
      <a className="nav-link active"  aria-current="page" href="#">Cuenta</a>
    </li>
   
  </ul>
}

export  default Encabezado