import React, { useState } from "react";
import Card from "./cardUI";
import "./card-style.css";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { initalPrizes, morePrizes } from "./prizeforall";

const tabs = [
  { title: "Prizes", component: <Prizes /> },
  // { title: "Sponsored Prizes", component: <SponsoredPrizes /> },
  { title: "Swags for all", component: <AllPrize /> },
  { title: "Track Prizes", component: <TrackPrizes /> },
];
const modalDataList = [
  {
    title: "Winner Prize",
    content: "Lifetime upgrades for taskade account.",
  },
];

function Prizes() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalData, setModalData] = useState("");

  function modalHandler(event) {
    const text =
      event.currentTarget.querySelector("span:first-child").textContent;
    setShowModal(true);
    if (text == "₹ 30,000 Worth Prizes")
      setModalData("₹ 20,000 Cash Prize + All Participants swags");
    else if (text == "₹ 20,000 Worth Prizes")
      setModalData("₹ 15,000 Cash Prize + All Participants swags");
    else setModalData("₹ 10,000 Cash Prize + All Participants swags");
  }

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-[#1a1a1d] border-0 rounded-lg shadow-lg outline-none focus:outline-none text-white">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="mr-10 text-3xl font-semibold">Coming Soon</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none bg-transparent border-0 outline-none opacity-50 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-white bg-transparent outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                    {modalData}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
      <div id="left-prize" className="flex flex-col w-full p-8 xl:w-2/5">
        <div className="flex flex-row items-center w-full my-4 text-white">
          <span className="flex items-center justify-center w-[5rem] h-[5rem] md:w-24 md:h-24 text-2xl font-semibold text-white bg-gradient-to-r from-[#f4941d] to-[#ffd200] rounded-full">
            1st
          </span>
          <div
            className="flex flex-col items-start ml-4 text-center md:ml-16 cursor-pointer"
            onClick={modalHandler}
          >
            <span className="text-xl font-semibold md:text-3xl ">
              ₹ 30,000 Worth Prizes
            </span>
            <span className="w-full">Click to know more</span>
          </div>
        </div>
        <div className="flex flex-row items-center w-full my-4 text-white">
          <span className="flex items-center justify-center w-[5rem] h-[5rem] md:w-24 md:h-24 text-2xl font-semibold text-white bg-gradient-to-r from-[#757f9a] to-[#d7dde8] rounded-full">
            2nd
          </span>
          <div
            className="flex flex-col items-start ml-4 text-center md:ml-16 cursor-pointer"
            onClick={modalHandler}
          >
            <span className="text-xl font-semibold md:text-3xl ">
              ₹ 20,000 Worth Prizes
            </span>
            <span className="w-full">Click to know more</span>
          </div>
        </div>
        <div className="flex flex-row items-center w-full my-4 text-white">
          <span className="flex items-center justify-center w-[5rem] h-[5rem] md:w-24 md:h-24 text-2xl font-semibold text-white bg-gradient-to-r from-[#232526] to-[#414344] rounded-full">
            3rd
          </span>
          <div
            className="flex flex-col items-start ml-4 text-center md:ml-16 cursor-pointer"
            onClick={modalHandler}
          >
            <span className="text-xl font-semibold md:text-3xl ">
              ₹ 15,000 Worth Prizes
            </span>
            <span className="w-full cursor-pointer">Click to know more</span>
          </div>
        </div>
      </div>
      <div
        id="right-image"
        className="items-center justify-center hidden w-3/5 lg:flex"
      >
        <img src="prize.png" className="h-96" alt="prizes" />
      </div>
    </>
  );
}

// function SponsoredPrizes() {
//   return (
//     <>
//       <div className="flex items-center justify-center w-full text-2xl text-white h-72">
//         Coming Soon
//       </div>
//     </>
//   );
// }

