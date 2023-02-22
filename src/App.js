import "./App.scss";
import HomeView from "./assets/COLÔNIA DE FÉRIAS SESC - 2022.mp4";
import home_Logo from "./assets/Icon_Search.png";
import Sesc_Logo from "./assets/logo Sesc.png";
import setaHome from "./assets/Seta_Vector.png";
import Hero from "./pages/Home/Hero";
import Navbar from "./components/Navbar";
import Slider from "./pages/Home/Slider";
import ProgrammingHome from "./pages/Home/ProgramingHome";
import Footer from "./components/Footer";
import News from "./pages/Home/News";
import QuickAccess from "./pages/Home/QuickAccess";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Menu from "./components/Menu";
import Programming from "./pages/Programing";


function App() {

  return (  

    <div className="App">
    <BrowserRouter>
      <Menu/>
      <Hero/>
    </BrowserRouter>
    </div>
  

 
  );
  
}

export default App;



// <Navbar navbarLinks={navbarLinks} imageIcon={home_Logo} imageLogo={Sesc_Logo} placeholder="Buscar..."/>
// <Hero imageSrc={HomeView} imgSeta={setaHome} />
// <br/>
// <br/>
// <Slider />
// <br/>
// <br/>
// {/* <Programming /> */}
// <br/>
// <br/>
// <News/>
// <br/>
// <br/>
// <QuickAccess />
// <Footer logoSesc={Sesc_Logo}/>


// <Menu />
// <br/>
// <br/>
// <Routes>
// <Route path="/" element={<Inicio/>} />
// <Route path="/sobremim" element={<SobreMim/>} />
// <Route path="*" element={<div>Página não encontrada</div>} />
// </Routes>
// <Hero imageSrc={HomeView} imgSeta={setaHome} />
// <br/>
// <br/>
// <Slider />
// <br/>
// <br/>
// // {/* <Programming /> */}
// <br/>
// <br/>
// <News/>
// <br/>
// <br/>
// <QuickAccess />
    
// <Footer logoSesc={Sesc_Logo}/>

