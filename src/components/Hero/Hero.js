import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Pagination, Autoplay } from "swiper";
import slides from "./Carousel.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin,faDiscord,faFacebook,faTwitter } from "@fortawesome/free-brands-svg-icons";

// Import Styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

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
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen grid grid-cols-1 xl:grid-cols-5 gap-1"
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
                <span className="block text-indigo-600 text-normal font-medium md:mt-0 mt-1.5">
                  2022
                </span>
                <span className="block text-white text-xl tracking-wider mt-2">
                  19th-20th February, 2022
                </span>
              </h1>
              <p className="mt-6 text-base text-center md:text-left text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                SEARCH | PLAN | ENGAGE | CREATE
              </p>
              <div className="mt-5 sm:mt-8 sm:flex justify-center md:justify-start">
                {/* <div className="rounded-md shadow">
                  <a
                    href="https://forms.gle/BA1EakiL14rA6xcX7/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button
                      className={`w-full items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700  ${
                        false ? "cursor-not-allowed" : "hover:bg-indigo-400"
                      } md:py-4 md:text-lg md:px-10 z-1`}
                    >
                      Register Now
                    </button>
                  </a>
                </div> */}
                <div
                  className="apply-button h-full"
                  data-hackathon-slug="electrothon-4"
                  data-button-theme="light"
                ></div>
                {/* Electrothon 3.0 button */}
                {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://specnith.com/electrothon.html"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="w-full flex items-center justify-center px-8 border border-transparent text-base font-medium rounded-sm text-indigo-700 bg-white hover:bg-blue-500 hover:text-white py-1.5 md:text-lg md:px-6 whitespace-nowrap">
                      Electrothon 3.0
                    </button>
                  </a>
                </div> */}
              </div>
              <div className="flex justify-center md:justify-start space-x-5 mt-6 opacity-80">
                <a
                  href="https://discord.gg/cjMMRs7tHs"
                  rel="noreferrer noopenor"
                  target="_blank">
                  <FontAwesomeIcon className="text-3xl text-blue-800 fill-current" icon={faDiscord} />
                </a>
                <a
                  href="https://www.facebook.com/spec.ece/"
                  rel="noreferrer noopenor"
                  target="_blank">
                  <FontAwesomeIcon className="text-3xl text-blue-600 fill-current" icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com/SPEC__NITH"
                  rel="noreferrer noopenor"
                  target="_blank">
                  <FontAwesomeIcon className="text-3xl text-blue-300 fill-current" icon={faTwitter} />
                </a>
                <a
                  href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83"
                  rel="noreferrer noopenor"
                  target="_blank">
                  <FontAwesomeIcon className="text-3xl text-pink-600 fill-current" icon={faInstagram} />
                </a>
                <a
                  href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
                  rel="noreferrer noopenor"
                  target="_blank">
                  <FontAwesomeIcon className="text-3xl text-blue-500 fill-current" icon={faLinkedin} />
                </a>
              </div>
              <p className="mt-6 text-base text-gray-400 text-center md:text-left sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <a
                  href="https://drive.google.com/file/d/10KVmRYHKAQIkMVR3nFIqbaPpL1wpMYTz/view?usp=drivesdk"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  CODE OF CONDUCT
                </a>
              </p>
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
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ dynamicBullets: true, clickable: true }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={0}
          slidesPerView={1}
          className="hero-container mt-8 sm:mt-24 px-6 sm:px-10 md:px-0"
        >
          {shuffle(slides).map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="each-slide overflow-hidden bg-contain"
                  key={index}
                >
                  <img
                    src={"electrothon/" + image.url}
                    alt={image.caption}
                    className="hero-background"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
