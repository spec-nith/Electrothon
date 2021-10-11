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
    <div className="w-full bg-blue-900">
      <div className="flex flex-wrap text-center text-white">
        <div className="w-full md:w-1/3 p-5 border-r border-blue-800 align-center">
          <div className="my-6 ml-3 text-xl font-semibold">ABOUT US</div>
          <ul type="none" className="text-lg space-y-2">
            <li>
              <a
                href="https://hackcodeofconduct.org/2012-electrothon"
                target="_blank"
                rel="noreferrer noopener"
              >
                <h5>
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faCode}
                    fixedWidth
                  />{" "}
                  Code Of Conduct
                </h5>
              </a>
            </li>
            <li>
              <a
                href="mailto:spec@nith.ac.in"
                target="_blank"
                rel="noreferrer noopener"
              >
                <h5>
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faEnvelope}
                    fixedWidth
                  />{" "}
                  spec@nith.ac.in
                </h5>
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/cjMMRs7tHs"
                target="_blank"
                rel="noreferrer noopener"
              >
                <h5>
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faDiscord}
                    fixedWidth
                  />
                  Join our Discord
                </h5>{" "}
              </a>
            </li>
            <li>
              <a href="../index.html" target="_blank" rel="noreferrer noopener">
                <h5>
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faUsers}
                    fixedWidth
                  />{" "}
                  About SPEC
                </h5>
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/Hacker-s-Guide-to-Electrothon-3-0-528b6b2f10bd48dd812ed8dd9f99ce7f"
                target="_blank"
                rel="noreferrer noopener"
              >
                <h5>
                  <FontAwesomeIcon
                    className="text-lg"
                    icon={faBook}
                    fixedWidth
                  />
                  Hackers Guide
                </h5>
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 p-5 border-r border-blue-800">
          <div className="mt-6 text-xl font-semibold">SAY HELLO!</div>
          <form className="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded">
            <div className="flex items-center mb-4">
              <input
                className="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                className="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <textarea
                className="w-full h-24 px-2 pt-2 border-b-2 border-blue-800 bg-blue-900 text-white"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="w-full py-2 px-4 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold"
                type="button"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/3 p-5 border-r border-blue-800">
          <div className="my-6 text-xl font-semibold">CONTACT US</div>
          <p className="mt-8 text-gray-400">
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
            <div className="flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-blue-800 cursor-pointer">
              <FontAwesomeIcon
                className="text-xl"
                icon={faFacebook}
                fixedWidth
              />
            </div>
            <div className="flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-blue-800 cursor-pointer">
              <FontAwesomeIcon
                className="text-xl"
                icon={faLinkedin}
                fixedWidth
              />
            </div>
            <div className="flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-blue-800 cursor-pointer">
              <FontAwesomeIcon
                className="text-xl"
                icon={faInstagram}
                fixedWidth
              />
            </div>
            <div className="flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-blue-800 cursor-pointer">
              <FontAwesomeIcon
                className="text-xl"
                icon={faDiscord}
                fixedWidth
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
