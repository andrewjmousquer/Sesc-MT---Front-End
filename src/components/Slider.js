import React, { useState } from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ imageSrc, title, subtitle, flipped }) => {


  const [slider, setSlider] = useState(false);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });


  const changeBackground = () => {
    if(window.scrollY >= 680) {
      setSlider(true)
    } else {
      setSlider(false);
    }
  }

  window.addEventListener('scroll', changeBackground)

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="slider" className="slider__image" />
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
            <button className="button__slider">detalhes</button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
            <button className="button__slider">detalhes</button>
          </div>
          <img src={imageSrc} alt="Travel" className="slider__image" />
        </>
      );
    }
  };

  return (
    <div className={slider ? 'slider--zoom' : 'slider--zoom-active'}slider--zoom>
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
    </div>
  );
};

export default Slider;
