import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Pagination, Autoplay } from "swiper";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "./themes.css";

import themeArray from "./themesdata.json";

const slider = (
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ dynamicBullets: true, clickable: true }}
    loop={true}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    spaceBetween={0}
    slidesPerView={1}
  >
    {themeArray.map((e, index) => {
      return (
        <SwiperSlide key={index}>
          <div
            className={`grid grid-cols-1 md:grid-cols-5 md:gap-8 w-full themes-image  theme-block${
              index + 1
            } theme-box`}
            key={index}
          >
            <div className="md:col-span-2 track-image flex items-center justify-center">
              <picture className="m-auto">
                <source srcSet={"3d/webp/" + e.webp} type="image/jpeg" />
                <img
                  src={"3d/" + e.image}
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
                <span className="text-lg md:text-xl lg:text-2xl content-theme min-h-full">
                  {e.content}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
);
export default function Themes() {
  return (
    <section
      id="themes"
      className="h-auto theme-box mt-10"
      data-aos="fade-down"
      data-aos-delay="50"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out-cubic"
    >
      {/* <div className="w-full">
        <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
          Themes
        </h1>
      </div> */}
      <div className="theme-box">{slider}</div>
    </section>
  );
}
