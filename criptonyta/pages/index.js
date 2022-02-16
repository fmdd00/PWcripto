import Footer from "../components/Footer.component"
import Header from "../components/Header.component"
import Images from "next/image"

export default function Home() {
  return <div className="container">
    <Header />
    <h1>Grupo 5</h1>
    <div className="row">
      <div className="col">
        <Images src={"/images/cripto.jpg"} width={200} height={200} />
      </div>
      <div className="col">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, ultricies penatibus dui sociis a mollis,
          vivamus aenean euismod dignissim conubia porttitor. Montes lobortis ante lectus hendrerit erat metus
          eu nisi in enim non sociosqu, odio luctus sagittis turpis donec eget hac bibendum nisl commodo. Malesuada
          porttitor quisque euismod facilisi eros pellentesque convallis cursus interdum, laoreet lectus nascetur integer
          libero at arcu accumsan sociis viverra, vehicula justo primis netus montes rutrum tellus penatibus.
        </p>
      </div>
    </div>
    <Footer />
  </div>
}
