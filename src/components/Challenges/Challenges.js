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
    <div className="mt-40">
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
        id="prizes"
        className="relative p-6 md:p-10 max-w-[1400px] mx-20 min-[1600px]:mx-auto  mt-12 overflow-hidden bg-[#221e1e] bg-opacity-50 rounded-3xl"
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 content-theme">
            {challengesData.map((challenge, index) => {
              return (
                <div
                  className="flex flex-wrap m-4 mb-6 rounded-xl"
                  key={challenge.key}
                >
                  <div className="float-left p-5 lg:w-2/5 md:max-h-[140px] flex md:justify-center ">
                    <picture>
                      <source srcSet={challenge.webp} type="image/webp" />
                      <img
                        src={challenge.img}
                        className="w-full h-full object-fit md:object-contain"
                        alt={challenge.key + "-challenge"}
                      />
                    </picture>
                  </div>
                  <div className="flex flex-col justify-center lg:w-3/5">
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
                      </ul>
                      <p>{challenge.addon}</p>
                      <div className="flex flex-wrap items-center justify-between mt-4 md:items-end md:mt-2">
                        <ul className="flex flex-col justify-between w-full md:flex-row">
                          <li className="md:pr-2">
                            {" "}
                            <FontAwesomeIcon
                              className="text-yellow-400"
                              icon={faTrophy}
                              fixedWidth
                            />{" "}
                            {/* <FontAwesomeIcon
                            className="ml-2 text-sm"
                            icon={faRupeeSign}
                          />{" "} */}
                            {challenge.prize[0]}
                          </li>
                          {challenge.prize[1] && (
                            <li>
                              {" "}
                              <FontAwesomeIcon
                                className="text-gray-300"
                                icon={faTrophy}
                                fixedWidth
                              />{" "}
                              {/* <FontAwesomeIcon
                              icon={faRupeeSign}
                              className="ml-2 mr-1 text-sm"
                            /> */}
                              {challenge.prize[1]}
                            </li>
                          )}
                          {challenge.prize[2] && (
                            <li>
                              {" "}
                              <FontAwesomeIcon
                                className="text-yellow-800"
                                icon={faTrophy}
                                fixedWidth
                              />
                              {/* <FontAwesomeIcon
                              icon={faRupeeSign}
                              className="ml-2 mr-1 text-sm"
                            /> */}{" "}
                              {challenge.prize[1]}
                            </li>
                          )}
                        </ul>
                        {challenge.noButton ? (
                          ""
                        ) : (
                          <a
                            className="block mt-4 "
                            href={challenge.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="p-2 mx-auto mt-4 text-base border-2 border-gray-200 rounded-md cursor-pointer hover:bg-gray-200 hover:border-gray-200 hover:text-black">
                              And More
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Challenges;
