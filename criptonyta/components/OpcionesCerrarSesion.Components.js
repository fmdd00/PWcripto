const OpcionesCerrarSesion = () => {
    return <div>
        <h2 className="mt-4">Opciones</h2>
        
        <div class="list-group mt-4 ">
            <a href="/Login" class="list-group-item list-group-item-action " aria-current="true">
            Comprar/Vender
            </a>
            <a href="/Registro" class="list-group-item list-group-item-action ">Historial</a>
            <a href="/Registro" class="list-group-item list-group-item-action active">Cerrar Sesión</a>
      
            
        </div>
    </div>
}

export default OpcionesCerrarSesion