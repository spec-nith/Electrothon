import React from "react";
import { useForm } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const BottomFooter = () => {
    return (
      <React.Fragment>
        <div className="md:flex justify-center gap-5 lg:gap-40 mt-5 font-sans">
          <div className=" md:visible flex justify-center mb-2">
            <a
              href="https://specnith.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-lg md:font-bold text-white hover:text-gray-300 "
            >
              <picture>
                <source srcSet="spec_logo.webp" type="image/webp" />
                <img
                  className="w-8 md:w-16"
                  src="spec_logo.png"
                  alt="spec_logo"
                />
              </picture>
            </a>
          </div>
          <div className=" flex justify-center mb-4">
            <ul>
              <li className=" text-white font-medium text-sm md:text-lg flex justify-center md:justify-start pb-2">
                RESOURCES
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1P_-npMEWQtOUAWnuJH66aK5h7sCxSgRy/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center md:justify-start text-sm md:md:text-sm text-gray-400 pb-2 hover:text-gray-300"
                >
                  Sponsorship Brochure
                </a>
              </li>
              <li>
                <a
                  href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center md:justify-start text-sm md:md:text-sm text-gray-400 pb-2 hover:text-gray-300"
                >
                  Code of Conduct
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="text-white flex text-sm md:text-lg justify-center mb-4 ">
            <ul>
              <li className="text-white font-medium flex justify-center md:justify-start pb-2 ">
                ADDRESS
              </li>
              <li className=" md:text-sm flex justify-center md:justify-start pb-2 text-gray-400 hover:text-gray-300">
                <a
                  href="https://www.google.com/maps/place/NIT+Hamirpur/@31.6750134,76.5271587,13z/data=!4m8!1m2!2m1!1sNIT+Hamirpur,+Himachal+Pradesh,+India!3m4!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.708371!4d76.527356"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NIT Hamirpur
                </a>
              </li>
              <li className=" md:text-sm flex justify-center md:justify-start pb-2 text-gray-400">
                Hamirpur, Himachal Pradesh, India
              </li>
              <li className=" md:text-sm flex justify-center md:justify-start text-gray-400">
                177005
              </li>
            </ul>
          </div>
          <div className="">
            <div className="flex justify-center md:justify-start text-sm md:text-lg font-medium  text-white pb-2">
              STAY CONNECTED
            </div>

            <div className="justify-center flex space-x-2 md:space-x-5 mt-1 md:mt-1 opacity-80 mb-10">
              <a
                href="https://discord.gg/cjMMRs7tHs"
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-1xl md:text-2xl text-blue-800 fill-current"
                  icon={faDiscord}
                />
              </a>
              <a
                href="https://www.facebook.com/spec.ece/"
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-1xl md:text-2xl text-blue-600 fill-current"
                  icon={faFacebook}
                />
              </a>
              <a
                href="https://twitter.com/SPEC__NITH"
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-1xl md:text-2xl text-blue-300 fill-current"
                  icon={faTwitter}
                />
              </a>
              <a
                href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83"
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-1xl md:text-2xl text-pink-600 fill-current"
                  icon={faInstagram}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-1xl md:text-2xl text-blue-500 fill-current"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-sm flex justify-center pb-2 text-gray-400">
          © 2022, SPEC NITH
        </div>
      </React.Fragment>
    );
  };

  const [state, handleSubmit] = useForm("mzbodbrg");
  if (state.succeeded) {
    return (
      <footer
        id="contact"
        className="flex justify-center px-4 text-gray-800 shadow-lg"
        style={{ backgroundColor: "rgba(34, 30, 30, 1)" }}
      >
        <div className="container py-6">
          <div className="max-w-screen-xl md:mt-4 px-8 grid gap-x-24 gap-y-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-24 md:pt-16 pb:10 md:pb-20 mx-auto text-gray-900">
            <div className="flex flex-col justify-around">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight header-theme">
                  Lets talk about everything!
                </h2>
                <div className="text-gray-300 mt-8">
                  Hate forms? Send us an email at{" "}
                  <a
                    className="underline hover:text-gray-300"
                    href="mailto:spec@nith.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    spec@nith.ac.in
                  </a>{" "}
                  instead.
                </div>
              </div>
              <picture>
                <source srcSet="email-contact.webp" type="image/webp" />
                <img
                  src="email-contact.png"
                  className="hidden md:block "
                  alt="imageContact"
                />
              </picture>
            </div>
            <div className="flex content-center">
              <div className="flex items-baseline">
                <p className="text-4xl font-bold lg:text-5xl text-white content-center m-auto">
                  We will get back to you soon !!
                </p>
              </div>
            </div>
          </div>
          <BottomFooter />
        </div>
      </footer>
    );
  }

  return (
    <footer
      id="contact"
      className="flex justify-center px-4 text-gray-800 shadow-lg -mb-6"
      style={{ backgroundColor: "rgba(34, 30, 30, 1)" }}
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out-cubic"
    >
      <div className="container py-6">
        <div className="max-w-screen-xl md:mt-4 px-8 grid gap-x-24 gap-y-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-24 md:pt-16 md:pb-32 mx-auto text-gray-900">
          <div className="flex flex-col justify-around">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight header-theme">
                Lets talk about everything!
              </h2>
              <div className="text-gray-300 mt-8">
                Hate forms? Send us an email at{" "}
                <a
                  className="underline hover:text-gray-300"
                  href="mailto:spec@nith.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  spec@nith.ac.in
                </a>{" "}
                instead.
              </div>
            </div>
            <picture>
              <source srcSet="email-contact.webp" type="image/webp" />
              <img
                src="email-contact.png"
                className="hidden md:block "
                alt="imageContact"
              />
            </picture>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  className="uppercase text-sm text-white font-bold"
                  htmlFor="Name"
                ></label>
                <div className="flex flex-col gap-4 px-0 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11"
                    viewBox="0 0 20 20"
                    fill="gray"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    className="pl-10 w-full text-white p-1 focus:outline-none focus:shadow-outline bg-transparent border-b-2  border-gray-700 text-lg hover:border-white"
                    type="text"
                    placeholder="Name"
                    name="Name"
                    id="Name"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label
                  className="uppercase text-sm text-gray-100 font-bold"
                  htmlFor="Sender"
                ></label>
                <div className="flex flex-col gap-4 px-0 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="font-medium text-2xl text-gray-400 absolute p-2.5 px-3 w-11"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <input
                    className="pl-10 w-full text-white p-1 focus:outline-none focus:shadow-outline bg-transparent border-b-2  border-gray-700 text-lg hover:border-white"
                    type="email"
                    placeholder="Email"
                    name="Sender"
                    id="Sender"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label
                  className="uppercase text-sm text-gray-100 font-bold"
                  htmlFor="Message"
                ></label>
                <textarea
                  className="w-full h-44 text-white mt-2 p-3 focus:outline-none focus:shadow-outline bg-transparent border-2 rounded-lg border-gray-700 text-lg hover:border-white"
                  name="Message"
                  placeholder="Message"
                  id="Message"
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-gray-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-gray-700 bg-opacity-40"
                  type="submit"
                  disabled={state.submitting}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <BottomFooter />
      </div>
    </footer>
  );
}
