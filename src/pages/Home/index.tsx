import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import News from "./News";
import Programming from "./ProgramingHome";
import Slider from "./Slider";



function Home() {

  return (

    <div className="menu">
        <Navbar />
        <br />
        <br />
        <Slider />
        <br />
        <br />
        <Programming />
        <br />
        <br />
        <News />
        <br />
        <br />
        <Footer />
    </div>

  );
}

export default Home;
