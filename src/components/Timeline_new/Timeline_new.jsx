import React from "react";
import "./timeline.modules.css";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faAward } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
  return (
    <div className="box-border mt-16 overflow-y-hidden" id="schedule">
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
              <div className="text-4xl lg:text-7xl font-bold text-[#8471ae] tracking-wider my-4 lg:my-6 font-[Oswald] text-center">
                TimeLine
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
      <div className="flex flex-col max-w-[80vw] mx-auto md:mt-20 lg:flex-row">
        <div className="hidden md:block bg-gradient-to-br from-[rgba(209,209,209,0.2)] to-[rgba(209,209,209,0.1)] backdrop-blur-[1px] mr-20 text-white rounded-xl">
          <p className="p-6 text-4xl">Working Process of Fest</p>
          <p className="font-[Poppins] px-6 py-2">
            Here's your guide to the Electrothon 5.0 process. Go through all the
            steps to know the exact process of the fest.
          </p>
          <img
            src="astrocket.png"
            className="relative mx-auto w-36 top-4"
            alt="timelineRocket"
          />
        </div>
        <div className="flex flex-col relativ">
          <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
            <FontAwesomeIcon
              fixedWidth
              className="text-3xl md:hidden absolute top-[45%] text-[#9251ac] block left-[-4.1rem]"
              icon={faComputer}
            />
            <div className="timeline__event__icon">
              <FontAwesomeIcon
                className="text-3xl absolute top-[46%] block left-[-4.1rem] md:static"
                icon={faComputer}
              />
            </div>
            <div className="timeline__event__date">6 FEB-31 MAR 2023</div>
            <div className="timeline__event__content ">
              <div className="timeline__event__title">Registration Begins</div>
              <div className="timeline__event__description text-sm lg:text-base">
                <p>
                  Registration opens up for students to register with their
                  respective teams and project ideas for Electrothon.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
            <FontAwesomeIcon
              fixedWidth
              className="text-3xl md:hidden absolute top-[45%] text-[#858af3] block left-[-4.1rem]"
              icon={faPeopleGroup}
            />
            <div className="timeline__event__icon">
              <FontAwesomeIcon className="text-3xl" icon={faPeopleGroup} />
            </div>
            <div className="timeline__event__date">8th APRIL 2023</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
                Electrothon Main Event
              </div>
              <div className="timeline__event__description text-sm lg:text-base">
                <p>
                  Electrothon will be a two-day event consisting of various
                  guest lectures, workshops, and project evaluation.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
            <FontAwesomeIcon
              fixedWidth
              className="text-3xl md:hidden absolute top-[45%] text-[#24b47e] block left-[-4.1rem]"
              icon={faAward}
            />
            <div className="timeline__event__icon">
              <FontAwesomeIcon className="text-3xl" icon={faAward} />
            </div>
            <div className="timeline__event__date">9th APRIL 2023</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">Result Declaration</div>
              <div className="timeline__event__description text-sm lg:text-base">
                <p>
                  The ultimate genius will be revealed by our Judging Panel on
                  19th February 2023 through our social media handles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
