import React from "react";

const BgStatic = () => {
  return (
    <picture className="block fixed z-[-5] opacity-[0.4]">
      <source srcSet="bg-static.webp" type="image/webp" />
      <img
        className="object-cover w-screen h-[105vh]"
        src="bg-static.jpg"
        alt="hero-bg"
      />
    </picture>
  );
};

export default BgStatic;
