import React, { useState } from "react";
import { podiumData } from "./prizedata";

const [winner, girls, runner] = podiumData;

const TprizeCard = ({ prizes }) => {
  return (
    <React.Fragment>
      <div className="flex px-4 flex-wrap -mx-px overflow-hidden justify-center ">
        <div className="hidden md:block my-1 p-3 md:p-8 overflow-hidden w-full md:w-1/3 items-center justify-center object-cover">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={girls.img} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{girls.amt}</div>
              <p class="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2"></div>
          </div>
        </div>
        <div className="hidden md:block my-1 p-3 md:p-8 overflow-hidden w-full md:w-1/3 items-center justify-center object-cover"></div>
        <div className="hidden md:block my-1 p-3 md:p-8 overflow-hidden w-full md:w-1/3 items-center justify-center object-cover"></div>

        <div className="md:hidden my-1 p-3 md:p-8 overflow-hidden w-full md:w-1/3 items-center justify-center object-cover"></div>
      </div>
    </React.Fragment>
  );
};
export default TprizeCard;
