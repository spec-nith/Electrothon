import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import anime from "animejs";
import SocialHeader from "../SocialMedia/SocialMedia";
import Timer from '../CountDown/countDown'

export default function Hero(props) {
  // const animationRef = useRef(null);
  const animeHandler = () => {
    var tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 750,
    });
    tl.add({
      targets: ".social-handler",
      left: ["92%"],
    }).add({
      targets: ".social-handler",
      opacity: ["0", "1"],
    });
    document.removeEventListener("scroll", animeHandler);
    setTimeout(() => {
      const header = document.getElementById("header-handler");
      header.classList.remove("lg:hidden");
    }, 1000);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    // const heroSection = document.getElementById("hero-section");
    // heroSection.scrollIntoView();
    console.log("width", window.innerWidth);
    document.addEventListener("scroll", animeHandler);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full" style={props.style}>
      <SocialHeader />
      <div className="lg:hidden" id="header-handler">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-screen text-white">
        <div className="flex flex-col items-center justify-center m-auto font-thin text-center lg:w-1/2">
          <p className="text-4xl md:text-6xl lg:text-8xl tracking-widest md:tracking-[0.6rem] lg:tracking-[1rem] hero-heading heading-glow font-bold md:font-light">
            ELECTROTHON
          </p>
          <p className="text-4xl font-bold md:text-6xl lg:text-8xl hero-heading heading-glow md:font-light">
            5.0
          </p>
          <p className="mt-2 font-semibold text-md md:text-lg lg:text-2xl hero-heading">
            MOONSHOT YOUR EUREKA
          </p>
          <div className="flex z-[100] w-full justify-center mt-6 hero-heading">
            <div
              className="h-full apply-button"
              data-hackathon-slug="electrothon-5"
              data-button-theme="light"
            ></div>
          </div>
          <div>
            <Timer />
          </div>
        </div>
        {/* <div className="font-[Poppins] mx-6 md:mx-24 lg:mx-auto lg:w-1/2 lg:mt-16 m-auto border-2 border-violet-500 bg-black/30 hero-about">
          <p className="p-4 text-2xl font-semibold text-center lg:font-light md:text-4xl">
            About Us
          </p>
          <p className="px-2 pb-4 leading-normal text-center text-md md:text-xl xl:text-xl lg:font-light md:px-6 md:pb-8 md:leading-relaxed">
            Taking moonshots is no smooth sailing. It's an inherently
            unpredictable ride. As we launch the 5th in-person lunation of
            Electrothon, we strive for nothing less than the moon. Run by the
            student community SPEC under the moonlight of NIT Hamirpur,
            Electrothon has impacted over 5000 students. The budding hackers who
            joined Electrothon over its previous iterations left no stone
            unturned to ideate and amalgamate technologies that transfigure
            visions into reality.
          </p>
        </div> */}


      </div>
      <div className="text-4xl lg:text-6xl font-bold text-[#8471ae] tracking-wider my-4 lg:my-6 font-[Oswald] text-center">
        About Us
      </div>

      <div className="md:w-[900px] rounded-xl p-8 text-white mx-auto opacity-60">
        <p className="text-center paraContent">
          Taking moonshots is no smooth sailing. It's an inherently
          unpredictable ride. As we launch the 5th in-person lunation of
          Electrothon, we strive for nothing less than the moon. Run by the
          student community SPEC under the moonlight of NIT Hamirpur,
          Electrothon has impacted over 5000 students. The budding hackers who
          joined Electrothon over its previous iterations left no stone
          unturned to ideate and amalgamate technologies that transfigure
          visions into reality.
        </p>
      </div>
    </div>
  );
}


Hero.defaultProps = {
  style: {


  },
};
