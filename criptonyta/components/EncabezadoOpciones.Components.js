import Link from 'next/link'

const EncabezadoOpciones=()=>{
    return <ul class="nav nav-tabs nav justify-content-end">
      <li className="nav-item">
      <Link href="/">
        <a className="nav-link " >Inicio</a>
      </Link>
      
    </li>
    <li className="nav-item">
    <Link href="/Nosotros">
        <a className="nav-link ">Conocenos</a>
      </Link>
     
    </li>
    <li className="nav-item">

      <a className="nav-link active"   aria-current="page" href="#">Opciones</a>
    </li>
    <li className="nav-item">
    <Link href="/main">
        <a className="nav-link ">Cuenta</a>
      </Link>
     
    </li>
   
  </ul>
}

export  default EncabezadoOpciones