import { recentBlogs } from "@/lib/utils/globalData";
import React, { RefObject, useRef, useState } from "react";
import { IRecentBlogs } from "@/lib/types/globals";
import bg from "../../assets/images/home/popularbg.png";
import Slider from "react-slick";
import Image from "next/image";
import { iDot } from "@/lib/utils/icons";
type SliderRefType = RefObject<Slider> | null;

const PopuplarBlogs = () => {
  const [centerCard, setCenterCard] = useState(1);

  const [sliderRef, setSliderRef] = useState<SliderRefType>(null);

  // Then you can use it like this:

  const next = () => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickNext();
      setCenterCard(centerCard + 1);
    }
  };

  const previous = () => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickPrev();
      setCenterCard(centerCard - 1);
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: false,
  };

  return (
    <div
      className="max-w-theme mx-auto px-theme mt-[131px] "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "90%",
        backgroundPosition: "center top",
      }}
    >
      <div className="pt-[200px]">
        <div className="relative h-fit w-full">
          <Slider ref={sliderRef} {...settings}>
            {recentBlogs.map((item: IRecentBlogs, index: number) => (
              <div
                key={index}
                className={`${
                  centerCard + 1 === index ? "!pl-[18px]" : "pr-[18px]"
                }`}
              >
                <div
                  className={`rounded-[25px]  bg-transparent backdrop-blur border-[1px]  px-[22px] pt-[22px] ${
                    centerCard === index
                      ? "border-primary h-[485px] max-w-[445px] mx-auto"
                      : "border-gray-50 h-[445px] max-w-[400px] mt-5"
                  }`}
                >
                  <div className="max-h-[215px] h-full overflow-hidden rounded-[10px]">
                    <Image
                      className="h-full w-full object-cover hover:scale-110 duration-700 rounded-[10px]"
                      src={item.cover_image}
                      alt=""
                    />
                  </div>
                  <div className="px-[32px]">
                    <h1 className="text-[#FFFFFF] text-[27px] font-bold leading-[46px] mt-[21px] font-inter twoLine">
                      {item.title}
                    </h1>
                    <div className="mt-[29px] flex items-center gap-2">
                      <Image
                        className="w-[63px] h-[48px] rounded-full"
                        src={item.author_img}
                        alt=""
                      />
                      <p className="text-[#141A28] text-sm leading-[22.4px]">
                        by {item.author_name}
                      </p>
                      {iDot}
                      <p className="text-[#7E7F81] text-sm leading-[22.4px]">
                        {item.createdAt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="absolute top-[45%] w-full flex items-center justify-between">
            <button
              className="bg-gray-100 hover:bg-primary hover:text-white text-gray-900 h-8 w-8 flex items-center justify-center rounded-full object-cover overflow-hidden"
              onClick={() => previous()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              className="bg-gray-100 hover:bg-primary hover:text-white text-gray-900 h-8 w-8 flex items-center justify-center rounded-full object-cover overflow-hidden"
              onClick={() => next()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopuplarBlogs;
