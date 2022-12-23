"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "./style.js";
import { exploreWorlds } from "./data";
import { staggerContainer } from "./motion";
import { TitleText, TypingText } from "./CustomTexts";
import ExploreCard from "./ExploreCard.jsx";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Domains" textStyles="text-center" />
        <TitleText
          title={
            <>
              <div
                className={`text-center text-white font-normal font-['Gugi']`}
              >
                Choose the world you want <br className="md:block hidden" /> to
                explore
              </div>
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;