import React, { useState, useEffect, Suspense } from "react";
import Frame from "./assets/Frame";
import Background__Bottom_ from "./assets/Background__Bottom_";
import Official_Plate from "./assets/Official_Plate";
import Background__Top_ from "./assets/Background__Top_";
import Season from "./assets/Official_Plate";
import MLH_Logo from "./assets/MLH_Logo";
import Group from "./assets/Group";
import FullMoon from "./assets/FullMoon";
import Group31 from "./assets2/Group31";
import Rectangle1037 from "./assets2/Rectangle1037";
import Rectangle1039 from "./assets2/Rectangle1039";
import Rectangle1040 from "./assets2/Rectangle1040";
import Ellipse10 from "./assets2/Ellipse10";
import Ellipse5 from "./assets2/Ellipse5";
import Ellipse11 from "./assets2/Ellipse11";
import Ellipse4 from "./assets2/Ellipse4";
import Group5 from "./assets2/Group5";
import Group15 from "./assets2/Group15";
import Line57 from "./assets2/Line57";
import Subtract from "./assets2/Subtract";
import SimpleIconsOxygen from "./assets2/SimpleIconsOxygen";
import Group18 from "./assets2/Group18";
import Group20 from "./assets2/Group20";
import Frame2 from "./assets2/Frame2";
import Ellipse3 from "./assets2/Ellipse3";
import Ellipse12 from "./assets2/Ellipse12";
import Group6 from "./assets2/Group6";
import Group8 from "./assets2/Group8";
import Planet09 from "./assets2/Planet09";
import Ellipse25 from "./assets2/Ellipse25";
import Group32 from "./assets2/Group32";
import Frame1 from "./assets2/Frame1";
import Planet08 from "./assets2/Planet08";
import _rgb from "./assets2/_rgb";
import MaskGroup from "./assets2/MaskGroup";
import Group22 from "./assets2/Group22";

import Ellipse282 from "./assets2/Ellipse282";
import Ellipse283 from "./assets2/Ellipse283";
import Ellipse284 from "./assets2/Ellipse284";
import Ellipse285 from "./assets2/Ellipse285";
import Ellipse286 from "./assets2/Ellipse286";
import Ellipse287 from "./assets2/Ellipse287";
import Ellipse288 from "./assets2/Ellipse288";
import Ellipse289 from "./assets2/Ellipse289";
import Ellipse290 from "./assets2/Ellipse290";
import Ellipse291 from "./assets2/Ellipse291";
import Ellipse292 from "./assets2/Ellipse292";
import Ellipse293 from "./assets2/Ellipse293";
import Ellipse294 from "./assets2/Ellipse294";
import Ellipse295 from "./assets2/Ellipse295";
import Ellipse296 from "./assets2/Ellipse296";
import Ellipse297 from "./assets2/Ellipse297";
import Ellipse298 from "./assets2/Ellipse298";
import Ellipse299 from "./assets2/Ellipse299";
import Ellipse300 from "./assets2/Ellipse300";
import Ellipse301 from "./assets2/Ellipse301";
import Ellipse302 from "./assets2/Ellipse302";
import Ellipse34 from "./assets2/Ellipse34";
import MaskGroup1 from "./assets2/MaskGroup1";
import MaskGroup2 from "./assets2/MaskGroup2";
import MaskGroup3 from "./assets2/MaskGroup3";
import Group34 from "./assets2/Group34";
import Ellipse9 from "./assets2/Ellipse9";
import { Button } from "react-scroll";
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
          <p className="absolute text-6xl m-0 w-[535px] left-[calc(50%_-_267.5px_+_0.5px)] top-[calc(50%_-_38.5px_+_456px)] tracking-[-0.32px] leading-[1.2]">
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
        className={`absolute text-2xl text-center inline m-0 left-[12.71%] right-[12.71%] h-[239px] w-[1074px] top-[53.45%] bottom-[35.16%] font-['Gugi'] leading-[34px] text-[rgba(200,195,195,1)]`}
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
