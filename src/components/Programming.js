import React from "react";
import "./Programming.css"
import home_07 from "../assets/Assitência.png";
import { Parallax } from "react-parallax";


const Programming = () => {

   return (
    <div className="programming">
          <Parallax strength={650} className="background-programming">
          <div className='content_programming'>
           <div className="programming__content">
             <h1 className="programming__title">Lazer</h1>
             <p className="programming_subtitle">Confira as programações de destaque da semana! </p>
           
           </div>
        </div>
        /</Parallax>
        </div>
      );
    };

export default Programming