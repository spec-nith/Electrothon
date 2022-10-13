import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden mt-2 container-theme p-6"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out-cubic"
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-3  gap-4">
        <div
          className="hidden md:flex justify-center items-center"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-cubic"
        >
          <picture>
            <source srcSet="electro.webp" type="image/webp" />
            <img
              src="electro.png"
              className="h-auto w-60 mx-auto"
              alt="Electrothon Logo"
            />
          </picture>
        </div>
        <div
          className="my-auto md:col-span-2"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-cubic"
        >
          <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme">
            About Us
          </h1>
          <div className="mt-3 text-normal content-theme md:mt-5 md:text-xl lg:mx-0 md:leading-normal">
          Taking moonshots is no smooth sailing. It's an inherently unpredictable ride. As we launch the 5th in-person lunation of Electrothon, we strive for nothing less than the moon. Run by the student community SPEC under the moonlight of NIT Hamirpur, Electrothon has impacted over 5000 students. The budding hackers who joined Electrothon over its previous iterations left no stone unturned to ideate and amalgamate technologies that transfigure visions into reality.
          </div>
        </div>
      </div>
    </section>
  );
}
