import "./styles.css";
import { Parallax } from "react-parallax";

import home_02 from "../../../assets/Educação.png";
import home_03 from "../../../assets/Cultura.png";
import home_04 from "../../../assets/Saúde.png";
import home_05 from "../../../assets/Lazer.png";
import home_06 from "../../../assets/Assitência.png";

function Slider() {
  return (
    <div className="Slider">
      <Parallax strength={650} className="background_education">
        <div className="content">
          <img src={home_02} alt="slider" className="slider__image" />
          <div className="slider__content">
            <h1 className="slider__title">Educação</h1>
            <p className="slider_subtitle">
              Crianças, jovens, adultos e idosos encontram no Sesc um ambiente
              que promove o desenvolvimento integral, respeita as identidades
              culturais e os valores éticos e de cidadania.{" "}
            </p>
            <button className="button__slider">+ detalhes</button>
          </div>
        </div>
        /
      </Parallax>
      <Parallax strength={650} className="background-culture">
        <div className="content">
          <div className="slider__content">
            <h1 className="slider__title">Cultura</h1>
            <p className="slider_subtitle">
              Crianças, jovens, adultos e idosos encontram no Sesc um ambiente
              que promove o desenvolvimento integral, respeita as identidades
              culturais e os valores éticos e de cidadania.{" "}
            </p>
            <button className="button__slider">+ detalhes</button>
          </div>
          <img src={home_03} alt="slider" className="slider__image" />
        </div>
        /
      </Parallax>
      <Parallax strength={650} className="background-heath">
        <div className="content">
          <img src={home_04} alt="slider" className="slider__image" />
          <div className="slider__content">
            <h1 className="slider__title">Saúde</h1>
            <p className="slider_subtitle">
              Crianças, jovens, adultos e idosos encontram no Sesc um ambiente
              que promove o desenvolvimento integral, respeita as identidades
              culturais e os valores éticos e de cidadania.{" "}
            </p>
            <button className="button__slider">+ detalhes</button>
          </div>
        </div>
        /
      </Parallax>
      <Parallax strength={650} className="background-funny">
        <div className="content">
          <div className="slider__content">
            <h1 className="slider__title">Lazer</h1>
            <p className="slider_subtitle">
              Crianças, jovens, adultos e idosos encontram no Sesc um ambiente
              que promove o desenvolvimento integral, respeita as identidades
              culturais e os valores éticos e de cidadania.{" "}
            </p>
            <button className="button__slider">+ detalhes</button>
          </div>
          <img src={home_05} alt="slider" className="slider__image" />
        </div>
        /
      </Parallax>
      <Parallax strength={650} className="background-assistence">
        <div className="content">
          <img src={home_06} alt="slider" className="slider__image" />
          <div className="slider__content">
            <h1 className="slider__title">Assitência</h1>
            <p className="slider_subtitle">
              Crianças, jovens, adultos e idosos encontram no Sesc um ambiente
              que promove o desenvolvimento integral, respeita as identidades
              culturais e os valores éticos e de cidadania.{" "}
            </p>
            <button className="button__slider">+ detalhes</button>
          </div>
        </div>
        /
      </Parallax>
    </div>
  );
}

export default Slider;
