import React from "react";
import { sponsorData } from "./Data";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "./CarouselStyle.css";
import SponsorCompo from "./sponsor-tier-comp";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const slider = (
  <AutoplaySlider
    play={true}
    interval={5000}
    mobileTouch={true}
    organicArrows={false}
  >
    {sponsorData.map((element) => (
      <div className="bg-transparent h-auto">
        <SponsorCompo key={element.id} sponsor={element} />
      </div>
    ))}
  </AutoplaySlider>
);

export default function Sponsors() {
  return (
    <div>
      <section
        id="sponsors"
        className="relative overflow-hidden mt-2 container-theme p-6"
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
          Sponsors
        </h1>
        <div className="mt-5 md:mt-0">{slider}</div>
        <div className="mt-6 flex items-center justify-center">
          {" "}
          <a
            href="https://drive.google.com/file/d/1P_-npMEWQtOUAWnuJH66aK5h7sCxSgRy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-center px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-400 hover:text-white md:py-4 md:text-lg md:px-10">
              Sponsorship Brochure
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
