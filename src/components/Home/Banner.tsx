/* eslint-disable @next/next/no-img-element */
import React from "react";
import bg from "../../assets/images/home/bg.png";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="">
      <Carousel
        className="!p-0"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-primary" : "w-4 bg-white"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="w-full h-full">
          <Image
            src={bg}
            alt="image 1"
            className="min-h-[545px] w-full object-cover"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 max-w-theme px-4 mx-auto">
            <div className="max-w-[696px] h-full flex items-center justify-center md:justify-start">
              <h1 className="text-white capitalize font-extrabold text-[28px] text-center md:text-left md:text-[50px] font-montserrat">
                Congratulations Team Siaw Lim Hood Sun Thong (少林佛山堂) -
                SLHST!
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src={bg}
            alt="image 1"
            className="min-h-[545px] w-full object-cover"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 max-w-theme px-4 mx-auto">
            <div className="max-w-[696px] h-full flex items-center justify-center md:justify-start">
              <h1 className="text-white capitalize font-extrabold text-[28px] text-center md:text-left md:text-[50px] font-montserrat">
                Congratulations Team Siaw Lim Hood Sun Thong (少林佛山堂) -
                SLHST!
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src={bg}
            alt="image 1"
            className="min-h-[545px] w-full object-cover"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 max-w-theme px-4 mx-auto">
            <div className="max-w-[696px] h-full flex items-center justify-center md:justify-start">
              <h1 className="text-white capitalize font-extrabold text-[28px] text-center md:text-left md:text-[50px] font-montserrat">
                Congratulations Team Siaw Lim Hood Sun Thong (少林佛山堂) -
                SLHST!
              </h1>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
