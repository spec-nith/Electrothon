import React from "react";
import "./PrizeCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination} from "swiper";
import { prizesData } from "./prizesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const prizeCarousel = props => {

    return(
      <section
      id="prizes"
      className="relative overflow-hidden mt-2 container-theme p-6"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-cubic"
       >
        <Swiper
            modules = {[Pagination,Navigation]}
            pagination = {{ dynamicBullets: true, clickable: true }}
            loop = {true}
            navigation={true}
            slidesPerView = {'auto'}
            centeredSlides = {true}
            slidesPerGroup={1}
            roundLengths = {true}
            loopAdditionalSlides = {30}
            breakpoints={{
                "640": {
                  "slidesPerView": 1,
                  "spaceBetween": 0
                },
                "768": {
                  "slidesPerView": "auto",
                  "centeredSlides": true,
                  "slidesPerGroup":1
                },
                "1024": {
                  "slidesPerView": "auto",
                  "centeredSlides": true,
                  "slidesPerGroup":1
                },
               
              }}
            >
            <div className="prize-swiper">
                <div className="prize-swiper-container">
                    <div className="swiper-wrapper prize-gradient">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        
                        {prizesData.map((prize, index) => {
                            return (<SwiperSlide className=" md:w-4/5 lg:w-3/5">
                                {({ isActive }) => (
                                    <div className="prize-swiper-slide" style={isActive ? { transform: "scale(1)" } : {}}>
                                        <div className="hidden md:block">
                                        {!isActive && <div className="prize-Backdrop"></div>}
                                        </div>
                                        <div className="w-full h-full md:max-w-full md:flex">
                                            <div className="h-3/5 md:h-auto md:w-1/2 lg:w-2/5 flex-none text-center overflow-hidden">
                                                <img className="w-full h-full object-cover" src={prize.img} alt="prizes"/>
                                            </div>
                                            <div className="h-2/5 md:h-auto border-r border-b border-l border-gray-400 md:border-l-0 md:border-t md:border-gray-400 bg-white p-4 flex flex-col justify-center items-center leading-normal md:w-1/2 lg:w-3/5">
                                                <div className="px-3">
                                                    <div className="flex items-center lg:pb-4">
                                                    <FontAwesomeIcon className="text-lg" fixedWidth icon={faAward}/>
                                                    <p className="text-sm text-gray-600 text-md md:text-lg flex items-center">
                                                        {prize.amt}
                                                    </p>
                                                    </div>
                                                    <div className="text-gray-900 font-bold text-xl md:text-3xl md:mb-2">{prize.name}</div>
                                                    <p className="text-sm text-gray-600 text-lg md:pt-4 items-center">Perks </p>
                                                    <ul className="list-decimal text-md md:text-xl px-3 md:mb-1 md:p-3">
                                                    <p className="text-gray-700"> 
                                                    {prize.desc.map((element, index) => {
                                                        return <li className="md:py-2 tracking-tighter" key={index}>{element}</li>;
                                                    })}</p>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>) 
                        })}
                        
                    </div>
                </div>
            </div>
        </Swiper>
        </section>);
}
export default prizeCarousel;
