const Banner = (props) => {
    return <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                
                <div class="carousel-item active">
                    <img src="https://www.cronista.com/files/image/119/119782/5ff75e921cc1d.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item ">
                    <img src="https://finanzasycredito.mx/sites/finanzasycredito.mx/files/mx-guide-tipo-de-cambio-825x293.png" class="d-block w-100" alt="..."/>
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    
        </div>
}

export default Banner