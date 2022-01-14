import React, { useState, useRef, useEffect } from "react";
// import './prize.css';
import { podiumData, prizeData } from "./prizesData";
const [winner, girls, runner] = podiumData;
const podium = [girls, winner, runner];

const Podium = () => {
  let [toggle, setToggle] = useState({ w: false, g: false, r: false });
  const ref = useRef();
  const custom = {
    gridColumn: 1,
    gridRow: 1,
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (toggle.w || toggle.g || toggle.r) {
        setToggle(() => ({ w: false, g: false, r: false }));
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);
  return (
    <div className="flex px-4 flex-wrap -mx-px overflow-hidden justify-center items-end ">
      {podiumData.map((data, index) => {
        return (
          <div
            className="rounded-3x1 hidden md:block h-full my-1 p-3 md:p-8 overflow-hidden w-full md:w-1/3 items-center justify-center object-cover"
            key={index}
          >
            <div className="grid rounded-8x1 " style={{height :data.h}}>
              <div
                className={
                  "bg-gray-800 text-white text-justify z-10 max-w-sm rounded overflow-hidden shadow-lg " +
                  (toggle[data.id] ? "block" : "hidden")
                }
                style={custom}
              >
                <div className="p-auto">
                  <h2 className="text-center text-5xl pt-2 text-blue-900 ">Perks</h2>
                  <ul className="list-disc p-8 text-4x1">
                    {data.desc.map((bullets, index) => {
                      return <li className="py-2 border-b-2 " key={index}>{bullets}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-600"
                style={custom}
              >
                <img
                  className="w-full"
                  src={data.img}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 text-center">
                  <div className="font-bold text-xl mb-2 ">{data.name}</div>
                  <p className="text-base">{data.amt}</p>
                </div>
                <div
                  className="px-6 pt-4 pb-2 justify-end flex z-10"
                  style={custom}
                >
                  <button
                    className="inline-block bg-blue-600 rounded-full px-3 py-1 text-3x1 font-semibold text-black mr-2 mb-2"
                    onClick={() =>
                      setToggle((prevState) => ({
                        ...prevState,
                        [data.id]: !prevState[data.id],
                      }))
                    }
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {podium.map((data, index) => {
        return (
          <div
            className="block md:hidden h-full my-1 p-3 md:p-8 overflow-hidden w-full md:w-1/3 items-center justify-center object-cover"
            key={index}
          >
            <div className="grid">
              <div
                className={
                  "bg-white z-10 max-w-sm rounded overflow-hidden shadow-lg " +
                  (toggle[data.id] ? "block" : "hidden")
                }
                style={custom}
              >
                {data.desc.map((bullets, index) => {
                  return (
                    <ol>
                      <li key={index}>{bullets}</li>
                    </ol>
                  );
                })}
              </div>
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg bg-red-400"
                style={custom}
              >
                <img
                  className="w-full"
                  src={data.img}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{data.name}</div>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div
                  className="px-6 pt-4 pb-2 justify-end flex z-10"
                  style={custom}
                >
                  <button
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 "
                    onClick={() =>
                      setToggle((prevState) => ({
                        ...prevState,
                        [data.id]: !prevState[data.id],
                      }))
                    }
                  >
                    Read
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Prizes = () => {
  return (
    <section
      id="sponsors"
      className="container-theme mt-2 my-4 md:my-12"
      style={{ padding: 0 }}
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
    >
      <Podium />
    </section>
  );
};

export default Prizes;
