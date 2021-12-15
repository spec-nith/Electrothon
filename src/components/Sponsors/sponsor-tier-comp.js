import React from "react";

export default function SponsorCompo({ sponsor }) {
  return (
    // <div className="px-4 py-6 sm:px-0">
    //     <div className="rounded-lg ">
    //         <div className="flex flex-wrap md:flex-nowrap bg-white text-black">
    //             <div className="w-2/5">
    //                 <p className="py-6 px-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    //             </div>
    //             <div className="w-3/5">
    //                 <img src="https://static.remove.bg/remove-bg-web/dc31eaf79444b51662da45dcd6cf26fcda20b5dd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="timepass"/>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // <div className="conatiner sm:px-0 h-screen">
    //     <div className="rounded-lg ">
    //         <div className="flex bg-white text-black">
    //             <div className="w-3/5 flex justify-center items-center">
    //                 <div>
    //                 <h1 className="text-lg leading-loose py-6 px-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>
    //                 </div>
    //             </div>
    //             <div className="w-3/5">
    //                 <div className="bg-white items-center justify-end content-center">
    //                     <div className="w-full">
    //                         <img className="object-cover w-full h-full" src="https://static.remove.bg/remove-bg-web/dc31eaf79444b51662da45dcd6cf26fcda20b5dd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="project" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <React.Fragment>
      <div class="my-10 container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
        <div class="relative w-full py-2 md:py-24 bg-transparent md:w-1/2 flex flex-col item-center justify-center content-theme">
          <div class="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>

          <div class="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:mx-auto  font-semibold leading-tight tracking-tight mb-0 z-20 text-center">
            <span class="md:block">{sponsor.name}</span>
            <span class="pt-6 md:block">Sponsors</span>

            {/* <span class="block">Are Saying!</span> */}
          </div>
          <p class=" serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
            {sponsor.text}
          </p>
        </div>

        <div class="bg-white md:w-1/2">
          <div class="flex flex-col h-full relative">
            <div class="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12"></div>

            <div class="h-full relative z-10">
              <img
                className="object-cover w-full h-full"
                src="https://static.remove.bg/remove-bg-web/dc31eaf79444b51662da45dcd6cf26fcda20b5dd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                alt="timepass"
              />
            </div>
            {/* <div class="flex justify-center px-6 pt-2 pb-6 md:py-6">
                            <div class="text-center">
                                <h2 class="text-sm md:text-base font-bold text-gray-700 leading-tight">John Doe</h2>
                                <small class="text-gray-500 text-xs md:text-sm truncate">CEO, ABC Inc.</small>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
