import "./App.css";
import HomeView from "./assets/COLÔNIA DE FÉRIAS SESC - 2022.mp4"
import home_Logo from "./assets/Icon_Search.png";
import Sesc_Logo from "./assets/logo Sesc.png";
import setaHome from "./assets/Seta_Vector.png";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Programming from "./components/Programming";
import Footer from "./components/Footer";
import News from "./components/News";
import QuickAccess from "./components/QuickAccess";

function App() {
  const navbarLinks = [
    { url: "#", title: "Institucional" },
    { url: "#", title: "Cartão Sesc" },
    { url: "#", title: "Serviços" },
    { url: "#", title: "Unidades" },
    { url: "#", title: "Programação" },
    { url: "#", title: "Sesc TV" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} imageIcon={home_Logo} imageLogo={Sesc_Logo} placeholder="Buscar..."/>
      <Hero imageSrc={HomeView} imgSeta={setaHome} />
      <br/>
      <br/>
      <Slider />
      <br/>
      <br/>
      <Programming />
      <br/>
      <br/>
      <News/>
      <br/>
      <br/>
      <QuickAccess />
      <Footer logoSesc={Sesc_Logo}/>
    </div>
  );
  
}

export default App;
