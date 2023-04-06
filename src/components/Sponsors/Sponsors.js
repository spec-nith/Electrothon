import React from "react";
import { data } from "./Data";
import "../../colors.css";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";

const title = data.pop();

export default function Sponsors() {
  return (
    <div>
      <section id="sponsors" className=" md:my-12" style={{ padding: 0 }}>
        <div className="mb-20 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
          >
            <TitleText
              title={
                <>
                  <div className="text-4xl lg:text-7xl font-bold text-[#8471ae] mt-4 lg:my-6 font-[Oswald]">
                    Our Sponsors
                  </div>
                </>
              }
              textStyles="text-center"
            />
          </motion.div>
        </div>
        {/* Title Sponsor  */}
        <div className="justify-center text-center">
          <div className="sticky top-0 justify-center px-4 py-2 text-center rounded-t-lg sponsor-bg-title">
            <h1 className="text-xl font-semibold leading-normal tracking-tight xl3 md:text-3xl md:leading-relaxed header-theme">
              {" "}
              {title.tierName}
            </h1>
          </div>
          <div className="flex flex-wrap justify-center px-4 -mx-px overflow-hidden ">
            {title.data.map((sponsor) => {
              return (
                <div
                  className="items-center justify-center object-cover w-1/2 p-3 my-1 overflow-hidden md:p-8 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/5"
                  key={sponsor.id}
                >
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <picture className="">
                      <source srcSet={sponsor.webp} type="image/webp" />
                      <img src={sponsor.src} alt={sponsor.sponsorName} />
                    </picture>
                    {/* for sponsorname */}
                    {/* <p className="mt-2 text-lg tracking-wider text-white">{sponsor.sponsorName}</p>   */}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        {/* Gold, Silver, Bronze  */}
        {data.map((tier, index) => {
          return (
            <div className="justify-center text-center" key={tier.id}>
              <div
                className={`sticky top-0 justify-center text-center px-4 sponsor-bg-${index} py-2`}
              >
                <h1 className="xl3 tracking-tight text-xl md:text-3xl leading-normal md:leading-relaxed header-theme font-semibold">
                  {" "}
                  {tier.tierName}
                </h1>
              </div>
              <div className="flex flex-wrap -mx-px overflow-hidden justify-center px-4">
                {tier.data.map((sponsor) => {
                  return (
                    <div
                      className={"my-1 p-3 md:p-8 flex overflow-hidden w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 items-center justify-center object-cover"+ (sponsor.sponsorName=="Showwcase"?" w-[40%] sm:w-[38%] md:w-[38%] lg:w-[38%] xl:w-[30%] 2xl:w-[1/5]":"")} 
                      key={sponsor.id}
                    >
                      <a
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* <img src={sponsor.src} alt={sponsor.sponsorName}></img> */}
                        <picture>
                          <source srcSet={sponsor.webp} type="image/webp" />
                          <img src={sponsor.src} alt={sponsor.sponsorName} className={" " + (sponsor.sponsorName=="Showwcase"?"max-w-none w-[107px] md:w-[250px]":"")} />
                        </picture>
                        {/* for sponsorname */}
                        {/* <p className="text-white tnpm rn start
                        racking-wider text-lg mt-2">{sponsor.sponsorName}</p>   */}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        {/* <div className="flex items-center justify-center pb-12">
          <a
            href="https://drive.google.com/file/d/1P_-npMEWQtOUAWnuJH66aK5h7sCxSgRy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="px-8 py-3 text-base font-medium text-center text-white bg-indigo-700 rounded-md hover:bg-indigo-400 hover:text-white md:py-4 md:text-lg md:px-10"
              id="pin-foot"
            >
              Sponsorship Brochure
            </button>
          </a>
        </div> */}
      </section>

      {/* <div id="scrollSlide" className="relative p-6 py-8 my-4 mt-2 md:my-12 md:p-12">
      
      
        </div>
        <div className="h-4 md:h-12"></div> */}
    </div>
  );
}
