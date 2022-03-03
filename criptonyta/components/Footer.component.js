import Link from 'next/link'
const Footer = () => {
    return <div className="card mt-16 Footer">
        <div className="card-body">
            <div className="row row-cols-auto">
                <div className="col">
                <Link href="/Nosotros">
        <a className="text-decoration-underline" >Nosotros</a>
      </Link>
                    
                </div>
                <div>
                <Link href="/TerminosCondiciones">
        <a className="text-decoration-underline">Términos y condiciones</a>
      </Link>
                    
                </div>
                <div>
                    <p className="fw-bold">Grupo 5</p>
                </div>
                <div>
                    <p className="fw-bold">2022</p>
                </div>
            </div>
        </div>
    </div>
}

export default Footer