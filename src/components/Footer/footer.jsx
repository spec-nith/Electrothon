import React from "react";
import { useForm } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";

export default function Footer() {
  const BottomFooter = () => {
    return (
      <React.Fragment>
        <div className="md:flex justify-center gap-5 lg:gap-40 mt-5 font-['Gugi'] ">
          <div className="flex justify-center mb-2 md:visible">
            <a
              href="https://spec.nith.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white md:text-lg md:font-bold hover:text-gray-300 "
            >
              <picture>
                <source srcSet="spec_logo.webp" type="image/webp" />
                <img
                  className="w-16 md:w-32"
                  src="spec_logo.png"
                  alt="spec_logo"
                />
              </picture>
            </a>
          </div>
          <div className="flex justify-center mb-4 ">
            <ul>
              <li className="flex justify-center pb-2 text-sm font-medium text-white md:text-lg md:justify-start">
                RESOURCES
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/15Kt6nRhNIgc7XbZNILL035yh8dhro_QP/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center pb-2 font-sans text-sm text-gray-400 md:justify-start md:md:text-sm hover:text-gray-300"
                >
                  Sponsorship Brochure
                </a>
              </li>
              <li>
                <a
                  href="https://harshmello.notion.site/harshmello/Code-of-Conduct-11809eecfb9a47259aa8557d8d044ec1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center pb-2 font-sans text-sm text-gray-400 md:justify-start md:md:text-sm hover:text-gray-300"
                >
                  Code of Conduct
                </a>{" "}
                <a
                  href="https://same-uranium-0e7.notion.site/Hacker-s-Guide-to-ELECTROTHON-5-0-94659968f7d648fda39772bb09660766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center pb-2 font-sans text-sm text-gray-400 md:justify-start md:md:text-sm hover:text-gray-300"
                >
                  Hacker Guide
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="flex justify-center mb-4 text-sm text-white md:text-lg ">
            <ul>
              <li className="flex justify-center pb-2 font-medium text-white md:justify-start ">
                ADDRESS
              </li>
              <li className="flex justify-center pb-2 font-sans text-gray-400 md:text-sm md:justify-start hover:text-gray-300">
                <a
                  href="https://www.google.com/maps/place/NIT+Hamirpur/@31.6750134,76.5271587,13z/data=!4m8!1m2!2m1!1sNIT+Hamirpur,+Himachal+Pradesh,+India!3m4!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.708371!4d76.527356"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NIT Hamirpur
                </a>
              </li>
              <li className="flex justify-center pb-2 font-sans text-gray-400 md:text-sm md:justify-start">
                Hamirpur, Himachal Pradesh, India
              </li>
              <li className="flex justify-center font-sans text-gray-400 md:text-sm md:justify-start">
                177005
              </li>
            </ul>
          </div>
          <div className="">
            <div className="flex justify-center pb-2 text-sm font-medium text-white md:justify-start md:text-lg">
              STAY CONNECTED
            </div>

            <div className="flex justify-center mt-1 mb-10 space-x-2 md:space-x-5 md:mt-1 opacity-80">
              <a
                href="https://discord.gg/tTra8Ssuh2"
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-blue-800 fill-current text-1xl md:text-2xl"
                  icon={faDiscord}
                />
              </a>
              <a
                href="https://www.facebook.com/spec.ece/"
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-blue-600 fill-current text-1xl md:text-2xl"
                  icon={faFacebook}
                />
              </a>
              <a
                href="https://twitter.com/electrothon"
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-blue-300 fill-current text-1xl md:text-2xl"
                  icon={faTwitter}
                />
              </a>
              <a
                href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83"
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-pink-600 fill-current text-1xl md:text-2xl"
                  icon={faInstagram}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-blue-500 fill-current text-1xl md:text-2xl"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-2 text-sm text-gray-400">
          © 2023, SPEC NITH
        </div>
      </React.Fragment>
    );
  };

  const [state, handleSubmit] = useForm("mzbodbrg");
  if (state.succeeded) {
    return (
      <footer
        id="contact"
        className="flex justify-center px-4 text-gray-800 shadow-lg font-['Gugi']"
        style={{ backgroundColor: "rgba(34, 30, 30, 1)" }}
      >
        <div className="container py-6">
          <div className="grid max-w-screen-xl grid-cols-1 px-8 mx-auto text-gray-900 md:mt-4 gap-x-24 gap-y-8 md:grid-cols-2 md:px-12 lg:px-16 xl:px-24 md:pt-16 pb:10 md:pb-20">
            <div className="flex flex-col justify-around">
              <div>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className={`${styles.innerWidth} mx-auto flex flex-col`}
                >
                  <TitleText
                    title={
                      <>
                        <h2 className="text-4xl lg:text-7xl font-bold text-[#8471ae] my-4 lg:my-6 font-[Oswald] ">
                          Lets talk about everything!
                        </h2>
                      </>
                    }
                    textStyles="text-center"
                  />
                </motion.div>
                <div className="mt-8 text-gray-300">
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
                <p className="content-center m-auto text-4xl font-bold text-white lg:text-5xl">
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
      className="flex justify-center px-4 mt-10 -mb-6 text-gray-800 shadow-lg md:mt-20"
    >
      <div className="container flex flex-col justify-center py-6 m-2 text-center">
        <div className="m-auto text-center ">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
          >
            <TitleText
              title={
                <>
                  <span className="text-4xl lg:text-6xl font-bold text-[#8471ae] my-4 lg:my-6 font-[Oswald] ">
                    Lets talk about everything!
                  </span>
                </>
              }
              textStyles="text-center"
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center m-4 mt-10 md:mt-4 lg:flex-row lg:space-x-44">
          <div className="block md:hidden " style={{ margin: "auto" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.2710634274194!2d76.52577699021529!3d31.708489708025382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a1%3A0x395f92d3a202a7d0!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1674924336344!5m2!1sen!2sin"
              title="map"
              width="300"
              height="200"
              className="shadow-lg invert-[0.8] rounded-xl"
              // style="border:0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="hidden md:block " style={{ margin: "auto" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.2710634274194!2d76.52577699021529!3d31.708489708025382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a1%3A0x395f92d3a202a7d0!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1674924336344!5m2!1sen!2sin"
              title="map"
              width="500"
              height="400"
              className=" shadow-lg invert-[0.8] rounded-3xl"
              // style="border:0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="flex flex-col justify-center space-y-6"
            style={{ margin: "auto" }}
          >
            <div className="mt-8 text-gray-300">
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
            <form onSubmit={handleSubmit}>
              <div className="">
                <label
                  className="text-sm font-bold text-white uppercase"
                  htmlFor="Name"
                ></label>
                <div className="flex flex-col gap-4 px-0 py-4 text-xl font-bold">
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
                    className="w-full p-1 pl-10 text-lg text-white bg-transparent border-b-2 border-gray-700 border-dashed focus:outline-none decoration-cyan-400 focus:shadow-outline hover:border-white "
                    type="text"
                    placeholder="Name"
                    name="Name"
                    id="Name"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label
                  className="text-sm font-bold text-gray-100 uppercase"
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
                    className="w-full p-1 pl-10 text-lg text-white bg-transparent border-b-2 border-gray-700 border-dashed focus:outline-none focus:shadow-outline hover:border-white"
                    type="email"
                    placeholder="Email"
                    name="Sender"
                    id="Sender"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label
                  className="text-sm font-bold text-gray-100 uppercase"
                  htmlFor="Message"
                ></label>
                <textarea
                  className="w-full p-3 mt-2 text-lg text-white bg-transparent border-2 border-gray-700 border-dashed rounded-lg h-44 focus:outline-none focus:shadow-outline hover:border-white"
                  name="Message"
                  placeholder="Message"
                  id="Message"
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  className="uppercase text-sm font-bold tracking-wide  text-gray-100 p-3 rounded-full w-full focus:outline-none focus:shadow-outline hover:bg-gradient-to-r hover:from-[#7946AB] hover:to-[#2565C9]  bg-opacity-40 border-[#6A6A6A] border-2 bg-gradient-to-b from-[rgba(255,255,255,0.08)] hover:border-transparent"
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
