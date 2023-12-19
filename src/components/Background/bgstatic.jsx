import React from "react";

const BgStatic = () => {
  return (
    <picture className="block fixed z-[-5] opacity-[0.4]">
      <source srcSet="img.jpg" type="image/webp" />
      <img
        className="object-cover w-screen h-[105vh]"
        src="img.jpg"
        alt="hero-bg"
      />
    </picture>
  );
};

export default BgStatic;
