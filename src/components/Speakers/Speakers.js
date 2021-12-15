import React from "react";
import { speakerData } from "./speakerdata";
import SpeakerCard from "./SpeakerCard";

const Speakers = () => {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden mt-2 container-theme p-6"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
    >
      <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
        Speakers
      </h1>
      <div className="mt-5 md:mt-0">
        <section class="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
          <section class="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-20">
            {speakerData.map((element, index) => {
              return <SpeakerCard key={index} speaker={element} />;
            })}
          </section>
        </section>
      </div>
    </section>
  );
};
export default Speakers;
