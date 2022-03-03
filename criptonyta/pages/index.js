import Banner from "../components/Banner.Components"
import Footer from "../components/Footer.component"
import Header from "../components/Header.component"
import { useEffect, useState } from "react";

export default function Home() {

  const [listaImagenes, setListaImagenes] = useState([])

  useEffect(async () => {

    // Llamada AJAX para cargar lista de urls de imagenes
    const response = await fetch("/api/imagenes")
    const dataImagenes = await response.json()
    setListaImagenes(dataImagenes.images)

}, [])

  return <body className="fondoPrincipal">
    <div className="row"  >
      <Header />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <h1 className="titulo">Crypto-nita</h1>
      <div className="row">
        <div className="col">
          <Banner  images={ listaImagenes } />
        </div>
        <div className="col mt-4 indextext">
          
            Bienvenidos a nuestro proyecto Crypto-nita del curso de Programación
            Web. Crypto-nita es una página web que permite cambiar de manera 
            virtual los bitcoins a soles y/o soles a bitcoins.
               
           </div>
           <div className="col-md-4 offset-md-9  "><img width={240} height={200} src="https://us.123rf.com/450wm/aihero/aihero1611/aihero161100016/66546110-le-revenu-passif-du-mobile-illustration-de-bande-dessin%C3%A9e-d-affaires.jpg"></img>
             </div>
           
      </div>
      
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  </body>
}
