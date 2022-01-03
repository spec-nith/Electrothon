import React from "react";

export default function SponsorCompo({ sponsor }) {
  return (
    <React.Fragment>
      <div class="my-10 container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden h-auto">
        <div class="relative w-full py-2 md:py-24 bg-transparent md:w-1/3 flex flex-col item-center justify-center content-theme">
          <div class="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>

          <div class="relative text-4xl md:text-7xl py-2 px-6 md:py-6 md:px-1 md:mx-auto  font-semibold leading-tight tracking-tight mb-0 z-20 text-center">
            <span class="md:block" >{sponsor.name}</span>
            <span class="md:pt-6 block ">Sponsors</span>

            
          </div>
          {/* <p class=" serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
            {sponsor.text}
          </p> */}
        </div>

        <div class=" md:w-full">
          <div class="flex flex-col h-full relative">
            {/* <div class="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12"></div> */}
           
            <div class="h-full w-full relative z-10">
            <img
                className="object-cover h-full w-full hidden md:block lg:block xl:block"
                src={sponsor.imageLarge}
                alt= "Logos"
              />
              <img
                className="object-cover h-full w-full md:hidden lg:hidden xl:hidden"
                src={sponsor.image}
                alt= "Logos"
              />
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
