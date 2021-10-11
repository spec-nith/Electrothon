import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCode,
  faDonate,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function milestone() {
  return (
    <section
      id="milestone"
      className="relative overflow-hidden mt-2 container-theme p-6"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
    >
      <div className="container mx-auto">
        <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
          Milestones
        </h1>
        <div className="flex flex-wrap -m-4 text-center mt-2">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-green-200">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-5xl text-green-500 mb-3"
              />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.9K
              </h2>
              <p className="leading-relaxed">Participants</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-indigo-200">
              <FontAwesomeIcon
                icon={faCode}
                className="text-5xl text-indigo-500 mb-3"
              />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                150 K+
              </h2>
              <p className="leading-relaxed">Lines of Code</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-blue-200">
              <FontAwesomeIcon
                icon={faDonate}
                className="text-5xl text-blue-500 mb-3"
              />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                40+
              </h2>
              <p className="leading-relaxed">Sponsors</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-red-200">
              <FontAwesomeIcon
                icon={faAward}
                className="text-5xl text-red-500 mb-3"
              />

              <h2 className="title-font font-medium text-3xl text-gray-900">
                22+
              </h2>
              <p className="leading-relaxed">Prize Categories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
