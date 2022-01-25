import React from "react";
import JudgesCard from "./judgesCard";
import judgesData from "./judgesData.json";

export default function judges() {
  return (
    <section
      id="judges"
      className="relative overflow-hidden mt-2 container-theme p-6"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
    >
      <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme flex justify-center">
        Judges
      </h1>
      <div className="mt-5 md:mt-0">
        <div className="container mx-auto mt-8">
          <div className="flex flex-row flex-wrap -mx-2 justify-center">
            {judgesData.map((element, index) => {
              return <JudgesCard key={index} judge={element} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
