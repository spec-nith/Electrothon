import React from "react";
import { challengesData } from "./challengesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
const Challenges = () => {
  return (
    <div className="">
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
              <div className="text-4xl lg:text-7xl font-bold text-[#8471ae] my-4 tracking-wider  lg:my-6 font-[Oswald] mb-16">
                Challenges
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>

      <section
        id="challenges"
        className="relative p-2 md:p-10 mx-auto w-100% md:w-[80%]  mt-2 overflow-hidden bg-[#221e1e] bg-opacity-50 rounded-3xl"
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 content-theme">
          {challengesData.map((challenge, index) => {
            return (
              <div
                className="flex flex-col md:m-4 mb-6 rounded-xl shadow-2xl p-4"
                key={challenge.key}
              >
                <div className="float-left p-5 lg:w-3/5 h-[140px] flex justify-center ">
                  <picture>
                    <source srcSet={challenge.webp} type="image/webp" />
                    <img
                      src={challenge.img}
                      className="w-full h-full object-contain"
                      alt={challenge.key + "-challenge"}
                    />
                  </picture>
                </div>
                <div className="flex flex-col justify-between h-full space-y-4">
                  <div className="px-3">
                    <ul className={challenge.list}>
                      {challenge.desc.map((element, index) => {
                        return (
                          <li
                            className="md:pt-1 md:tracking-tighter"
                            key={index}
                          >
                            {element}
                          </li>
                        );
                      })}
                    </ul>{" "}
                  </div>

                  {challenge.noButton ? (
                    ""
                  ) : (
                    <a
                      className=""
                      href={challenge.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="lg:w-1/3 w-full text-center p-2 mx-auto lg:ml-6 text-base border-2 border-gray-200 rounded-md cursor-pointer hover:bg-gray-200 hover:border-gray-200 hover:text-black w-3/4">
                        More Details
                      </div>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Challenges;
