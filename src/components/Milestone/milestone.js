import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./milestones.css";

import Stats from "./stats.json";

gsap.registerPlugin(ScrollTrigger);

const Milestone = () => {
  useEffect(() => {
    gsap.utils.toArray(".counter0").forEach(function (el) {
      var target = { val: 0 };
      gsap.to(target, {
        scrollTrigger: {
          trigger: "#milestone",
          start: "top center",
          toggleActions: "play complete complete complete",
        },
        val: el.getAttribute("data-number"),
        duration: 3,
        onUpdate: function () {
          el.innerText = target.val.toFixed(1);
        },
      });
    });

    gsap.utils.toArray(".counter1").forEach(function (el) {
      var target = { val: 0 };
      gsap.to(target, {
        scrollTrigger: {
          trigger: "#milestone",
          start: "top center",
          toggleActions: "play complete complete complete",
        },
        val: el.getAttribute("data-number"),
        duration: 3,
        onUpdate: function () {
          el.innerText = target.val.toFixed(0);
        },
      });
    });

    gsap.utils.toArray(".counter2").forEach(function (el) {
      var target = { val: 0 };
      gsap.to(target, {
        scrollTrigger: {
          trigger: "#milestone",
          start: "top center",
          toggleActions: "play complete complete complete",
        },
        val: el.getAttribute("data-number"),
        duration: 3,
        onUpdate: function () {
          el.innerText = target.val.toFixed(0);
        },
      });
    });
    gsap.utils.toArray(".counter3").forEach(function (el) {
      var target = { val: 0 };
      gsap.to(target, {
        scrollTrigger: {
          trigger: "#milestone",
          start: "top center",
          toggleActions: "play complete complete complete",
        },
        val: el.getAttribute("data-number"),
        duration: 3,
        onUpdate: function () {
          el.innerText = target.val.toFixed(0);
        },
      });
    });
  }, []);
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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-center mt-2"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-cubic"
        >
          {Stats.map((stat, index) => {
            return (
              <div className="p-4 w-full h-28r md:h-30r" key={index}>
                <div
                  className={
                    "h-full grid grid-cols-1 grid-rows-5 px-4 py-6 rounded-lg " +
                    stat.theme
                  }
                >
                  <div className="row-span-4 flex items-center justify-center flex-col">
                    <picture className="">
                      <source srcSet={stat.webp} type="image/webp" />
                      <img className="" src={stat.src} alt="participant" />
                    </picture>
                  </div>

                  <div className="counters">
                    <p className="title-font font-medium text-4xl text-white font-bold my-2">
                      <span
                        className={`counter${index}`}
                        data-number={stat.value}
                      >
                        0
                      </span>
                      {stat.suffix}
                    </p>

                    <span className="leading-relaxed font-medium text-xl text-white mb-2">
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
};

export default Milestone;
