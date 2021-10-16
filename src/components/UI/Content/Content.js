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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-16">
          <div>
            <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
              What's new this time?
            </h1>
            <div className="mt-3 text-normal md:mt-5 lg:mx-0 md:leading-normal content-theme">
              <div className="my-4">
                <p className="text-2xl subhead-theme">Ideas that matter</p>
                <p className="text-normal md:text-xl mt-4">
                  This iteration of Electrothon aims to find not just technical
                  ideas but also research and business ideas. As long as the
                  idea has the potential to solve a problem or make a change, it
                  will be cordially welcomed.
                </p>
              </div>
              <div className="my-4">
                <p className="text-2xl subhead-theme">Incubation</p>
                <p className="text-normal md:text-xl mt-4">
                  Ideas with the potential to be converted into a product, will
                  be partnered by our partnered companies.
                </p>
              </div>
              <div className="my-4">
                <p className="text-2xl subhead-theme">
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
          <div>
            <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
              Diversity and Inclusion
            </h1>
            <div className="mt-3 text-normal text-gray-400 md:mt-5 md:text-xl lg:mx-0 md:leading-normal content-theme">
              <div className="my-4">
                <span className="text-2xl subhead-theme">
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
              <div className="my-4">
                <span className="text-2xl subhead-theme">Notable Speakers</span>
                <div className="text-normal md:text-xl mt-4">
                  <div className="mb-4">
                    <span className="font-bold">Miri Rodriguez:</span> Global
                    Head of internships at Microsoft and an award-winning
                    storyteller.
                  </div>
                  <div className="mb-4">
                    <span className="font-bold">Niharika Arora:</span> Developer
                    Relations Engineer for Android at Google, Contributor at
                    Aarogya Setu.
                  </div>
                  <div className="mb-4">
                    <span className="font-bold">Dr. Nayan Mitra:</span> Founding
                    President of Women’s Indian Chamber of Commerce and Industry
                    (WICCI), mentor at Aspire for Her Foundation
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
