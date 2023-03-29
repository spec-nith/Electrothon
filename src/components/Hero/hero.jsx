import React, { useEffect } from "react";
import Header from "../Header/Header";
import SocialHeader from "../SocialMedia/SocialMedia";
import Timer from "../CountDown/countDown";
import Marquee from "react-fast-marquee";
import { liveEvents } from ".././Events/Data";

export default function Hero(props) {
  // const animationRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    // const heroSection = document.getElementById("hero-section");
    // heroSection.scrollIntoView();
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full" style={props.style}>
      <SocialHeader />
      <Header />
      <div className="flex flex-col items-center justify-center w-full h-screen text-white">
        <div className="flex flex-col items-center justify-center m-auto font-thin text-center lg:w-1/2">
          <p className="select-none text-4xl md:text-6xl lg:text-8xl tracking-widest md:tracking-[0.6rem] lg:tracking-[1rem] hero-heading heading-glow font-bold md:font-light">
            ELECTROTHON
          </p>
          <p className="text-4xl font-bold md:text-6xl lg:text-8xl hero-heading heading-glow md:font-light">
            5.0
          </p>
          <p className="mt-2 font-semibold text-md md:text-lg lg:text-2xl hero-heading">
            MOONSHOT YOUR EUREKA
          </p>
          
          <div className="flex z-[100] flex-col ipadIssue w-full justify-center items-center gap-y-4 mt-6 hero-heading">
            <div
              className="h-full apply-button"
              data-hackathon-slug="electrothon-5"
              data-button-theme="light"
            ></div>

            <a rel="noreferrer" className="items-center px-4 py-2 my-4 font-semibold text-white duration-200 ease-in-out bg-blue-600 md:my-0 hover:bg-blue-400 text-bold rounded-xl ipadIssue2 w-[312px]" target="_blank" href = "https://same-uranium-0e7.notion.site/Hacker-s-Guide-to-ELECTROTHON-5-0-94659968f7d648fda39772bb09660766">
              Hackers Guide
            </a>
          </div>
          <div>
            <Timer />
          </div>
        </div>
        <div
          id="marquee-handler"
          className="absolute md:fixed bottom-[70px] md:bottom-0 w-screen z-10"
        >
          <Marquee
            className="bg-black/[.2] md:bg-black/[.8]"
            gradient={false}
            speed="60"
          >
            {liveEvents.map((event, index) => {
              return (
                <kbd className="p-2 text-white" key={index}>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-white"
                  >
                    {event.name}:{" "}
                    <span className="text-blue-500">Register Now</span>
                  </a>
                </kbd>
              );
            })}
          </Marquee>
        </div>
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
          joined Electrothon over its previous iterations left no stone unturned
          to ideate and amalgamate technologies that transfigure visions into
          reality.
        </p>
      </div>
    </div>
  );
}

Hero.defaultProps = {
  style: {},
};
