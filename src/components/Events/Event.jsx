import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../Tracks_new/style";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";

import { pastEvents, liveEvents, UpcomingEvents } from "./Data";
import EventCard from "./Event_card";

const tabs = [
  { title: "Previous", data: { ...pastEvents } },
  { title: "Live", data: { ...liveEvents } },
  { title: "Upcoming", data: { ...UpcomingEvents } },
];
export const Event = () => {
  const [currentTab, setTabState] = useState(1);

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
              <div className="text-4xl lg:text-7xl font-bold text-[#8471ae] my-2 lg:my-6 font-[Oswald]">
                Events
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>

      <div className="bg-[#1a1a1d] rounded-xl bg-opacity-50 pt-10 pb-4 mx-auto max-w-[1200px] md:mx-auto">
        <div
          id="tabs"
          className="flex justify-center w-full border-b-2 border-gray-200"
        >
          {tabs.map((tab, id) => {
            return (
              <span
                key={id}
                onClick={() => setTabState(id)}
                className={` mx-4 mb-2 text-xl cursor-pointer ${
                  currentTab === id
                    ? " text-white border-b-2 border-[#CEB7FF]"
                    : "text-gray-400"
                }`}
              >
                {tab.title}
              </span>
            );
          })}
        </div>
        <div className="m-8 flex justify-center">
          <EventCard
            data={Object.values(tabs[currentTab].data)}
            title={tabs[currentTab].title}
          />
        </div>
      </div>
    </div>
  );
};
