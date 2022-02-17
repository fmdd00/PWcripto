const Opciones = () => {
    return <div>
        <h2>Opciones</h2>
        
        <div className="list-group mt-4 ">
            <a href="/Login" className="list-group-item list-group-item-action " aria-current="true">
            Comprar/Vender
            </a>
            <a href="/Registro" className="list-group-item list-group-item-action active">Historial</a>
            <a href="/Registro" className="list-group-item list-group-item-action">Cerrar Sesión</a>
      
            
        </div>
    </div>
}

export default Opciones