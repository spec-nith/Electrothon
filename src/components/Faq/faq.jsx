import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";

import { initalQues, moreQues } from "./faq_master";
export default function Example() {
  const [open, setOpen] = useState(-1);
  const [loadMore, setloadMore] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div
      className="w-full px-10 mt-20 text-center text-white md:px-20 xl:px-32"
      id="faq"
    >
      <Fragment>
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
                <div className="text-5xl lg:text-6xl font-bold text-[#8471ae] my-4 lg:my-6 font-[Oswald]">
                  Commonly Asked Questions
                </div>
              </>
            }
            textStyles="text-center"
          />
        </motion.div>
        <div className="mt-20 md:mx-10 lg:grid lg:grid-cols-2 gap-x-10">
          <div>
            {initalQues.map((faq, index) => {
              return (
                <Accordion
                  key={faq.title + index}
                  className=""
                  open={open === parseInt(index + 1)}
                >
                  <AccordionHeader
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255,255,255,0.2) , rgba(0,0,0,0.02)",
                    }}
                    className={`my-4 p-4 text-center rounded-lg text-base text-white font-normal font-['Poppins'] border-[rgba(0,0,0,0.1)] border-t-2 border-r-2`}
                    onClick={() => handleOpen(index + 1)}
                  >
                    <h1 className="w-full text-center lg:text-left sm:text-base md:text-lg">
                      {faq.title}
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-sm md:text-base h-auto text-justify lg:text-left text-white rounded-xl p-4 bg-[rgba(0,0,0,0.4)]">
                    {faq.content}
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
          <div className={"lg:block " + (loadMore ? " " : "hidden ")}>
            {moreQues.map((faq, index) => {
              return (
                <Accordion
                  key={faq.title + index}
                  className=""
                  open={open === parseInt(index + 8)}
                >
                  <AccordionHeader
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255,255,255,0.2) , rgba(0,0,0,0.02)",
                    }}
                    className={`my-4 p-4 text-center rounded-lg text-base text-white font-normal font-['Poppins'] border-[rgba(0,0,0,0.1)] border-t-2 border-r-2`}
                    onClick={() => handleOpen(index + 8)}
                  >
                    <h1 className="w-full text-center lg:text-left sm:text-base md:text-lg">
                      {faq.title}
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-sm md:text-base h-auto text-left text-white rounded-xl p-4 bg-[rgba(0,0,0,0.4)]">
                    {faq.content}
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
          <div className="flex items-center justify-center block w-full lg:hidden">
            <button
              onClick={() => setloadMore(!loadMore)}
              className="p-3 mt-4 mb-10 text-2xl bg-[#503883] rounded-xl text-gray-300"
            >
              {loadMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </Fragment>
    </div>
  );
}
