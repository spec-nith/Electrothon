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
    interval={300000}
    mobileTouch={true}
    organicArrows={false}
  >
    {themeArray.map((e, index) => {
      return (
        <div
          className="grid grid-cols-1 md:grid-cols-5 gap-8 h-96 w-full"
          key={index}
        >
          <div className="md:col-span-2 track-image">
            <picture className="m-auto">
              <source srcSet={e.webp} type="image/jpeg" />
              <img
                src={e.image}
                className="object-contain"
                alt="Electrothon Logo"
              />
            </picture>
          </div>
          <div className="md:col-span-3">
            <div className="track-text-outline h-full md:w-40"></div>
            <h1 className="text-3xl md:text-4xl md:leading-relaxed header-theme pb-6">
              {e.title}
            </h1>
            <span className="text-xl md:text-2xl content-theme">
              {e.content}
            </span>
          </div>
        </div>
      );
    })}
  </AutoplaySlider>
);
export default function Themes() {
  return (
    <section id="themes" className="h-auto md:pb-6 mt-10 container-theme">
      <div className="w-full">
        <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
          Themes
        </h1>
      </div>
      <div className="p-8">{slider}</div>
    </section>
  );
}
