import { iDot, iPBHr } from "@/lib/utils/icons";
import Image from "next/image";
import React from "react";

const PopularBlogCard = ({ blog }: any) => {
  return (
    <div className="bg-white shadow max-h-[480px] h-fit">
      <div className="max-h-[244.333px] h-full overflow-hidden">
        <Image
          className="h-full w-full object-cover hover:scale-110 duration-700"
          src={blog.cover_image}
          alt=""
        />
      </div>
      <div className="px-[18px] pt-[18px] pb-[22px]">
        <h1 className="text-black text-[9.526px] font-semibold leading-[14px] font-roboto">
          {blog.read_time}
        </h1>
        <h1 className="text-black text-[16.33px] font-bold leading-[22px] mt-[11.9px] font-roboto">
          {blog.title}
        </h1>
        <h1 className="text-black text-[10.886px] leading-[16.33px] mt-[4.88px] font-roboto">
          {blog.description}
        </h1>
        <div className="mt-[16px] w-full border-b-[1px] border-[#C4C4C4]"></div>
        <div className="mt-[10.32px] flex items-center gap-[13.77px]">
          <Image
            className="size-[41.296px] rounded-full object-cover"
            src={blog.author_img}
            alt=""
          />
          <div className="flex flex-col gap-[6px]">
            <p className="text-[#141A28] text-[12.045px] font-roboto font-semibold leading-[18.4px]">
              by {blog.author_name}
            </p>
            <div className="flex items-center gap-[6.99px] text-black text-[12.045px] leading-[18.4px] font-roboto">
              <p className="text-black text-[12.045px] leading-[18.4px] font-roboto">
                {blog.createdAt}
              </p>
              {iDot}
              <p className="text-black text-[12.045px] leading-[18.4px] font-roboto">
                {blog.read_time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBlogCard;
