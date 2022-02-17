import Banner from "../components/Banner.Components"
import Footer from "../components/Footer.component"
import Header from "../components/Header.component"
import Login from "../components/Login.Components"
import PiePagina from "../components/PiePagina.Components"

export default function Home() {
  return <div >
    <div >
      <Header />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      
      <div className="row">
        <div className="col">
          <Banner />
        </div>
      </div>
        <div className="col mt-4 textoIndex">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, ultricies penatibus dui sociis a mollis,
            vivamus aenean euismod dignissim conubia porttitor. Montes lobortis ante lectus hendrerit erat metus
            eu nisi in enim non sociosqu, odio luctus sagittis turpis donec eget hac bibendum nisl commodo. Malesuada
            porttitor quisque euismod facilisi eros pellentesque convallis cursus interdum, laoreet lectus nascetur integer
            libero at arcu accumsan sociis viverra, vehicula justo primis netus montes rutrum tellus penatibus.
          </p>
        </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  </div>
}
