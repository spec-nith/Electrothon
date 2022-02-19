import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const challengesData = require("./mlhChallenges.json");

const MLHChallenges = () => {
  return (
    <section
      id="mlh-challenges"
      className="relative overflow-hidden mt-12 container-theme p-6"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out-cubic"
    >
      <div className="container mx-auto">
        <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
          MLH Challenges
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 content-theme">
          {challengesData.map((challenge, index) => {
            return (
              <div
                className="flex flex-wrap m-4 rounded-xl"
                key={challenge.key}
              >
                <div className="lg:w-2/5 p-5 float-left">
                  <picture>
                    <source srcSet={challenge.webp} type="image/webp" />
                    <img
                      src={challenge.img}
                      className="w-full h-full object-fit md:object-contain"
                      alt={challenge.key + "-challenge"}
                    />
                  </picture>
                </div>
                <div className="lg:w-3/5 flex flex-col justify-center">
                  <div className="px-3">
                    <ul className={challenge.list}>
                      {challenge.desc.map((element, index) => {
                        return (
                          <li
                            className="md:pt-1 md:tracking-tighter"
                            key={index}
                            dangerouslySetInnerHTML={{ __html: element }}
                          ></li>
                        );
                      })}
                    </ul>
                    <p>{challenge.addon}</p>
                    <div className="flex flex-wrap justify-between md:items-end items-center mt-4 md:mt-2">
                      <ul className="flex md:flex-row flex-col">
                        <li className="md:pr-2 font-semibold">
                          {" "}
                          <FontAwesomeIcon
                            className="text-yellow-400"
                            icon={faTrophy}
                            fixedWidth
                          />{" "}
                          {challenge.prize[0]}
                        </li>
                        {challenge.prize[1] && (
                          <li>
                            {" "}
                            <FontAwesomeIcon
                              className="text-gray-300"
                              icon={faTrophy}
                              fixedWidth
                            />
                            {challenge.prize[1]}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default MLHChallenges;
