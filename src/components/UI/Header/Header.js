import {
  faHome,
  faChalkboardTeacher,
  faCalendarDay,
  faAward,
  faHandHoldingUsd,
  faIdCardAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <nav className="bg-white shadow-lg">
        <div className="w-full mx-auto px-4 flex justify-around space-x-20">
          <div className="hidden md:flex items-center py-4 px-2">
            <a href="/" className="">
              {/* <img src="logo.png" alt="Logo"  className="h-8 w-8 mr-2" /> */}
              <span className="font-semibold text-gray-500 text-lg">SPEC</span>
            </a>
          </div>

          <div className="hidden md:flex items-center h-full space-x-1">
            <a
              href="#hackers"
              className="py-4 px-2 text-gray-500 hover:text-green-500 font-semibold transition duration-300"
            >
              HackersGuide
            </a>
            <a
              href="#workshop"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Workshops
            </a>
            <a
              href="#schedule"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              Schedule
            </a>
            <a
              href="#prizes"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              Prizes
            </a>
            <a
              href="#sponsors"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              Sponsors
            </a>
            <a
              href="#contact"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
      <span>
        <div className="md:hidden min-w-screen items-center px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10 inline-block">
          <div className="md:hidden items-center">
            <button
              className="outline-none mobile-menu-button text-xl pt-4"
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              <FontAwesomeIcon className="text-lg" icon={faBars} fixedWidth />
            </button>
          </div>
          <Transition
            show={isOpen}
            enter="ease-out transition-medium"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-out transition-medium"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              // keydown....esc
              className="z-10 fixed inset-0 transition-opacity"
            >
              <div
                onClick={() => setIsOpen((prevState) => !prevState)}
                className="absolute inset-0 bg-black opacity-0"
                tabIndex="0"
              ></div>
            </div>
          </Transition>
          {isOpen && (
            <aside
              className={`transform top-0 left-0 w-64 bg-gray-100 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="bg-white rounded-r-3xl overflow-hidden space-y-5">
                <div className="flex w-full items-center justify-center h-20 shadow-md">
                  <h1 className="text-3xl uppercase text-indigo-500">SPEC</h1>
                </div>
                <a
                  href="#hackers"
                  className="flex flex-row items-center h-12 transform   transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  onClick={() => setIsOpen((prevState) => !prevState)}
                >
                  <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <FontAwesomeIcon
                      className="text-lg"
                      icon={faHome}
                      fixedWidth
                    />
                  </span>
                  <span className="text-sm font-medium">Hackers Guide</span>
                </a>

                <a
                  href="#workshops"
                  className="flex flex-row items-center h-12 transform   transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  onClick={() => setIsOpen((prevState) => !prevState)}
                >
                  <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <FontAwesomeIcon
                      className="text-lg"
                      icon={faChalkboardTeacher}
                      fixedWidth
                    />
                  </span>
                  <span className="text-sm font-medium">Workshops</span>
                </a>

                <a
                  href="#schedule"
                  className="flex flex-row items-center h-12 transform   transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  onClick={() => setIsOpen((prevState) => !prevState)}
                >
                  <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <FontAwesomeIcon
                      className="text-lg"
                      icon={faCalendarDay}
                      fixedWidth
                    />
                  </span>
                  <span className="text-sm font-medium">Schedule</span>
                </a>

                <a
                  href="#prizes"
                  className="flex flex-row items-center h-12 transform   transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  onClick={() => setIsOpen((prevState) => !prevState)}
                >
                  <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <FontAwesomeIcon
                      className="text-lg"
                      icon={faAward}
                      fixedWidth
                    />
                  </span>
                  <span className="text-sm font-medium">Prizes</span>
                </a>
                <a
                  href="#sponsors"
                  className="flex flex-row items-center h-12 transform   transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  onClick={() => setIsOpen((prevState) => !prevState)}
                >
                  <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <FontAwesomeIcon
                      className="text-lg"
                      icon={faHandHoldingUsd}
                      fixedWidth
                    />
                  </span>
                  <span className="text-sm font-medium">Sponsors</span>
                </a>
                <a
                  href="#contact"
                  className="flex flex-row items-center h-12 transform transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  onClick={() => setIsOpen((prevState) => !prevState)}
                >
                  <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <FontAwesomeIcon
                      className="text-lg"
                      icon={faIdCardAlt}
                      fixedWidth
                    />
                  </span>
                  <span className="text-sm font-medium">Contact Us</span>
                </a>
              </div>
            </aside>
          )}
        </div>
      </span>
    </React.Fragment>
  );
};

export default Nav;
