import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// import { Pagination, Autoplay } from "swiper";
// import slides from "./Carousel.json";
import Timer from "./CountDown/countDown";

// Import Styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

// function shuffle(array) {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// }

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
      className="min-h-screen grid grid-cols-1 xl:grid-cols-5 md:gap-1"
    >
      <div className=" hidden md:block fixed top-0 left-0 z-10 m-4">
        <a
          href="https://specnith.com/"
          target="_blank"
          rel="noreferrer noopenor"
        >
          <picture>
            <source srcSet="spec_logo.webp" type="image/webp" />
            <img src="spec_logo.png" className="h-auto w-32" alt="SPEC Logo" />
          </picture>
        </a>
      </div>
      <div
        className="m-auto md:col-span-2"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="relative mx-0 md:pb-20 lg:pb-28 xl:pb-32 lg:max-w-2xl lg:w-full">
          <main className="mt-2 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 lg:py-8 xl:mt-28">
            <div className="text-center lg:text-left ">
              <div className="flex justify-center md:hidden">
                <a
                  href="https://specnith.com/"
                  target="_blank"
                  rel="noreferrer noopenor"
                >
                  <picture>
                    <source srcSet="spec_logo.webp" type="image/webp" />
                    <img
                      src="spec_logo.png"
                      className="h-auto w-32"
                      alt="SPEC Logo"
                    />
                  </picture>
                </a>
              </div>
              <h1 className="text-4xl md:tracking-tight text-center md:text-left sm:text-5xl md:text-7xl">
                <span className="xl:inline font-extrabold header-theme"></span>
                <span className="xl:inline font-extrabold header-theme">
                  Electrothon
                </span>
                <span className="ml-5 md:ml-3 xl:inline font-extrabold header-theme">
                  4.0
                </span>
                <span className="block text-pink-400 text-normal font-medium md:mt-0 mt-1.5">
                  2k22
                </span>
                <span className="block text-white text-xl tracking-wider mt-2">
                  18th-20th February, 2022
                </span>
              </h1>
              <p className="mt-6 text-base text-center md:text-left text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                SEARCH | PLAN | ENGAGE | CREATE
              </p>
              <div className="mt-5 sm:mt-8 sm:flex justify-center md:justify-start">
                <div
                  className="apply-button h-full"
                  data-hackathon-slug="electrothon-4"
                  data-button-theme="light"
                ></div>
              </div>
              {/* <div className="flex justify-center md:justify-start space-x-5 mt-6 opacity-80">
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
              </div> */}
            </div>
          </main>
        </div>
      </div>
      <div className="flex md:items-center justify-center block h-4/5 w-full md:col-span-3">
        <Timer />
        {/* <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ dynamicBullets: true, clickable: true }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={0}
          slidesPerView={1}
          lazy={true}
          className="hero-container mt-8 sm:mt-24 px-6 sm:px-10 md:px-0"
        >
          {shuffle(slides).map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="each-slide overflow-hidden bg-contain"
                  key={index}
                > */}
        {/* <img
                    src={"electrothon/" + image.url}
                    alt={image.caption}
                    className="hero-background"
                  /> */}
        {/* <picture className="hero-background">
                    <source srcSet={image.webp} type="image/webp" />
                    <img
                      className="hero-background"
                      src={image.url}
                      alt={image.caption}
                    />
                  </picture>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>*/}
      </div>
    </section>
  );
}
