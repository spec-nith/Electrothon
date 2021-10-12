import React from "react";

export default function Introduction() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-10 sm:pt-4 h-screen flex items-center"
    >
      <div
        className="max-w-7xl mx-auto md:mx-20"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="relative mx-0 md:mx-20 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 lg:max-w-2xl lg:w-full">
          <main className="mt-2 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 lg:py-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight  sm:text-5xl md:text-6xl">
                <span className="block xl:inline font-extrabold header-theme">
                  Electothon 4.0
                </span>
                <span className="block text-indigo-600 text-normal">2022</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                SEARCH | PLAN | ENGAGE | CREATE
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://devfolio.co/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className={`w-full items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-400 ${true ? 'cursor-not-allowed' : 'hover:bg-indigo-700'} md:py-4 md:text-lg md:px-10 z-1`} disabled={true}>
                      Apply with Devfolio
                    </button>
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://specnith.com/electrothon.html"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Electrothon 3.0
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden xl:block"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full hero-background"
          src="./bg.jpg"
          alt=""
        />
      </div>
    </section>
  );
}
