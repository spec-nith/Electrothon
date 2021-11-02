import React from "react";
import "./milestones.css";
import Stats from "./stats.json";
export default function milestone() {
  return (
    <section
      id="milestone"
      className="relative overflow-hidden mt-2 container-theme p-6"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
    >
      <div className="container mx-auto">
        <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
          Milestones
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center mt-2">
          {Stats.map((stat, index) => {
            return (
              <div className="p-4 w-full" key={index}>
                <div
                  className={
                    "h-full grid grid-cols-1 grid-rows-5 px-4 py-6 rounded-lg " +
                    stat.theme
                  }
                >
                  <div className="row-span-4 flex items-center">
                    <picture className="m-auto">
                      <source srcSet={stat.webp} type="image/webp" />
                      <img src={stat.src} alt="participant" />
                    </picture>
                  </div>
                  <div>
                    <h2 className="title-font font-medium text-3xl text-white font-bold">
                      {stat.value}
                    </h2>
                    <span className="leading-relaxed text-white">
                      {stat.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
