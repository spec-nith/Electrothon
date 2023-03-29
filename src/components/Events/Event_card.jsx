import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const sliderSettings = {
  // removes default buttons
  arrows: true,
  // dots: true,
  centerMode: true,
  // className: "center",
  // adaptiveHeight: true,
  centerPadding: "60px",
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 800,
  dots: true,
  autoplaySpeed: 5000,
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0px",
      },
    },
  ],
};

export default function EventCard(props) {
  const [sliderRef, setSliderRef] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(()=>{
    setCurrentSlide(0);
    console.log("called")
  },[props])
  // console.log(props.data, currentSlide);
  return (
    <div className="w-full">
      {props.data.length !== 0 ? (
        <div className="justify-center space-x-2 md:flex">
          <div className="mx-auto md:w-[50%] w-full text-white p-4 ">
            <Slider
              ref={setSliderRef}
              {...sliderSettings}
              afterChange={async (index) => {
                setCurrentSlide(index);
              }}
            >
              {props.data.map((event, index) => (
                <picture className="">
                  <source
                    srcSet={event.webp}
                    type="image/webp"
                    media="(max-width: 600px)"
                  />
                  <img
                    src={event.img}
                    className="w-[400px] rounded-3xl"
                    alt="Event"
                  />
                </picture>
              ))}
            </Slider>
          </div>
          <div className="text-white hidden md:flex md:justify-center items-center w-[50%]  bg-gradient-to-br from-[rgba(209,209,209,0.2)] to-[rgba(209,209,209,0.1)] backdrop-blur-[5px] rounded-3xl lg:h-auto md:h-[600px]">
            <div className="flex flex-col justify-evenly p-8 space-y-8 h-[90%]">
              <div className="p-2 text-4xl font-bold text-center">
                {props.data[currentSlide] ? props.data[currentSlide].name : ""}
              </div>
              <div className=" h-[60%] overflow-y-scroll align-middle text-center text-lg">
                {props.data[currentSlide] ? props.data[currentSlide].desc : ""}
              </div>

              {props.title !== "Previous" ? (
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  <a
                    href={props.data[currentSlide] ? props.data[currentSlide].link : ""}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Register Now
                  </a>
                </button>
              ) : null}
            </div>
          </div>
          {props.title !== "Previous" ? (
            <div className="mt-6 text-center md:hidden">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md  px-10 py-2.5 text-center  "
              >
                <a
                  href={props.data[currentSlide] ? props.data[currentSlide].link : ""}
                  target="_blank"
                  rel="noreferrer"
                >
                  Register Now
                </a>
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="text-xl text-center text-white">
          No {props.title} Events Found
        </div>
      )}
    </div>
  );
}
