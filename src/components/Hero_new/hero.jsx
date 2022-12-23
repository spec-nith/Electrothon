import React, { useState, useEffect, Suspense } from "react";

import FullMoon from "./assets/FullMoon";

import Milestone from "../milestones_new/milestone";
import Timeline from "../Timeline_new/Timeline";
import Sponsors from "../Sponsors/Sponsors";

export default function Hero(props) {
  return (
    <div
      className="relative font-normal w-[1440px] h-[2099px]"
      style={props.style}
    >
      <div className="max-w-[1240px] " />

      <div
        className={`inset-x-0 absolute top-0 w-[1440px] bottom-[46.59%] bg-[rgba(13,11,12,1)] overflow-clip h-[1121px] font-['Gugi']`}
      >
        <div>
          <div className=" left-px top-0 absolute w-[1440px] h-[978px]" />
        </div>
        <div>
          <div className=" left-px absolute w-[1440px] h-[978px] top-[139px]" />
        </div>
        <div className="text-white text-center">
          <p className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl m-0 w-[535px] left-[calc(50%_-_267.5px_+_0.5px)] top-[calc(50%_-_38.5px_+_456px)] tracking-[-0.32px] leading-[1.2]">
            About Us
          </p>
        </div>
        <div className="text-left text-[rgba(114,114,114,1)] ">
          <div className="[box-shadow:0px_0px_0px_1px_rgba(114,_114,_114,_1)_inset] [box-shadow-width:1px] absolute gap-2.5 flex justify-center items-center p-2.5 w-[191.62px] h-[57px] left-[736.36px] top-[710px] rounded-[1000px]">
            <button className="text-xl m-0 leading-[normal] hover:bg-white  ">
              Learn more
            </button>
          </div>
        </div>
        <div className="text-white text-left">
          <div className="absolute gap-2.5 flex justify-center items-center p-2.5 w-[191.62px] h-[57px] left-[512px] top-[710px] bg-gradient-to-r from-[rgba(121,70,171,1)] to-[rgba(37,101,201,1)] rounded-[1000px]">
            <button className="text-xl m-0 leading-[normal]">
              Register Now
            </button>
          </div>
        </div>
        <div className="text-center text-[rgba(114,114,114,1)]">
          <p className="absolute m-0 left-[562px] top-[643px] text-[26px] leading-[normal]">
            “Moon-Shot Your Eureka”
          </p>
        </div>
        <div className="text-center">
          <p className="[background:linear-gradient(147deg,_rgba(126,_158,_240,_1),_rgba(88,_90,_98,_0.25))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] absolute m-0 opacity-[0.61] w-[639px] left-[401px] top-[139px] text-[450px] leading-[normal]">
            5.0
          </p>
        </div>
        <div className="text-center">
          <p className="bg-gradient-to-b from-white [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] absolute m-0 w-[862px] left-[289px] top-[323px] text-[123px] leading-[normal]">
            ELECTROTHON
          </p>
        </div>
      </div>
      <div className="absolute w-[209px] left-[13.06%] right-[72.43%] top-[1.38%] bottom-[94.81%]">
        <div className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/6a2057604412852caeb9ed93c011fd9e70a2c0d6.webp)_center_/_cover] inset-0 absolute w-[209px]" />
      </div>
      <div
        className={`absolute text-white text-left w-[50px] left-[1.39%] right-[95.14%] top-[9.53%] bottom-[69.18%] font-['Alice']`}
      ></div>

      <p
        className={`absolute text-xs sm:text-sm md:text-base lg:text-lg text-center inline m-0 left-[12.71%] right-[12.71%] h-[239px] w-[1074px] top-[53.45%] bottom-[35.16%] font-['Gugi'] leading-[34px] text-[rgba(200,195,195,1)]`}
      >
        Taking moonshots is no smooth sailing. It's an inherently unpredictable
        ride. As we launch the 5th in-person lunation of Electrothon, we strive
        for nothing less than the moon. Run by the student community SPEC under
        the moonlight of NIT Hamirpur, Electrothon has impacted over 5000
        students. The budding hackers who joined Electrothon over its previous
        iterations left no stone unturned to ideate and amalgamate technologies
        that transfigure visions into reality.
      </p>
      {/* <div className="absolute w-[75px] left-[80.69%] right-[14.1%] top-[1.38%] bottom-[92.33%] overflow-clip h-[132px]">
        <Background__Bottom_ />
        <Official_Plate />
        <Background__Top_ />
        <Season />
        <MLH_Logo />
        <Group />
      </div> */}
      <FullMoon />

      {/* ---------------------------------------------------------------- */}

      {/* Milestones */}
      <Milestone />

      {/* Timeline */}
      <Timeline />
      {/* ---------------------------------------------------------------- */}

      {/* Speakers */}
    </div>
  );
}
Hero.defaultProps = {
  style: {},
};
