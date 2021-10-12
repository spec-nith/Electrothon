import {
  faHome,
  faChalkboardTeacher,
  faCalendarDay,
  faAward,
  faHandHoldingUsd,
  faIdCardAlt,
  faBars,
  faWindowRestore,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <nav className="fixed w-full top-0 bg-white shadow-lg z-10">
        <div className="mx-auto px-4 flex justify-around space-x-20">
          <div className="hidden md:flex items-center py-4 px-2">
            <a href="https://specnith.com/">
              {/* <img src="logo.png" alt="Logo"  className="h-8 w-8 mr-2" /> */}
              <span className=" text-gray-600 text-lg">SPEC</span>
            </a>
          </div>

          <div className="hidden text-normal md:flex items-center h-full space-x-1">
            <Link
              activeClass="text-green-600 border-b-2"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300 transition-all"
            >
              Home
            </Link>
            <Link
              activeClass="text-green-600 border-b-2"
              to="general-content"
              spy={true}
              smooth={true}
              duration={500}
              className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300 transition-all"
            >
              About Us
            </Link>
            <Link
              activeClass="text-green-600 border-b-2"
              to="schedule"
              spy={true}
              smooth={true}
              duration={500}
              className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300 transition-all"
            >
              Schedule
            </Link>
            <Link
              activeClass="text-green-600 border-b-2"
              to="themes"
              spy={true}
              smooth={true}
              duration={500}
              className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300 transition-all"
            >
              Themes
            </Link>
            {/* <Link
              activeClass="text-green-600 border-b-2"
              to="prizes"
              spy={true}
              smooth={true}
              
              duration={500}
              className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300"
            >
              Prizes
            </Link>
            <Link
              activeClass="text-green-600 border-b-2"
              to="workshops"
              spy={true}
              smooth={true}
              
              duration={500}
              className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300"
            >
              Workshops
            </Link>
            <Link
              activeClass="text-green-600 border-b-2"
              to="sponsors"
              spy={true}
              smooth={true}
              
              duration={500}
              className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300"
            >
              Sponsors
            </Link> */}
            <Link
              activeClass="text-green-600 border-b-2"
              to="faq"
              spy={true}
              smooth={true}
              duration={500}
              className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300 transition-all"
            >
              FAQ
            </Link>
            <Link
              activeClass="text-green-600 border-b-2"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      <span className="fixed top-0 bg-transparent z-10">
        <div className="md:hidden w-auto items-center pl-6 pr-10 h-16 text-gray-700 z-10 inline-block">
          <div className="md:hidden items-center fixed bg-transparent">
            <button
              className="outline-none mobile-menu-button text-xl pt-4"
              onClick={() => setIsOpen((prevState) => !prevState)}
              name="Menu Toggler"
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
              className={`transform top-0 left-0 w-64 fixed h-full overflow-auto rounded-r-3xl space-y-5 ease-in-out transition-all duration-300 z-30 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              <div className="flex w-full items-center justify-center h-20 shadow-md">
                <h1 className="text-3xl uppercase text-indigo-500">SPEC</h1>
              </div>
              <Link
                activeClass="text-green-600 border-b-2"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="flex flex-row items-center h-12 transform   transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800"
                onClick={() => setIsOpen((prevState) => !prevState)}
              >
                <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-600">
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faHome}
                    fixedWidth
                  />
                </span>
                <span className="text-sm font-medium">Home</span>
              </Link>

              <Link
                activeClass="text-green-600 border-b-2"
                to="general-content"
                spy={true}
                smooth={true}
                duration={500}
                className="flex flex-row items-center h-12 transform   transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800"
                onClick={() => setIsOpen((prevState) => !prevState)}
              >
                <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-600">
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faUsers}
                    fixedWidth
                  />
                </span>
                <span className="text-sm font-medium">About Us</span>
              </Link>

              <Link
                activeClass="text-green-600 border-b-2"
                to="schedule"
                spy={true}
                smooth={true}
                duration={500}
                className="flex flex-row items-center h-12 transform   transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800"
                onClick={() => setIsOpen((prevState) => !prevState)}
              >
                <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-600">
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faCalendarDay}
                    fixedWidth
                  />
                </span>
                <span className="text-sm font-medium">Schedule</span>
              </Link>

              <Link
                activeClass="text-green-600 border-b-2"
                to="themes"
                spy={true}
                smooth={true}
                duration={500}
                className="flex flex-row items-center h-12 transform   transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800"
                onClick={() => setIsOpen((prevState) => !prevState)}
              >
                <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-600">
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faWindowRestore}
                    fixedWidth
                  />
                </span>
                <span className="text-sm font-medium">Themes</span>
              </Link>

              {/* <Link
                activeClass="text-green-600 border-b-2"
                to="prizes"
                spy={true}
                smooth={true}
                duration={500}
                className="flex flex-row items-center h-12 transform   transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800"
                onClick={() => setIsOpen((prevState) => !prevState)}
              >
                <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-600">
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faAward}
                    fixedWidth
                  />
                </span>
                <span className="text-sm font-medium">Prizes</span>
              </Link>
              <Link
                activeClass="text-green-600 border-b-2"
                to="workshops"
                spy={true}
                smooth={true}
                duration={500}
                className="flex flex-row items-center h-12 transform   transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800"
                onClick={() => setIsOpen((prevState) => !prevState)}
              >
                <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-600">
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faChalkboardTeacher}
                    fixedWidth
                  />
                </span>
                <span className="text-sm font-medium">Workshops</span>
              </Link>
              <Link
                activeClass="text-green-600 border-b-2"
                to="sponsors"
                spy={true}
                smooth={true}
                duration={500}
                className="flex flex-row items-center h-12 transform   transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800"
                onClick={() => setIsOpen((prevState) => !prevState)}
              >
                <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-600">
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faHandHoldingUsd}
                    fixedWidth
                  />
                </span>
                <span className="text-sm font-medium">Sponsors</span>
              </Link> */}
              <Link
                activeClass="text-green-600 border-b-2"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="flex flex-row items-center h-12 transform   transition-transform ease-in duration-200 text-gray-600 hover:text-gray-800"
                onClick={() => setIsOpen((prevState) => !prevState)}
              >
                <span className="flex items-center justify-center h-12 w-12 text-lg text-gray-600">
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faIdCardAlt}
                    fixedWidth
                  />
                </span>
                <span className="text-sm font-medium">Contact Us</span>
              </Link>
            </aside>
          )}
        </div>
      </span>
    </React.Fragment>
  );
};

export default Nav;
