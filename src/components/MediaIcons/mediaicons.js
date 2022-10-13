import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import React, { useState, useRef, useEffect } from "react";

const MediaIcons = (props) => {
  let [toggle, setToggle] = useState(true);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(true);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);
  return (
    <React.Fragment>
      <div className="bottom-0 right-0 text-white fixed" ref={ref}>
        <div
          className={
            "w-10 transform ease-in-out transition-all duration-300  relative " +
            (toggle ? "hidden" : "block")
          }
        >
          <Transition
            show={!toggle}
            enter="transition duration-1000 ease-in-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-2000 ease-in-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/* <span
              className="absolute"
              style={{ transform: "translate(0,-1000%)" }}
            >
              <a
                className="bg-transparent hover:bg-blue-700 text-white font-bold p-4 rounded-full mb-4 text-lg"
                href="https://discord.gg/cjMMRs7tHs"
                target="_blank"
                rel="noreferrer noopenor"
                aria-label="Discord"
                name="discord"
              >
                <FontAwesomeIcon fixedWidth icon={faDiscord} />
              </a>
            </span> */}
            <span
              className="absolute"
              style={{ transform: "translate(0,-800%)" }}
            >
              <a
                className="bg-transparent hover:bg-blue-700 text-white font-bold p-4 rounded-full mb-4 text-lg"
                href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
                rel="noreferrer noopenor"
                target="_blank"
                aria-label="LinkedIn"
                name="LinkedIn"
              >
                <FontAwesomeIcon fixedWidth icon={faLinkedinIn} />
              </a>
            </span>
            <span
              className="absolute"
              style={{ transform: "translate(0,-600%)" }}
            >
              <a
                className="bg-transparent hover:bg-blue-700 text-white font-bold p-4 rounded-full mb-4 text-lg"
                href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83"
                rel="noreferrer noopenor"
                target="_blank"
                aria-label="Instagram"
                name="instagram"
              >
                <FontAwesomeIcon fixedWidth icon={faInstagram} />
              </a>
            </span>
            <span
              className="absolute"
              style={{ transform: "translate(0,-400%)" }}
            >
              <a
                className="bg-transparent hover:bg-blue-700 text-white font-bold p-4 rounded-full mb-4 text-lg"
                href="https://twitter.com/SPEC__NITH"
                rel="noreferrer noopenor"
                target="_blank"
                aria-label="Twitter"
                name="twitter"
              >
                <FontAwesomeIcon fixedWidth icon={faTwitter} />
              </a>
            </span>
            <span
              className="absolute"
              style={{ transform: "translate(0,-200%)" }}
            >
              <a
                className="bg-transparent hover:bg-blue-700 text-white font-bold p-4 rounded-full mb-4 text-lg"
                href="https://www.facebook.com/spec.ece/"
                rel="noreferrer noopenor"
                target="_blank"
                aria-label="Facebook"
                name="facebook"
              >
                <FontAwesomeIcon fixedWidth icon={faFacebookF} />
              </a>
            </span>
          </Transition>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded-full mb-4 mr-4"
          aria-label="Social Media"
          onClick={() => setToggle((prevState) => !prevState)}
        >
          <FontAwesomeIcon className="text-2xl" icon={faComments} />
        </button>
      </div>
    </React.Fragment>
  );
};
export default MediaIcons;
