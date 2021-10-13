import React from "react";
import { useForm } from "@formspree/react";
export default function Footer() {
  const BottomFooter = () => {
    return (
      <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
        <div>
          <a
            href="https://specnith.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            SPEC
          </a>
        </div>

        <div className="flex mt-4 md:m-0">
          <div className="-mx-4">
            <p className="px-4 text-md font-normal text-gray-800 text-center">
              <span className="block sm:inline">Designed By:</span>
              <a
                href="https://www.linkedin.com/in/avishrantsh/"
                className="text-blue-400 hover:text-indigo-800 cursor-pointer block sm:inline mt-1 sm:mt-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;Avishrant Sharma
              </a>
              <span className="hidden sm:inline">,</span>
              <a
                href="https://www.linkedin.com/in/aman-jagotra-26bb38207/"
                className="text-blue-400 hover:text-indigo-800 cursor-pointer block sm:inline mt-1 sm:mt-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;Aman Jagotra
              </a>
              <span className="hidden sm:inline">,</span>
              <a
                href="https://www.linkedin.com/in/priyanshu-rajput-144990201/"
                className="text-blue-400 hover:text-indigo-800 cursor-pointer block sm:inline mt-1 sm:mt-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;Priyanshu Rajput{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const [state, handleSubmit] = useForm("xoqyboee");
  if (state.succeeded) {
    return (
      <div className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-800 bg-gray-100 rounded-lg shadow-lg pt-10">
        <div className="container py-6">
          <h1 className="text-2xl font-bold text-center lg:text-2xl">
            Thanks for your Response
          </h1>
          <BottomFooter />
        </div>
      </div>
    );
  }

  return (
    <footer
      id="contact"
      className="flex justify-center px-4 text-gray-800 rounded-lg shadow-lg bg-gray-100"
    >
      <div className="container py-6">
        <div className="max-w-screen-xl md:mt-4 px-8 grid gap-x-24 gap-y-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-24 md:pt-16 md:pb-32 mx-auto text-gray-900">
          <div className="flex flex-col justify-around">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div className="text-gray-700 mt-8">
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
                  className="uppercase text-sm text-gray-600 font-bold"
                  htmlFor="Name"
                >
                  Full Name
                </label>
                <input
                  className="w-full content-theme  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                  name="Name"
                  id="Name"
                />
              </div>
              <div className="mt-8">
                <label
                  className="uppercase text-sm text-gray-600 font-bold"
                  htmlFor="Sender"
                >
                  Email
                </label>
                <input
                  className="w-full content-theme mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  name="Sender"
                  id="Sender"
                />
              </div>
              <div className="mt-8">
                <label
                  className="uppercase text-sm text-gray-600 font-bold"
                  htmlFor="Message"
                >
                  Message
                </label>
                <textarea
                  className="w-full h-32 content-theme  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  name="Message"
                  id="Message"
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-indigo-700"
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
