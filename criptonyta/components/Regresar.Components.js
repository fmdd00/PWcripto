import { useRouter } from 'next/router'

const Regresar =()=>{
    const router = useRouter()

    return <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" className="btn btn-primary" onClick={ () => router.back() }>Regresar</button>
    </div>

}

export default Regresar
