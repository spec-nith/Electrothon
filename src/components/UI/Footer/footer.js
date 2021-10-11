import React from "react";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faCode,
  faEnvelope,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function footer() {
  return (
    <section id="contact" className="w-full bg-gray-700">
      <div className="flex flex-wrap text-center text-white">
        <div
          className="w-full md:w-1/3 p-5 border-r border-gray-600 align-center"
          aria-label="About Us"
        >
          <div className="my-6 ml-3 text-3xl">ABOUT US</div>
          <ul type="none" className="text-lg space-y-2">
            <li>
              <a
                href="https://hackcodeofconduct.org/2012-electrothon"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="mr-2">
                  <FontAwesomeIcon className="text-lg" icon={faCode} />
                </span>
                <span>Code Of Conduct</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:spec@nith.ac.in"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="mr-2">
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faEnvelope}
                    fixedWidth
                  />
                </span>
                <span>spec@nith.ac.in</span>
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/cjMMRs7tHs"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="mr-2">
                  <FontAwesomeIcon
                    className="text-lg mr-2"
                    icon={faDiscord}
                    fixedWidth
                  />
                </span>
                <span>Join our Discord</span>
              </a>
            </li>
            <li>
              <a href="../index.html" target="_blank" rel="noreferrer noopener">
                <span className="mr-2">
                  <FontAwesomeIcon
                    className="text-lg mr-2"
                    icon={faUsers}
                    fixedWidth
                  />
                </span>
                <span>About SPEC</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/Hacker-s-Guide-to-Electrothon-3-0-528b6b2f10bd48dd812ed8dd9f99ce7f"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="mr-2">
                  <FontAwesomeIcon
                    className="text-lg mr-2"
                    icon={faBook}
                    fixedWidth
                  />
                </span>
                <span>Hackers Guide</span>
              </a>
            </li>
          </ul>
        </div>

        <div
          className="w-full md:w-1/3 p-5 border-r border-gray-600"
          aria-label="Contact Us"
        >
          <div className="mt-6 text-3xl">SAY HELLO!</div>
          <form className="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded">
            <div className="flex items-center mb-4">
              <input
                className="w-full h-10 p-2 border-b border-blue-300 bg-white text-white"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                className="w-full h-10 p-2 border-b border-blue-300 bg-white text-white"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <textarea
                className="w-full h-24 px-2 pt-2 border-b-2 border-blue-300 bg-white text-white"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="w-full py-2 px-4 bg-transparent hover:bg-white hover:text-blue-400 text-white font-bold border border-white hover:border-transparent rounded"
                type="button"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
        <div
          className="w-full md:w-1/3 p-5 border-r border-gray-600"
          aria-label="Social"
        >
          <div className="my-6 text-3xl">CONTACT US</div>
          <p className="mt-8">
            National Institute of Technology, Hamirpur
            <br />
            Hamirpur, 177005 <br />
            Himachal Pradesh, India <br />
            {/* <strong>Phone:</strong> +1 5589 55488 55 <br/> */}
            <strong>Email:</strong>{" "}
            <a
              href="mailto:spec@nith.ac.in"
              target="_blank"
              rel="noreferrer noopener"
            >
              spec@nith.ac.in
            </a>
          </p>
          <div className="relative w-20 h-20 mx-auto my-12 bg-blue-300 rotate-45">
            <a
              className="flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-gray-600"
              href="https://www.facebook.com/spec.ece"
              aria-label="Facebook"
              target="_blank"
            >
              <FontAwesomeIcon
                className="text-xl"
                icon={faFacebook}
                fixedWidth
              />
            </a>
            <a
              className="flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-gray-600"
              href="https://www.linkedin.com/company/spec-nith/mycompany/"
              aria-label="Linkedin"
              target="_blank"
            >
              <FontAwesomeIcon
                className="text-xl"
                icon={faLinkedin}
                fixedWidth
              />
            </a>
            <a
              href="https://www.instagram.com/s.p.e.c_nith/"
              className="flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-gray-600"
              aria-label="Instagram"
              target="_blank"
            >
              <FontAwesomeIcon
                className="text-xl"
                icon={faInstagram}
                fixedWidth
              />
            </a>
            <a
              href="https://discord.gg/cjMMRs7tHs"
              className="flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-gray-600 cursor-pointer"
              aria-label="Join our Discord"
              target="_blank"
            >
              <FontAwesomeIcon
                className="text-xl"
                icon={faDiscord}
                fixedWidth
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
