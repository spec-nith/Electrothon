import React from "react";
import "./themes.css";
import themeArray from "./themesdata.json";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "./CarouselStyle.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    play={true}
    interval={5000}
    mobileTouch={true}
    organicArrows={false}
  >
    {themeArray.map((e, index) => {
      return (
        <div
          className={`grid grid-cols-1 md:grid-cols-5 md:gap-8 w-full themes-image  theme-block${
            index + 1
          } theme-box`}
          key={index}
        >
          <div className="md:col-span-2 track-image flex items-center justify-center">
            <picture className="m-auto">
              <source srcSet={e.webp} type="image/jpeg" />
              <img
                src={e.image}
                className="object-contain w-5/6 m-auto"
                alt="Electrothon Logo"
              />
            </picture>
          </div>

          <div className="md:col-span-3 bg-gray-900 clip-class-theme p-8 2xl:my-20 xl:pt-16 ">
            <div className="track-text-outline h-full md:w-40 "></div>
            <div className="m-auto">
              <h1 className="text-3xl md:text-3xl lg:text-4xl md:leading-relaxed header-theme pb-6 ">
                {e.title}
              </h1>
              <span className="text-lg md:text-xl lg:text-2xl content-theme">
                {e.content}
              </span>
            </div>
          </div>
        </div>
      );
    })}
  </AutoplaySlider>
);
export default function Themes() {
  return (
    <section id="themes" className="h-auto theme-box mt-10">
      {/* <div className="w-full">
        <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
          Themes
        </h1>
      </div> */}
      <div className="theme-box">{slider}</div>
    </section>
  );
}
