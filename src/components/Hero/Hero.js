import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slides from "./Carousel.json";
import "css-doodle";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function Introduction() {
  const properties = {
    duration: 3000,
    autoplay: true,
    transitionDuration: 2000,
    arrows: false,
    infinite: true,
    easing: "ease",
    pauseOnHover: true,
    // indicators: (i) => <div className="indicator">{i + 1}</div>
  };

  return (
    <section
      id="home"
      className="pt-16 min-h-screen grid grid-cols-1 xl:grid-cols-5 gap-1"
    >
      <div
        className="m-auto md:col-span-2"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="relative mx-0 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 lg:max-w-2xl lg:w-full">
          <main className="mt-2 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 lg:py-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:tracking-tight text-center md:text-left sm:text-5xl md:text-6xl">
                <span className="xl:inline font-extrabold header-theme">
                  Electrothon
                </span>
                <span className="ml-5 md:ml-3 xl:inline font-extrabold header-theme">
                  4.0
                </span>
                <span className="block text-indigo-600 text-normal md:mt-0 mt-1.5">
                  2022
                </span>
                <span className="block text-indigo-600 text-xl tracking-wider mt-2">
                  19th-20th February, 2022
                </span>
              </h1>
              <p className="mt-6 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                SEARCH | PLAN | ENGAGE | CREATE
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://forms.gle/BA1EakiL14rA6xcX7/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button
                      className={`w-full items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700  ${
                        false ? "cursor-not-allowed" : "hover:bg-indigo-500"
                      } md:py-4 md:text-lg md:px-10 z-1`}
                    >
                      Register Now
                    </button>
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://specnith.com/electrothon.html"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-blue-300 hover:text-white md:py-4 md:text-lg md:px-10">
                      Electrothon 3.0
                    </button>
                  </a>
                </div>
              </div>
              <span className="md:mt-0.5 mt-4 sm:flex sm:justify-center lg:justify-start">
                <a
                  href="https://drive.google.com/file/d/10KVmRYHKAQIkMVR3nFIqbaPpL1wpMYTz/view?usp=drivesdk"
                  className="pt-4 text-sm text-gray-400 sm:text-base sm:max-w-xl sm:mx-auto md:text-lg lg:mx-0"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  CODE OF CONDUCT
                </a>
              </span>
            </div>
          </main>
        </div>
      </div>
      <div
        className="mx-auto block h-full w-full col-span-3"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        <Slide
          {...properties}
          className="hero-container mt-8 sm:mt-24 px-6 sm:px-10 md:px-0"
        >
          {shuffle(slides).map((element, index) => (
            <div className="each-slide overflow-hidden bg-contain" key={index}>
              <img
                src={"electrothon/" + element.url}
                alt={element.caption}
                className="hero-background"
              />
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
}
