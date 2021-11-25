import React from "react";

export default function Sponsors() {
  return (
    <div>
            <section
        id="whats-new"
        className="relative overflow-hidden mt-2 container-theme p-6"
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
      <h1 className="text-4xl tracking-tight md:text-5xl leading-normal md:leading-relaxed header-theme text-center">Sponsors</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-16">
        <div>
        <h1 className="text-xl tracking-tight md:text-2xl leading-normal md:leading-relaxed header-theme">Incubation & Investment Partner</h1>
          </div>
          <div>
        <h1 className="text-xl tracking-tight md:text-2xl leading-normal md:leading-relaxed header-theme">Diversity & Inclusion Partner</h1>
          </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-16">
        <div>
        <h1 className="text-xl tracking-tight md:text-2xl leading-normal md:leading-relaxed header-theme">Platform Partner</h1>
          </div>
          <div>
        <h1 className="text-xl tracking-tight md:text-2xl leading-normal md:leading-relaxed header-theme">Diversity Partner</h1>
          </div>
      </div>
        </section>
    </div>
  );
}
