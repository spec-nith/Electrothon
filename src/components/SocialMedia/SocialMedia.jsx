import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialItems from "./SocialMediaItems";

const SocialMediaLG = (props) => {
    return (
      <a
        href={props.item.link}
        target="_blank"
        rel="noreferrer noopener"
        className="flex flex-row items-center py-2 xl:text-md text-gray-300 border-transparent transition duration-300 transition-all cursor-pointer align-middle"
      >
        <span className="flex items-center justify-center h-14 w-12 text-lg rounded-lg hover:text-blue-500 tooltip relative">
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
    return(
        <div className=" h-full w-full fixed flex flex-wrap left-0 ml-6 lg:ml-12 social-handler opacity-0">
        <nav className="items-center my-auto h-1/2 my-auto">
          {/* <div className="hidden md:flex py-4 rotate-90">
            <div className=" text-gray-200 text-2xl font-black">
            <a
            href="https://specnith.com/"
            target="_blank"
            rel="noreferrer noopener"
            >
            {/* <img src="spec_logo.png" alt="Logo"  className="h-8 w-8 mr-2" /> */}
          {/* SPEC
            </a>
            </div>
          </div> */}

          <div className="hidden md:flex flex-col h-full justify-center items-center rounded-full z-50">
            {socialItems.map((item) => (
              <SocialMediaLG item={item} key={item.link} />
            ))}
          </div>
        </nav>
      </div>
    )
};

export default Social;