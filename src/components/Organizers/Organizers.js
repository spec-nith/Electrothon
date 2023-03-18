import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  organizersFinal,
  organizersThird,
  leadOrganizers,
} from "./OrganizersData";
import OrganizerCard from "./OrganizerCard";

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    // removes default buttons
    arrows: true,
    // dots: true,
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="text-4xl lg:text-6xl font-bold text-[#8471ae] tracking-wider my-16 lg:my-24 font-[Oswald] text-center">
        Organizing Team
      </div>
      <div className="text-2xl lg:text-4xl font-bold text-[#8471ae] tracking-wider my-16 lg:my-24 font-[Oswald] text-center">
        Lead Organizers
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full items-center gap-20 mb-20">
        {leadOrganizers.map((card, index) => (
          <OrganizerCard data={card} key={index} lead={true} />
        ))}
      </div>
      <div className="text-2xl lg:text-4xl font-bold text-[#8471ae] tracking-wider my-16 lg:my-24 font-[Oswald] text-center">
        Organizers
      </div>
      <div className="mx-auto max-w-[80vw]  text-white p-4 ">
        <Slider ref={setSliderRef} {...sliderSettings}>
          {organizersFinal.map((card, index) => (
            <OrganizerCard data={card} key={index} />
          ))}
        </Slider>
        <div className="mt-20">
          <Slider ref={setSliderRef} {...sliderSettings}>
            {organizersThird.map((card, index) => (
              <OrganizerCard data={card} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
