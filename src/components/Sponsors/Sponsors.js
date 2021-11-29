import React from "react";
import {carouselData} from './Data';
import './SponsorCarousel.css';

export default function Sponsors() {

  const slider = <div className="sponsor-carouselBody">

    <div className="sponsor-slider">
      <div className="sponsor-slide-track">
        {carouselData.map(element => (
          <div className="sponsor-slide ">
            <img className="h-full" src={element} alt="carousel" />
          </div>
        ))}
      </div>
    </div>
  </div>
  return (
    <div>
            <section
        id="whats-new"
        className="relative overflow-hidden mt-2 container-theme p-6"
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
      <h1 className="text-4xl tracking-tight md:text-5xl leading-normal md:leading-relaxed header-theme text-center">Sponsors</h1>
       <div className="mt-5 md:mt-0">{slider}</div>
       <div className="text-right text-white">  <a
              href="https://drive.google.com/file/d/1P_-npMEWQtOUAWnuJH66aK5h7sCxSgRy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white"
            >
              Sponsorship Brochure
            </a></div>
        </section>
    </div>
  );
}
