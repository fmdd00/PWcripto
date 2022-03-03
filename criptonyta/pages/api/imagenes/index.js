// Path: /api/imagenes
const imagenesHandler = (req, res) => {
    if (req.method == "GET") {
        const imagenes = [
            "https://kevinmelgarejo.com/wp-content/uploads/2018/02/Invertir-en-Bitcoin-C%C3%B3mo-hacerlo..jpg",
            "https://cnnespanol.cnn.com/wp-content/uploads/2017/12/171207160257-cnn-money-bitcoin-explainer-full-169.jpg?quality=100&strip=info"
        ]
        res.json({
            images : imagenes,
            msg : ""
        })
    }else{
        res.status(400).json({
            msg : "Error, metodo no disponible"
        })
    }
}

export default imagenesHandler