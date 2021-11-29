import React from "react";
import { useForm } from "@formspree/react";
export default function Footer() {
  const BottomFooter = () => {
    return (
      <div className="flex items-center justify-around mt-6">
          <div className="flex">
            <a
              href="https://specnith.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-white"
            >
              SPEC
            </a>
          </div>
          <div className="flex">
            <a
              href="https://drive.google.com/file/d/10KVmRYHKAQIkMVR3nFIqbaPpL1wpMYTz/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-white"
            >
              CODE OF CONDUCT
            </a>
          </div>
          <div className="flex">
            <a
              href="https://drive.google.com/file/d/1P_-npMEWQtOUAWnuJH66aK5h7sCxSgRy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-white"
            >
              SPONSORSHIP BROCHURE
            </a>
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
                <div className="text-gray-200 mt-8">
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
    >
      <div className="container py-6">
        <div className="max-w-screen-xl md:mt-4 px-8 grid gap-x-24 gap-y-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-24 md:pt-16 md:pb-32 mx-auto text-gray-900">
          <div className="flex flex-col justify-around">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight header-theme">
                Lets talk about everything!
              </h2>
              <div className="text-gray-200 mt-8">
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