function AllPrize() {
  const [open, setOpen] = useState(-1);
  const [loadMore, setloadMore] = useState(false);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <div className="flex ml-8">
        <div className="mt-20 md:mx-10 lg:grid lg:grid-cols-2 gap-x-10">
          <div>
            {initalPrizes.map((faq, index) => {
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
                    className={`border-b-0 p-2 bg-gray-400 bg-opacity-25 rounded-md border-l-4 border-blue-800 text-white my-2 mb-4`}
                    onClick={() => handleOpen(index + 1)}
                  >
                    <h1 className="w-full text-center lg:text-left sm:text-xl md:text-2xl font-normal">
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
            {morePrizes.map((faq, index) => {
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
                    className={`border-b-0 p-2 bg-gray-400 bg-opacity-25 rounded-md border-l-4 border-blue-800 text-white my-2 mb-4`}
                    onClick={() => handleOpen(index + 8)}
                  >
                    <h1 className="w-full text-center lg:text-left sm:text-xl md:text-2xl font-normal">
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

        {/* 
      <ul className=" mx-auto p-8 text-white text-left mt-7 text-sm lg:text-lg flex flex-col space-y-4 xl:w-3/5">

        <div className="p-2 bg-gray-400 bg-opacity-25 rounded-md border-l-4 border-blue-800">Swags for all participants from Github.</div>
        <div className="p-2 bg-gray-400 bg-opacity-25 rounded-md border-l-4 border-blue-800">30-day Wolfram | One access for participants including Desktop/Cloud access, Wolfram Language/Knowledgebase, FreeCDF Deployment, 5000 Wolfram | Alpha API calls, and 5000 Cloud Credits worth $25</div>
        <div className="p-2 bg-gray-400 bg-opacity-25 rounded-md border-l-4 border-blue-800">Top eight teams get the Wolfram Award, which includes one year of Wolfram | One Personal Edition and a one-year subscription to Wolfram | Alpha Pro, valued at $375 per person.</div>
        <div className="p-2 bg-gray-400 bg-opacity-25 rounded-md border-l-4 border-blue-800">Voiceflow Team License valued at $50/month per account for all attendees with a coupon code to retrieve their subscription.</div>
        <div className="p-2 bg-gray-400 bg-opacity-25 rounded-md border-l-4 border-blue-800">Gift vouchers from HoverRobotix Hoverboards India worth Rs 10000/- each.</div>
        <div>Complimentary certified mentoring session/workshop invites from MENTORx.</div>
        <div className="p-2 bg-gray-400 bg-opacity-25 rounded-md border-l-4 border-blue-800">Discount vouchers from RevUP LifeSkills.</div>
        <div className="p-2 bg-gray-400 bg-opacity-25 rounded-md border-l-4 border-blue-800">Taskade lifetime upgrades for winners and 5-Year free upgrades for everyone else.</div>
        <div className="p-2 bg-gray-400 bg-opacity-25 rounded-md border-l-4 border-blue-800">Full access licenses so attendees can get access to Interview Cake coding interview prep course.</div>
        <div className="p-2 bg-gray-400 bg-opacity-25 rounded-md border-l-4 border-blue-800">90-day extended trial promo code for Balsamiq Cloud</div>
        <div className="p-2 bg-gray-400 bg-opacity-25 rounded-md border-l-4 border-blue-800">Free domain to all participants from .xyz</div>
        <div className="p-2 bg-gray-400 bg-opacity-25 rounded-md border-l-4 border-blue-800">Eligibility to apply for internship/full-time roles at Replit</div>
      </ul> */}
      </div>
    </>
  );
}

function TrackPrizes() {
  const trackData = [
    {
      title: "Best Beginner's Hack",
      content: ["Rs. 1500 Cash Prize."],
    },
    {
      title: "Best All Girls Team",
      content: ["Rs. 2500 Cash Prize."],
    },
    {
      title: "Theme Prizes",
      content:
        ["Rs. 1500 Cash Prize per theme", "Hidden prize for Open Innovation."],
    },
    {
      title: "Hardware Only Hack",
      content:
        ["Win a free electronics gadget kit in our hardware competition."],
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-white px-8 py-6">
      {trackData.map((track, index) => (
              <div
                className="flex flex-col md:m-4 mb-6 rounded-xl shadow-2xl p-4  bg-black/30"
                key={track.key}
              >
                <div className="text-2xl text-start md:text-center md:text-3xl p-3 md:p-5 md:whitespace-nowrap">{track.title}</div>
                <div className="flex h-full space-y-4 pb-4">
                  <div className="px-3">
                    <ul className="list-disc px-3 text-start">
                      {track.content.map((element, index) => {
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
                  </div>
                  </div>))}
      {/* {trackData.map((track, index) => {
        return (
          <div className="flex flex-col text-white px-8 py-2 bg-black/30 rounded-xl">
          <div className="text-2xl">{track.title}</div>
          <div className="text-lg px-8">{track.content}</div>
        </div>
      )
      })} */}
    </div>
  );
}
export default function Cards() {
  const [currentTab, setTabState] = useState(0);

  return (
    <div className="container mx-auto mb-16 text-center " id="prizes">
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
              <div className="text-4xl lg:text-7xl font-bold text-[#8471ae] my-4 tracking-wider lg:my-6 font-[Oswald] my-8">
                Prizes
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>

      <div className="bg-[#1a1a1d] rounded-xl bg-opacity-50 py-8 mx-auto max-w-[1200px]">
        <div
          id="tabs"
          className="flex justify-start w-full border-b-2 border-gray-200"
        >
          {tabs.map((tab, id) => {
            return (
              <span
                key={id}
                onClick={() => setTabState(id)}
                className={` mx-4 mb-2 text-xl cursor-pointer ${
                  currentTab == id
                    ? " text-white border-b-2 border-[#CEB7FF]"
                    : "text-gray-400"
                }`}
              >
                {tab.title}
              </span>
            );
          })}
        </div>
        <div className="flex w-full">{tabs[currentTab].component}</div>
      </div>
    </div>
  );
}
