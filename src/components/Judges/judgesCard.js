import React from "react";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JudgesCard = ({ judge }) => {
  return (
    <React.Fragment>
      <div
        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4 px-2 "
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="relative  bg-black bg-opacity-25 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 duration-300 ease-in-out">
          <img
            className="object-cover h-80 p-4 w-full rounded-3xl "
            src={judge.image}
            alt={judge.name}
          />
          <div className="p-2">
            <center>
              {" "}
              <h3 className="text-2xl font-medium ">
                <div className="text-white pl-2  ">{judge.name}</div>
              </h3>
              <div className="block text-lg  text-gray-300 pl-2 top-4 relative">
                {judge.desc}
              </div>
            </center>
          </div>

          <div className="flex flex-row justify-center m-4">
            <a href={judge.linkedin} rel="noreferrer noopenor" target="_blank">
              <FontAwesomeIcon
                className="text-3xl text-white fill-current mr-2  hover:opacity-50 p-1"
                icon={faLinkedinIn}
              />
            </a>

            <a href={judge.insta} rel="noreferrer noopenor" target="_blank">
              <FontAwesomeIcon
                className="text-3xl text-white fill-current  hover:opacity-50 p-1 "
                icon={faInstagram}
              />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default JudgesCard;