import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./faq.css";
import FaqArray from "./faq_master.json";

export default function faq() {
  const FaqTab = (props) => {
    return (
      <div className="border-b faqs-tab">
        <div className="border-l-2 border-transparent relative">
          <input
            className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
            type="checkbox"
            id="chck1"
          />
          <header
            className="flex justify-between items-center pt-5 pb-3 px-4 lg:px-8 cursor-pointer select-none faqs-tab-label"
            htmlFor="chck1"
          >
            <span className="text-grey-darkest font-thin text-normal lg:text-xl w-4/5">
              {props.props.title}
            </span>
            <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center faqs-test">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </header>
          <div className="faqs-tab-content">
            <div className="mx-4 lg:mx-8 pb-5 text-gray-600">
              <p className="mr-4 lg:mr-8 justify-left">{props.props.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section id="faq"
      className="relative bg-white overflow-hidden mt-10">
      <h1 className="text-3xl text-center tracking-tight md:text-4xl leading-normal md:leading-relaxed text-gray-800">
        Commonly Asked Questions
      </h1>
      <div className="lg:w-3/5 lg:p-8 p-2 py-6 mx-auto">
        <div className="shadow row faqs-tabs">
          {FaqArray.map((props) => {
            return <FaqTab props={props} />;
          })}
        </div>
      </div>
    </section>
  );
}
