import React from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
export default function schedule() {
  const array = [
    {
      title: "Result Declaration",
      para: "The ultimate genius will be revealed by our jdging panuel on 10th May, 2021 and the resukts will be announced on the whatsapp groups and will be mailed to you",
      date: "10 May, 2021",
    },
    {
      title: "Result Declaration",
      para: "The ultimate genius will be revealed by our jdging panuel on 10th May, 2021 and the resukts will be announced on the whatsapp groups and will be mailed to you",
      date: "10 May, 2021",
    },
    {
      title: "Result Declaration",
      para: "The ultimate genius will be revealed by our jdging panuel on 10th May, 2021 and the resukts will be announced on the whatsapp groups and will be mailed to you",
      date: "10 May, 2021",
    },
    {
      title: "Result Declaration",
      para: "The ultimate genius will be revealed by our jdging panuel on 10th May, 2021 and the resukts will be announced on the whatsapp groups and will be mailed to you",
      date: "10 May, 2021",
    },
  ];
  const LeftCard = (props) => {
    console.log(props);
    return (
      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto text-white font-semibold text-lg">
            {props.index}
          </h1>
        </div>
        <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4 text-right">
          <p className="mb-3 text-base text-white">
            {props.props.date} 10 May, 2021
          </p>
          <h4
            className="mb-3 font-bold text-lg md:text-2xl"
            style={{ color: "#EEEEEE" }}
          >
            {props.props.title}
          </h4>
          <p className="text-sm md:text-base leading-snug text-black-50 text-opacity-100 p-4">
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
        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4 text-left">
          <p className="mb-3 text-base text-white">{props.props.date}</p>
          <h4
            className="mb-3 font-bold  text-lg md:text-2xl text-left"
            style={{ color: "#EEEEEE" }}
          >
            {props.props.title}
          </h4>
          <p className="text-sm md:text-base leading-snug text-black-50 text-opacity-100 p-4">
            {props.props.para}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section>
      <div className=" py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 pr-8">
            <p className="ml-2 text-blue-500 uppercase tracking-loose">
              Working Process
            </p>
            <p className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed text-gray-800 mb-2">
              Working Process of Fest
            </p>
            <p className="text-sm md:text-base text-black-50 mb-4">
              Here’s your guide to the tech fest 2021 process. Go through all
              the steps to know the exact process of the fest.
            </p>
            <a
              href="#"
              className="bg-transparent mr-auto hover:bg-blue-300 text-blue-500 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-blue-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                  style={{ left: "50%" }}
                ></div>
                {array.map((props, index) => {
                  console.log(index);
                  if (index % 2 === 0) {
                    return <LeftCard props={props} index={index + 1} />;
                  } else {
                    return <RightCard props={props} index={index + 1} />;
                  }
                })}
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
