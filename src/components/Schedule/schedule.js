import React, { useState, useRef } from "react";
import "./schedule.css";
export default function Schedule() {
  const ref = useRef(null);
  var value = 400;
  if (window.innerWidth < 580) {
    value = 300;
  } else {
    value = 800;
  }
  const [Componentwidth, changeComponentwidth] = useState(value);

  window.addEventListener("resize", (event) => {
    // changewidth(window.innerWidth);
    if (ref.current) {
      changeComponentwidth(ref.current.offsetWidth);
    }
  });
  const array = [
    {
      title: "Electrothon Registration",
      para: "Registration opens up for students to register with their respective teams and project ideas for Electrothon.",
      date: "1st - 20th January 2022",
    },
    {
      title: "Registration Deadline",
      para: "Registered teams submit a brief proposal of their project ideas, describing the general workflow, complexity, design and its possible applications.",
      date: "30th January 2022",
    },
    {
      title: "Electrothon Main Event",
      para: "Electrothon will be a two-day event consisting of various guest lectures, workshops, and project evaluation.",
      date: "19th - 20th February 2022",
    },
    {
      title: "Result Declaration",
      para: "The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the results will be announced on the Whatsapp groups and will be mailed to you",
      date: "22nd Feburary 2022",
    },
  ];
  const LeftCard = (props) => {
    return (
      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto text-white font-semibold text-lg">
            {props.index}
          </h1>
        </div>
        <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 text-right schedule-block2">
          <p className="mb-3 text-base text-white">{props.props.date}</p>
          <span
            className="mb-3 font-bold text-lg md:text-2xl"
            style={{ color: "#EEEEEE" }}
          >
            {props.props.title}
          </span>
          <p className="text-sm md:text-base leading-snug text-black-50 text-opacity-100 p-4">
            {props.props.para}
          </p>
        </div>
      </div>
    );
  };
  const SmallCard = (props) => {
    return (
      <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div
          className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full"
          style={{ left: "10%" }}
        >
          <h1 className="mx-auto font-semibold text-lg text-white">
            {props.index}
          </h1>
        </div>
        <div
          className={`order-1 schedule-block${props.colr} rounded-lg shadow-xl w-5/12 px-4 py-4 text-left`}
          style={{ width: "85%" }}
        >
          <p className="mb-3 text-base text-white">{props.props.date}</p>
          <span
            className="mb-3 font-bold  text-lg md:text-2xl text-left"
            style={{ color: "#EEEEEE" }}
          >
            {props.props.title}
          </span>
          <p className="text-sm md:text-base leading-snug text-black-50 text-opacity-100 p-2">
            {props.props.para}
          </p>
        </div>
      </div>
    );
  };
  const RightCard = (props) => {
    return (
      <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white">
            {props.index}
          </h1>
        </div>
        <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 text-left schedule-block4">
          <p className="mb-3 text-base text-white">{props.props.date}</p>
          <span
            className="mb-3 font-bold  text-lg md:text-2xl text-left"
            style={{ color: "#EEEEEE" }}
          >
            {props.props.title}
          </span>
          <p className="text-sm md:text-base leading-snug text-black-50 text-opacity-100 p-4">
            {props.props.para}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      id="schedule"
      className="py-2 container-theme pl-6  mt-2 md:py-8"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
    >
      <div className="container mx-auto flex flex-col items-start md:flex-row">
        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 pr-8">
          <p className="text-blue-500 uppercase tracking-loose">Timeline</p>
          <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 header-theme">
            Working Process of Fest
          </p>
          <p className="text-sm md:text-base text-black-50 mb-4 content-theme">
            Here’s your guide to the Electrothon 4.0 process. Go through all the
            steps to know the exact process of the fest.
          </p>
        </div>
        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
          <div className="container mx-auto w-full h-full pr-6 ">
            <div
              className={`relative wrap overflow-hidden py-10  h-full ${
                Componentwidth < 580 ? "mb-4" : null
              } `}
              ref={ref}
            >
              <div
                className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                style={{ left: Componentwidth < 580 ? "16px" : "50%" }}
              ></div>

              {array.map((props, index) => {
                if (Componentwidth < 580) {
                  if (index % 2 === 0) {
                    return (
                      <SmallCard
                        props={props}
                        index={index + 1}
                        colr="1"
                        key={props.title + Math.random()}
                      />
                    );
                  } else {
                    return (
                      <SmallCard
                        props={props}
                        index={index + 1}
                        colr="3"
                        key={props.title + Math.random()}
                      />
                    );
                  }
                } else {
                  if (index % 2 === 0) {
                    return (
                      <LeftCard
                        props={props}
                        index={index + 1}
                        key={props.title + Math.random()}
                      />
                    );
                  } else {
                    return (
                      <RightCard
                        props={props}
                        index={index + 1}
                        key={props.title + Math.random()}
                      />
                    );
                  }
                }
              })}
            </div>
            {Componentwidth < 580 ? null : (
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="./rocket.png"
                alt="result_img"
                style={{ width: "25rem" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
