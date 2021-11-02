import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import navItems from "./Nav_tems";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarLG = (props) => {
    return (
      <Link
        activeClass={
          props.item.hide != null ? "" : "text-purple-100 border-b-2 "
        }
        to={props.item.id}
        spy={true}
        offset={-60}
        smooth={true}
        duration={1000}
        className="py-4 px-2 text-gray-600 hover:text-white transition duration-300 transition-all cursor-pointer"
      >
        {props.item.name}
      </Link>
    );
  };

  const NavbarSM = (props) => {
    return (
      <Link
        activeClass="text-indigo-400 nav-theme"
        to={props.item.id}
        spy={true}
        offset={+10}
        smooth={true}
        duration={1000}
        className="flex flex-row items-center h-12 transform transition-transform ease-in duration-200 text-gray-400 hover:text-gray-800"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span className="flex items-center justify-center h-12 w-12 text-lg">
          <FontAwesomeIcon
            className="text-lg"
            icon={props.item.icon}
            fixedWidth
          />
        </span>
        <span className="text-sm font-medium">{props.item.name}</span>
      </Link>
    );
  };

  return (
    <React.Fragment>
      <nav className="fixed w-full top-0  shadow-lg z-10 nav-theme">
        <div className="mx-auto px-4 flex justify-around space-x-20">
          <div className="hidden md:flex items-center py-4 px-2">
            <a href="https://specnith.com/">
              {/* <img src="logo.png" alt="Logo"  className="h-8 w-8 mr-2" /> */}
              <span className=" text-gray-200 text-2xl font-black">SPEC</span>
            </a>
          </div>

          <div className="hidden text-normal md:flex items-center h-full space-x-1">
            {navItems.map((item) => (
              <NavbarLG item={item} key={item.id} />
            ))}
          </div>
        </div>
      </nav>
      <span className="fixed top-0 bg-transparent z-10">
        <div className="md:hidden w-auto items-center pl-3 pr-10 h-16 text-gray-700 z-10 inline-block">
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
            <div className="z-10 fixed inset-0 transition-opacity">
              <div
                onClick={() => setIsOpen((prevState) => !prevState)}
                className="absolute inset-0 opacity-0 "
                tabIndex="0"
              ></div>
            </div>
          </Transition>

          <aside
            className={`transform top-0 left-0 w-64 fixed h-full z-40 nav-theme overflow-auto rounded-r-3xl space-y-5 ease-in-out transition-all duration-300 z-30 ease-in-out transition-all duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <div className="flex w-full items-center justify-center h-20 shadow-md">
              <h1 className="text-3xl uppercase text-indigo-500">SPEC</h1>
            </div>

            {navItems.map((item) => (
              <NavbarSM item={item} key={item.id} />
            ))}
          </aside>
        </div>
      </span>
    </React.Fragment>
  );
};

export default Nav;
