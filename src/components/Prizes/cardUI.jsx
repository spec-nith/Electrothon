import React from "react";
// import fullMoon from "./istockphoto-490557198-612x612-removebg-preview.png";
// import "./card-style.css";
import cardBg from "./prize-card.jpg";

const Card = (props) => {
  return (
    <div
      className="border-[#6A6A6A] rounded-2xl border-2 p-6 m-4 min-w-[300px]"
      style={{ backgroundImage: `url(${cardBg})` }}
    >
      <div className="flex justify-center">
        <img
          alt="Placeholder"
          className="block h-auto w-60 object-contain"
          src={props.image}
        />
      </div>
      <div className=" items-center leading-tight p-2 md:p-4">
        <div className="text-3xl text-white p-2">{props.prize}</div>
        <p className="text-white text-lg">• coming soon</p>
        <p className="text-white text-lg">• coming soon</p>
        <p className="text-white text-lg">• coming soon</p>
        <p className="text-white text-lg">• coming soon</p>
      </div>
    </div>
  );
};
export default Card;
