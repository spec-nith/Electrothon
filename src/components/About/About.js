import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden mt-2 container-theme p-6"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-16">
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
            Electrothon is a student-run hackathon, under the aegis of the
            National Institute of Technology Hamirpur, India. An exceptional
            place for young and dedicated minds, a platform for organizations to
            meet a wide range of talented, and with over 1700+ registrations,
            Electrothon serves as a hub of ingenious ideas, innovation,
            entrepreneurship and technical skills.
          </div>
        </div>
      </div>
    </section>
  );
}
