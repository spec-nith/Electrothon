import React from "react";
import "./milestones.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Stats from "./stats.json";
import { useState } from "react";

const Milestone = () => {
  const [isItVisible, setIsItVisible] = useState(true);
  const changeVisibility = (isVisible) => {
    if (isVisible) {
      setTimeout(() => {
        setIsItVisible(false);
      }, 2000);
    }
  };
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
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center mt-2"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-cubic"
        >
          {Stats.map((stat, index) => {
            return (
              <div className="p-4 w-full h-96" key={index}>
                <div
                  className={
                    "h-full grid grid-cols-1 grid-rows-5 px-4 py-6 rounded-lg " +
                    stat.theme
                  }
                >
                  <div className="row-span-4 flex items-center">
                    <picture className="">
                      <source srcSet={stat.webp} type="image/webp" />
                      <img src={stat.src} alt="participant" />
                    </picture>
                  </div>
                  <VisibilitySensor
                    active={isItVisible}
                    onChange={changeVisibility}
                  >
                    {({ isVisible, active }) => (
                      <div>
                        <h2 className="title-font font-medium text-4xl text-white font-bold">
                          {/* <CountUp start={0} end={stat.value} decimals={stat.decimals} duration={2} suffix={stat.suffix}/> */}
                          {isVisible ? (
                            <CountUp
                              start={0}
                              end={stat.value}
                              decimals={stat.decimals}
                              duration={2}
                              suffix={stat.suffix}
                            />
                          ) : (
                            <CountUp
                              end={stat.value}
                              decimals={stat.decimals}
                              suffix={stat.suffix}
                            />
                          )}
                        </h2>
                        <span className="leading-relaxed font-medium text-lg text-white">
                          {stat.name}
                        </span>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Milestone;
