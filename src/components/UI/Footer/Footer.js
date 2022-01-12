import React from "react";
import { useForm } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const BottomFooter = () => {
    return (

      <div className="md:flex justify-center gap-5 lg:gap-40 mt-5">
        <div className=" md:visible flex justify-center mb-2">
          <a
            href="https://specnith.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-lg md:font-bold text-white hover:text-gray-300 "
          >
            <img className="h-10 md:h-28" src="logo.png" alt="spec_logo" />
          </a>
        </div>
        <div className=" flex justify-center mb-4">
          <ul >
            <li className=" text-gray-500 font-bold text-sm md:text-lg flex justify-center md:justify-start">ABOUT</li>
            <li>
              <a
                href="mailto:spec@nith.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center md:justify-start text-sm md:md:text-sm  text-white hover:text-gray-300"
              >
                Mail to: spec@nith.ac.in
              </a>
              <li> <a
                href="https://drive.google.com/file/d/1P_-npMEWQtOUAWnuJH66aK5h7sCxSgRy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center md:justify-start text-sm md:md:text-sm text-white hover:text-gray-300"
              >
                Sponsorship Brochure
              </a></li></li>
            <li>
              <a
                href="https://drive.google.com/file/d/10KVmRYHKAQIkMVR3nFIqbaPpL1wpMYTz/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center md:justify-start text-sm md:md:text-sm text-white hover:text-gray-300"
              >
                Code of Conduct
              </a> </li>
            <li>
              <a
                href="https://www.notion.so/Hacker-s-Guide-to-Electrothon-3-0-528b6b2f10bd48dd812ed8dd9f99ce7f"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center md:justify-start text-sm md:md:text-sm text-white hover:text-gray-300"
              >
                Hackers Guide
              </a></li>
          </ul>
        </div>
        <div className="text-white flex text-sm md:text-lg justify-center mb-4 ">
          <ul>
            <li className="text-gray-500 font-bold flex justify-center md:justify-start">ADDRESS</li>
            <li className=" md:text-sm flex justify-center md:justify-start">NIT-Hamirpur</li>
            <li className=" md:text-sm flex justify-center md:justify-start">Himachal Pradesh, India</li>
            <li className=" md:text-sm flex justify-center md:justify-start">177005</li>
          </ul>

        </div>
        <div class="">
          <div className="flex justify-center md:justify-start text-sm md:text-lg font-bold  text-gray-500">
            STAY CONNECTED</div>

          <div className="justify-center flex space-x-2 md:space-x-5 mt-1 md:mt-1 opacity-80 mb-10">
            <a
              href="https://discord.gg/cjMMRs7tHs"
              rel="noreferrer noopenor"
              target="_blank">
              <FontAwesomeIcon className="text-1xl md:text-2xl text-blue-800 fill-current" icon={faDiscord} />
            </a>
            <a
              href="https://www.facebook.com/spec.ece/"
              rel="noreferrer noopenor"
              target="_blank">
              <FontAwesomeIcon className="text-1xl md:text-2xl text-blue-600 fill-current" icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/SPEC__NITH"
              rel="noreferrer noopenor"
              target="_blank">
              <FontAwesomeIcon className="text-1xl md:text-2xl text-blue-300 fill-current" icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83"
              rel="noreferrer noopenor"
              target="_blank">
              <FontAwesomeIcon className="text-1xl md:text-2xl text-pink-600 fill-current" icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
              rel="noreferrer noopenor"
              target="_blank">
              <FontAwesomeIcon className="text-1xl md:text-2xl text-blue-500 fill-current" icon={faLinkedin} />
            </a>
          </div>

        </div>
      </div>

    );
  };

  const [state, handleSubmit] = useForm("xoqyboee");
  if (state.succeeded) {
    return (
      <footer
        id="contact"
        className="flex justify-center px-4 text-gray-800 rounded-lg shadow-lg"
        style={{ backgroundColor: "rgba(34, 30, 30, 0.83)" }}
      >
        <div className="container py-6">
          <div className="max-w-screen-xl md:mt-4 px-8 grid gap-x-24 gap-y-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-24 md:pt-16 md:pb-32 mx-auto text-gray-900">
            <div className="flex flex-col justify-around">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight header-theme">
                  Lets talk about everything!
                </h2>
                <div className="text-gray-300 mt-8">
                  Hate forms? Send us an{" "}
                  <a
                    className="underline hover:text-gray-300"
                    href="mailto:spec@nith.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    email
                  </a>{" "}
                  instead.
                </div>
              </div>
              <picture>
                <source srcSet="webp/email-contact.webp" type="image/webp" />
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
      className="flex justify-center px-4 text-gray-800 rounded-lg shadow-lg"
      style={{ backgroundColor: "rgba(34, 30, 30, 0.83)" }}
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
                Hate forms? Send us an{" "}
                <a
                  className="underline"
                  href="mailto:spec@nith.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  email
                </a>{" "}
                instead.
              </div>
            </div>
            <img
              src="email-contact.png"
              className="hidden md:block "
              alt="imageContact"
            />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  className="uppercase text-sm text-white font-bold"
                  htmlFor="Name"
                >
                  Full Name
                </label>
                <input
                  className="w-full text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline bg-gray-700 bg-opacity-20 text-lg"
                  type="text"
                  placeholder=""
                  name="Name"
                  id="Name"
                />
              </div>
              <div className="mt-8">
                <label
                  className="uppercase text-sm text-gray-100 font-bold"
                  htmlFor="Sender"
                >
                  Email
                </label>
                <input
                  className="w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline bg-red bg-opacity-20 bg-gray-700 text-white text-lg"
                  type="email"
                  name="Sender"
                  id="Sender"
                />
              </div>
              <div className="mt-8">
                <label
                  className="uppercase text-sm text-gray-100 font-bold"
                  htmlFor="Message"
                >
                  Message
                </label>
                <textarea
                  className="w-full h-32  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline bg-gray-700 bg-opacity-20 text-white text-lg"
                  name="Message"
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
