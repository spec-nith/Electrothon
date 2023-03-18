import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialItems from "./SocialMediaItems";

const SocialMediaLG = (props) => {
  return (
    <a
      href={props.item.link}
      target="_blank"
      rel="noreferrer noopener"
      className="flex flex-row items-center py-2 text-gray-300 align-middle transition-all transition duration-300 border-transparent cursor-pointer xl:text-md"
    >
      <span className="relative flex items-center justify-center w-12 text-lg rounded-lg h-14 hover:text-blue-500 tooltip">
        <FontAwesomeIcon
          className="text-3xl"
          icon={props.item.icon}
          fixedWidth
        />
        <p className="tooltiptext2">{props.item.name}</p>
      </span>
      {/* <span className="text-sm font-medium">{props.item.name}</span> */}
    </a>
  );
};

const Social = () => {
  return (
    <div
      className="fixed left-0 flex flex-wrap w-full h-full ml-6 lg:ml-12 social-handler"
      style={{ left: "92%" }}
    >
      <nav className="items-center my-auto h-1/2">
        {/* <div className="hidden py-4 rotate-90 md:flex">
            <div className="text-2xl font-black text-gray-200 ">
            <a
            href="https://spec.nith.ac.in/"
            target="_blank"
            rel="noreferrer noopener"
            >
            {/* <img src="spec_logo.png" alt="Logo"  className="w-8 h-8 mr-2" /> */}
        {/* SPEC
            </a>
            </div>
          </div> */}

        <div className="z-50 flex-col items-center justify-center hidden h-full rounded-full md:flex">
          {socialItems.map((item) => (
            <SocialMediaLG item={item} key={item.link} />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Social;
