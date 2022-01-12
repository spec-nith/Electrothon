import React from "react";

export default function Content() {
  return (
    <>
      <section
        id="whats-new"
        className="relative overflow-hidden mt-2 container-theme p-6"
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        <div
          className="flex"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="2500"
          data-aos-easing="ease-in-out-cubic"
        >
          <div className="w-full md:w-1/2">
            <h1 className=" text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
              What's new this time?
            </h1>
            <div className="mt-3 text-normal md:mt-5 lg:mx-0 md:leading-normal content-theme">
              <div className="my-4">
                <p className="text-2xl subhead-theme font-medium">
                  Ideas that matter
                </p>
                <p className="text-normal md:text-xl mt-4">
                  This iteration of Electrothon aims to find not just technical
                  ideas but also research and business ideas. As long as the
                  idea has the potential to solve a problem or make a change, it
                  will be cordially welcomed.
                </p>
              </div>
              <div className="my-4">
                <p className="text-2xl subhead-theme font-medium">Incubation</p>
                <p className="text-normal md:text-xl mt-4">
                  Ideas with the potential to be converted into a product, will
                  be partnered by our partnered companies.
                </p>
              </div>
              <div className="my-4">
                <p className="text-2xl subhead-theme font-medium">
                  Sustainability and Globalization
                </p>
                <p className="text-normal md:text-xl mt-4">
                  This year's theme inspires participants to come up with
                  sustainable ideas, ideas that aim to target bigger issues of
                  climate change, pollution, globalization, etc.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center md:w-1/2">
            <img
              src="whatsnew.png"
              alt="whatsnew"
              style={{ height: "500px" }}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-16 pt-8 md:pt-24">
          <div
            data-aos="fade-right"
            data-aos-delay="190"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out-cubic"
          >
            <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
              Diversity and Inclusion
            </h1>
            <div className="mt-3 text-normal text-gray-400 md:mt-5 md:text-xl lg:mx-0 md:leading-normal content-theme">
              <div className="my-4">
                <span className="text-2xl subhead-theme font-medium">
                  Women Empowerment
                </span>
                <p className="text-normal md:text-xl mt-4">
                  We aspire to create a generation of financially and socially
                  independent women. Aspire for Her, The Girl Code, and IEEE
                  Women in Engineering are some of the organizations that work
                  closely with us to promote women engineers, scientists and
                  inspiring girls around the world.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out-cubic"
          >
            <div className="text-normal text-gray-400 md:mt-5 md:text-xl lg:mx-0 md:leading-normal content-theme">
              <div className="my-4">
                <span className="text-2xl subhead-theme font-medium">
                  Notable Speakers
                </span>
                <div className="text-normal md:text-xl mt-4">
                  <div className="flex bg-black bg-opacity-25 shadow-lg rounded-lg mx-4 md:mx-auto my-4 max-w-md md:max-w-2xl ">
                    <div className="flex items-start px-4 py-6">
                      <picture className="">
                        <source
                          srcSet={"speakers/webp/miri.webp"}
                          type="image/jpeg"
                        />
                        <img
                          src={"speakers/miri.jpg"}
                          className="w-12 h-10 rounded-full flex-1 object-cover shadow"
                          alt="avatar"
                        />
                      </picture>
                      <div className="ml-4 w-full">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-semibold text-white -mt-1">
                            Miri Rodriguez{" "}
                          </h2>
                        </div>

                        <p className="mt-3 text-white text-sm">
                          Global Head of internships at Microsoft and an
                          award-winning storyteller
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex bg-black bg-opacity-25 shadow-lg rounded-lg mx-4 md:mx-auto my-4 max-w-md md:max-w-2xl ">
                    <div className="flex items-start px-4 py-6">
                      <picture className="">
                        <source
                          srcSet={"speakers/webp/profile_pic.webp"}
                          type="image/jpeg"
                        />
                        <img
                          src={"speakers/profile_pic.jpg"}
                          className="w-12 h-10 rounded-full object-cover shadow"
                          alt="avatar"
                        />
                      </picture>
                      <div className="ml-4 w-full">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-semibold text-white -mt-1">
                            Niharika Arora
                          </h2>
                        </div>

                        <p className="mt-3 text-white text-sm">
                          Developer Relations Engineer for Android at Google,
                          Contributor at Aarogya Setu
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex bg-black bg-opacity-25 shadow-lg rounded-lg mx-4 md:mx-auto my-4 max-w-md md:max-w-2xl ">
                    <div className="flex items-start px-4 py-6">
                      <picture className="">
                        <source
                          srcSet={"speakers/webp/nayan.webp"}
                          type="image/jpeg"
                        />
                        <img
                          src={"speakers/nayan.jpg"}
                          className="w-12 h-10 rounded-full object-cover shadow"
                          alt="avatar"
                        />
                      </picture>
                      <div className="ml-4 w-full">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-semibold text-white -mt-1">
                            Dr. Nayan Mitra
                          </h2>
                        </div>

                        <p className="mt-3 text-white text-sm">
                          Founding President of Women’s Indian Chamber of
                          Commerce and Industry (WICCI), mentor at Aspire for
                          Her Foundation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-normal md:text-xl mt-4"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
