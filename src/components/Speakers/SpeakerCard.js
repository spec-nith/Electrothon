import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./speaker.css";

const SpeakerCard = ({ judge }) => {
  var registerDate = new Date(judge.registerDate);
  var workshopDate = new Date(judge.workshopDate);
  var curr_date = new Date();
  function isOpen() {
    return curr_date >= registerDate && curr_date < workshopDate;
  }

  return (
    <React.Fragment>
      <div
        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4 px-2 "
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out-cubic"
      >
        <div
          className={
            "relative bg-black bg-opacity-25 rounded-3xl overflow-hidden shadow-lg " +
            (isOpen()
              ? ""
              : "opacity-90 transition-all duration-300")
          }
        >
          <picture>
            <source srcSet={judge.webp} type="image/webp" />
            <img
              className={
                "object-cover h-80 p-4 w-full rounded-3xl " +
                (isOpen() || curr_date > workshopDate ? "" : "blur-content")
              }
              src={judge.image}
              alt={judge.name}
            />
          </picture>
          <div
            className={
              "p-2 " +
              (isOpen() || curr_date > workshopDate
                ? ""
                : "blur-content disable-select")
            }
          >
            <center>
              {" "}
              <h3 className="text-2xl font-medium ">
                <div className="text-white pl-2  ">{judge.name}</div>
              </h3>
              <div className="block text-base text-gray-300 px-1 mt-1">
                {judge.desc}
              </div>
            </center>
          </div>
          <div
            className={
              "flex flex-row justify-center my-2 " +
              (isOpen() || curr_date > workshopDate
                ? ""
                : "blur-content  pointer-events-none")
            }
          >
            {judge.linkedin ? (
              <a
                href={judge.linkedin}
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-3xl text-white fill-current mx-1 p-1"
                  icon={faLinkedinIn}
                />
              </a>
            ) : (
              ""
            )}
            {judge.insta ? (
              <a href={judge.insta} rel="noreferrer noopenor" target="_blank">
                <FontAwesomeIcon
                  className="text-3xl text-white fill-current mx-1 p-1"
                  icon={faInstagram}
                />
              </a>
            ) : (
              ""
            )}
            {judge.facebook ? (
              <a
                href={judge.facebook}
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-3xl text-white fill-current mx-1 p-1"
                  icon={faFacebook}
                />
              </a>
            ) : (
              ""
            )}
            {judge.twitter ? (
              <a href={judge.twitter} rel="noreferrer noopenor" target="_blank">
                <FontAwesomeIcon
                  className="text-3xl text-white fill-current mx-1 p-1"
                  icon={faTwitter}
                />
              </a>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-center my-4">
            {isOpen() ? (
              <a
                href={judge.registerLink}
                rel="noreferrer noopenor"
                target="_blank"
              >
                <button className="text-lg text-white border-2 rounded-xl py-2 px-4 hover:text-black hover:bg-white transition-all duration-300">
                  Register Now
                </button>
              </a>
            ) : (
              <button
                className="text-lg text-white border-2 rounded-xl py-2 px-4 cursor-not-allowed"
                disabled
              >
                {curr_date > workshopDate
                  ? "Talk Completed"
                  : "Coming Soon"}
              </button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SpeakerCard;
