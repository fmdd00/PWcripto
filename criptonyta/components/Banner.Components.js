const Banner = (props) => {
    return <div>
        <div id="carouselExampleControls" className="carousel slide mt-4 BannerIndex" data-bs-ride="carousel">
            <div className="carousel-inner">
                
                <div className="carousel-item active">
                    <img src="https://kevinmelgarejo.com/wp-content/uploads/2018/02/Invertir-en-Bitcoin-C%C3%B3mo-hacerlo..jpg" className="d-block w-100 IMG1" alt="..."/>
                </div>
                <div className="carousel-item ">
                    <img src="https://cnnespanol.cnn.com/wp-content/uploads/2017/12/171207160257-cnn-money-bitcoin-explainer-full-169.jpg?quality=100&strip=info" className="d-block w-100" alt="..."/>
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