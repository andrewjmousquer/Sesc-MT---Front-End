import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Hero } from "./Hero";

import News from "./News";
import Programming from "./ProgramingHome";
import Slider from "./Slider";

export function Home() {
  return (
    <div className="menu">
      <Navbar />
      <Hero />
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
