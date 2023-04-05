import React, { lazy } from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import "slick-carousel/slick/slick-theme.css";
import speakers from "./speakerdata.json";

const Card = lazy(() => import("./card.jsx"));
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
`;

const SpeakersNew = () => {
  return (
    <div className="mt-16 text-center">
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
              <div className="text-4xl lg:text-7xl font-bold text-[#8471ae] my-4 lg:my-6 font-[Oswald]">
                Our Speakers
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
      <Section>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:gap-y-10 lg:grid-cols-3 m-2  md:max-w-[85vw] lg:max-w-[80vw] mx-auto">
          {speakers.map((speaker, index) => {
            return <Card props={speaker} key={index} />;
          })}
        </div>
      </Section>
    </div>
  );
};

export default SpeakersNew;
