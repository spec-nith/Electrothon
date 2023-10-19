 


import "./gallary.css";
import { useState } from "react";
import Slider from "react-slick";
 import img1 from "./images/img1.jpeg"
 import img2 from "./images/img2.jpeg"
 import img3 from "./images/img3.jpeg"
 import img4 from "./images/img4.jpeg"
 import img5 from "./images/img5.jpeg"
 import img6 from "./images/img6.jpeg"
 import img7 from "./images/img7.jpeg"
 import img8 from "./images/img8.jpeg"
 
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";

const images = [img1,img2,img3,img4,img5,img6,img7,img8];

function Gallary() {

  const NextArrow = ({ onClick }) => {
    return (
        
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    autoplay: true,  
    autoplaySpeed: 2000, 
  };

  return (
    <>
    <div className="mb-20 text-center">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TitleText
        title={
          <>
            <div className="text-4xl lg:text-7xl font-bold text-[#8471ae] mt-4 lg:my-6 font-[Oswald]">
           Moments
            </div>
          </>
        }
        textStyles="text-center"
      />
    </motion.div>
  </div>

    <div className="Gallary">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
}

export default Gallary;