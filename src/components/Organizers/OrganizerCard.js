import React from "react";

const OrganizerCard = ({ data, lead }) => {
  return (
    <div className="flex flex-col">
      <div>
        <picture>
          <source srcSet={data.webp} type="image/webp" />
          <img
            className={
              "rounded-full md:w-40 md:h-44 object-cover " +
              (lead ? " w-40 h-40 " : " w-28 h-28 ")
            }
            src={data.img}
            alt="organizerImg"
          />
        </picture>
      </div>
      <div
        className={
          "md:w-40 text-center md:text-lg text-white pt-2 md:pt-4 font-['Poppins'] " +
          (lead ? " w-40 text-md " : " w-28 text-xs ")
        }
      >
        <a href={data.link} target="_blank" rel="noreferrer" className="">
          {data.name}
        </a>
      </div>
    </div>
  );
};

export default OrganizerCard;
