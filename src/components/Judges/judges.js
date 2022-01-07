import React from "react";
import JudgesCard from "./judgesCard";
import { judgesData } from "./judgesData";

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
      <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
        Judges
      </h1>
      <div className="mt-5 md:mt-0">
        {/* {judgesData.map((element, index) => {
                return (
                    <JudgesCard key={index} judge={element} />
                )
            })} */}
        <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
          <section className="grid lg:grid-cols-2 2xl:grid-cols-5 grid-cols-1 gap-20">
            {judgesData.map((element, index) => {
              return <JudgesCard key={index} judge={element} />;
            })}
          </section>
        </section>
      </div>
    </section>
  );
}
