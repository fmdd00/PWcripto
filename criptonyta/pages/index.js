import Banner from "../components/Banner.Components"
import Footer from "../components/Footer.component"
import Header from "../components/Header.component"
import Login from "../components/Login.Components"
import PiePagina from "../components/PiePagina.Components"
export default function Home() {
  return <body className="fondoPrincipal">
    <div  >
      <Header />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <h1 className="titulo">Crypto-nita</h1>
      <div className="row">
        <div className="col">
          <Banner />
        </div>
        <div className="col mt-4 indextext">
          <p>
            Bienvenidos a nuestro proyecto Crypto-nita del curso de Programación
            Web. Crypto-nita es una página web que permite cambiar de manera 
            virtual los bitcoins a soles y/o soles a bitcoins.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  </body>
}
