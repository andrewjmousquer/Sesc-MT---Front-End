import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Programming.css"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const Programming = ({ imageSrc, title, subtitle, flipped, imgCalendar }) => {

    const carrosel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
      console.log(carrosel.current?.scrollWidth, carrosel.current?.offsetWidth);
      setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
    }, [])

    const { ref, inView } = useInView({
    
        threshold: 0.4,
      });

      const renderContent = () => {
        if (!flipped) {
          return (
            <>
              <img src={imageSrc} alt="Travel" className="programming__image" />
              <div className="programming__content">
              <img src={imgCalendar} alt="Calendar" className="calendar__image" />
                <h1 className="programming__title">{title}</h1>
                <p>{subtitle}</p>
              </div>
            </>
          );
        } else {
          return (
            <>
              <div className="programming__content">
                <h1 className="programming__title">{title}</h1>
                <p className="programming__subtitle">{subtitle}</p>
              </div>
              <motion.div ref={carrosel} className="carrosel" whileTap={{cursor: "grabbing"}}>
                <motion.div 
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width}}
                initial={{ x: 100}}
                animate={{x: 0}}
                transition={{ duration: 0.8 }}
                >
                  {imageSrc.map(imageSrc => (
                    <motion.div key={imageSrc}>
                      <img src={imageSrc} alt="programs" className="programming__image" />      
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </>
          );
        }
      };
    
      return (
        <div className={inView ? "programming programming--zoom" : "programming"} ref={ref}>
          {renderContent()}
        </div>
      );
    };

export default Programming