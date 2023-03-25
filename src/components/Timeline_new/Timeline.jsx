import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
  const [eventState, seteventState] = useState(1);
  const [eventText, seteventText] = useState("");
  const [eventTitle, seteventTitle] = useState("");
  const [eventHeading, seteventHeading] = useState("");
  const [eventDateFrom, seteventFrom] = useState("");
  const [eventDateTo, seteventTo] = useState("");

  useEffect(() => {
    seteventText(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Namillo laudantium vero itaque ipsa, pariatur sequiexercitationem unde totam doloribus at autem impedit nonearum, sit similique minima facilis quaerat."
    );
    seteventTitle("Title 1");
    seteventHeading("Event 1");
    seteventTo("22nd FEB");
    seteventFrom("21st FEB");
  }, []);

  const handleEventChange = (type) => {
    if (type === 2) {
      seteventState(2);
      seteventText(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Namillo laudantium vero itaque ipsa, pariatur sequiexercitationem unde totam doloribus at autem impedit nonearum, sit similique minima facilis quaerat."
      );
      seteventTitle("Title 2");
      seteventHeading("Event 2");
      seteventTo("24th FEB");
      seteventFrom("23rd FEB");
    }
    if (type === 3) {
      seteventState(3);
      seteventText(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Namillo laudantium vero itaque ipsa, pariatur sequiexercitationem unde totam doloribus at autem impedit nonearum, sit similique minima facilis quaerat."
      );
      seteventTitle("Title 3");
      seteventHeading("Event 3");
      seteventTo("26th FEB");
      seteventFrom("25th FEB");
    }
    if (type === 1) {
      seteventState(1);
      seteventText(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Namillo laudantium vero itaque ipsa, pariatur sequiexercitationem unde totam doloribus at autem impedit nonearum, sit similique minima facilis quaerat."
      );
      seteventTitle("Title 1");
      seteventHeading("Event 1");
      seteventTo("23rd FEB");
      seteventFrom("22nd FEB");
    }
  };
  const TimelineCard = (props) => {
    return (
      <div className=" items-center w-full border-[#6A6A6A] rounded-2xl border-2 bg-gradient-to-b from-[rgba(255,255,255,0.33)] rounded-xl">
        <div
          className={
            "order-1 rounded-lg shadow-xl px-2 py-2 schedule-block2 " +
            (props.leftBox ? "text-right " : "text-left ")
          }
        >
          <p className="mb-3 text-base text-white px-0.5">{props.date}</p>
          <p
            className={
              "font-bold text-lg w-full px-0.5 " +
              (props.leftBox ? "text-right " : "text-left ")
            }
            style={{ color: "#EEEEEE" }}
          >
            {props.title}
          </p>
          <p className="text-sm leading-relaxed tracking-wide text-white py-2 w-full px-0.5">
            {props.text}
          </p>
        </div>
      </div>
    );
  };

  const EventCard = (props) => {
    return (
      <div className=" items-center w-full border-[#6A6A6A] rounded-2xl border-2 bg-gradient-to-b from-[rgba(255,255,255,0.33)] rounded-xl">
        <div className="order-1 rounded-lg shadow-xl px-2 py-4 schedule-block2">
          <span className="mb-3 text-2xl px-2" style={{ color: "#EEEEEE" }}>
            {props.title}
          </span>
          <p className="text-md leading-snug text-white px-2 py-2 w-full">
            {props.text}
          </p>
          <button
            onClick={() => handleEventChange(props.type)}
            className="text-xl leading-snug text-white px-2 py-2 w-full text-left"
          >
            View &gt;&gt;
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full font-['Gugi'] mt-36" id="schedule">
      <div className="flex flex-col md:flex-row justify-evenly items-center ">
        <div
          className="md:w-thirty mx-6 bg-neutral-700/40 rounded-3xl"
          style={{
            backgroundImage: "url('screen1.png')",
            backgroundSize: "cover",
          }}
        >
          <div className="mx-3 md:mx-0 lg:mx-6 h-auto md:px-[2.6rem]">
            <div className="md:px-4 mt-16 h-auto relative">
              <h1 className="text-white text-6xl md:text-7xl text-center">
                TIMELINE
              </h1>
              <p className="text-white text-5xl text-center mt-20 leading-[18px]">
                ^
                <br />^
              </p>
              <h1 className="text-white text-3xl text-center mb-10">
                ELECTROTHON
              </h1>
              <div className="relative mb-8">
                <div className="border-2 absolute left-6 border-blue-300/75 w-0 border h-full md:left-1/2"></div>
                <div className="relative flex md:justify-center mb-10 md:mb-0">
                  <div className="z-20 top-20 absolute flex items-center order-1 timeline-index shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-3xl text-black">
                      1
                    </h1>
                  </div>
                  <div className="lg:px-4 pb-4 relative w-4/5 left-16 md:-left-1/2">
                    <TimelineCard
                      title="Registration Begins"
                      text="Registration opens up for students to register with their respective teams and project ideas for Electrothon."
                      date="6 FEB - 20 MAR 2023"
                      leftBox={true}
                    />
                  </div>
                </div>
                <div className="relative flex md:justify-center mb-10 md:mb-0">
                  <div className="z-20 top-20 absolute flex items-center order-1 timeline-index shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-3xl text-black">
                      2
                    </h1>
                  </div>
                  <div className="lg:px-4 pb-4 relative w-4/5 left-16 md:left-1/2">
                    <TimelineCard
                      title="Electrothon Main Event"
                      text="Electrothon will be a two-day event consisting of various guest lectures, workshops, and project evaluation."
                      date="8th MAR 2023"
                    />
                  </div>
                </div>
                <div className="relative flex md:justify-center mb-10 md:mb-0">
                  <div className="z-20 top-20 absolute flex items-center order-1 timeline-index shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-3xl text-black">
                      3
                    </h1>
                  </div>
                  <div className="lg:px-4 pb-4 relative w-4/5 left-16 md:-left-1/2">
                    <TimelineCard
                      title="Result Declaration"
                      text="The ultimate genius will be revealed by our Judging Panel on 19th February 2023 through our social media handles"
                      date="9th MAR 2023"
                      leftBox={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="md:w-thirty mx-6 bg-neutral-700/40 rounded-3xl mt-20 md:mt-0 z-10"
          style={{
            backgroundImage: "url('screen2.jpg')",
            backgroundSize: "cover",
          }}
        >
          <div className="py-4 px-6">
            <h1 className="text-white text-4xl text-center py-6">
              Event Details
            </h1>
            <h1 className="text-white text-3xl mt-6">{eventHeading}</h1>
            <p className="text-md text-white">
              {eventDateFrom} - {eventDateTo}
            </p>
            <h1 className="text-white text-3xl mt-28">Ongoing</h1>
            <div className="bg-white px-2 md:px-6 mt-6 rounded-xl">
              <div className=" py-4">
                <FontAwesomeIcon
                  icon={faRocket}
                  className="text-xl"
                  fixedWidth
                />
                <p className="ml-2 text-3xl inline">{eventTitle}</p>
              </div>
              <div className="ml-6 md:ml-10 grid grid-cols-2">
                <div>
                  <p>FROM</p>
                  <p className="text-2xl">{eventDateFrom}</p>
                </div>
                <div>
                  <p>TO</p>
                  <p className="text-2xl">{eventDateTo}</p>
                </div>
              </div>
              <div className="mt-3 md:mt-6 py-4 px-2 md:p-4">
                Description
                <p className="mt-2 text-justify">{eventText}</p>
              </div>
            </div>
            <p className="text-3xl text-white mt-10">Schedule Next</p>
            <div className="flex xl:flex-row flex-col mt-6">
              <div className="xl:w-1/2 flex relative">
                {eventState === 1 && (
                  <EventCard title="Event 2" text="In 2 days" type={2} />
                )}
                {(eventState === 2 || eventState === 3) && (
                  <EventCard title="Event 1" text="Ongoing" type={1} />
                )}
                <div className="absolute w-1/2 md:w-3/4 left-[65%] md:left-2/3">
                  <picture>
                    <source srcSet="OrangePlanet.webp" type="image/webp" />
                    <img className="" src="OrangePlanet.png" alt="result_img" />
                  </picture>
                </div>
              </div>
              <div className="xl:w-1/2 my-10 xl:my-0 relative flex xl:left-1/4">
                {(eventState === 2 || eventState === 1) && (
                  <EventCard title="Event 3" text="In 3 days" type={3} />
                )}
                {eventState === 3 && (
                  <EventCard title="Event 2" text="In 2 days" type={2} />
                )}
                <div className="absolute w-1/2 md:w-3/4 left-[65%] md:left-2/3">
                  <picture>
                    <source srcSet="WhitePlanet.webp" type="image/webp" />
                    <img className="" src="WhitePlanet.png" alt="result_img" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
