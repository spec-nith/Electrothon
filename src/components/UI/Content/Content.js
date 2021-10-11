import React from "react";

export default function Content() {
  return (
    <>
      <section
        id="whats-new"
        className="relative bg-white overflow-hidden mt-10"
      >
        <div className="max-w-7xl ">
          <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed text-gray-800">
            What's new this time?
          </h1>
          <div className="mt-3 text-normal text-gray-500 md:mt-5 lg:mx-0 md:leading-normal">
            <div className="my-4">
              <p className="text-2xl text-gray-700">Ideation</p>
              <p className="text-normal md:text-xl mt-4">
                This iteration of Electrothon aims to find not just technical
                ideas but also research and business ideas. As long as the idea
                has the potential to solve a problem or make a change, it will
                be cordially welcomed.
              </p>
            </div>
            <div className="my-4">
              <span className="text-2xl text-gray-700">Diversity</span>
              <p className="text-normal md:text-xl mt-4">
                Diversity of thought, perspective, and culture will be
                emboldened by uplifting people from the LGBTQ community.
              </p>
            </div>
            <div className="my-4">
              <span className="text-2xl text-gray-700">Incubation</span>
              <p className="text-normal md:text-xl mt-4">
                Ideas with the potential to be converted into a product, will be
                partnered by our partnered companies.
              </p>
            </div>
            <div className="my-4">
              <span className="text-2xl text-gray-700">
                Sustainability and Globalization
              </span>
              <p className="text-normal md:text-xl mt-4">
                This year's theme inspires participants to come up with
                sustainable ideas, ideas that aim to target bigger issues of
                climate change, pollution, globalization, etc.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="diversity"
        className="relative bg-white overflow-hidden mt-10"
      >
        <div className="max-w-7xl ">
          <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed text-gray-800">
            Diversity and Inclusion
          </h1>
          <div className="mt-3 text-normal text-gray-500 md:mt-5 md:text-xl lg:mx-0 md:leading-normal">
            <p className="text-normal md:text-xl mt-4">
              With a vision to create a generation of financially and socially
              independent women, we strive to turn their aspirations into
              reality through the gates of opportunities. We are affiliated with
              Aspire for Her, The Girl Code and IEEE Women in Engineering,
              international professional organizations dedicated to promoting
              women engineers, scientists and inspiring girls around the world
              to lead their academic interests to a career in engineering.
            </p>
            <p className="text-normal md:text-xl mt-4">
              The previous iteration witnessed powerful women representatives
              like: Miri Rodriguez, global head of internships at Microsoft and
              an award-winning storyteller. Niharika Arora, Developer Relations
              Engineer for Android at Google, Contributor at Aarogya Setu. Dr.
              Nayan Mitra, founding President of the Women’s Indian Chamber of
              Commerce and Industry (WICCI) National Sustainable Businesses
              Council; mentor at the Aspire for Her Foundation and Influencer at
              the Womennovator
            </p>
            <p className="text-normal md:text-xl mt-4">
              Who have previously provided impetus to the aspirations of
              participants. Escalating from 18.24% in Electrothon 2.0 to 25% in
              the third iteration, this year too we aim to seek an exponential
              increase in women participation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
