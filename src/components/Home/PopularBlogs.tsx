import { popularBlogs, recentBlogs } from "@/lib/utils/globalData";
import React from "react";
import RecentBlogCard from "../blogs/RecentBlogCard";
import { IPopularBlogs, IRecentBlogs } from "@/lib/types/globals";
import { Button } from "@material-tailwind/react";
import PopularBlogCard from "../blogs/PopularBlogCard";
import { iArrowDown } from "@/lib/utils/icons";
import Link from "next/link";

const PopuplarBlogs = () => {
  return (
    <div className="max-w-theme mx-auto px-theme md:px-0 mt-[131px]">
      <div className="flex justify-between items-center mb-[34px]">
        <h1 className="text-[32px] md:text-[48px] font-bold text-black leading-[42px] font-roboto">
          Popular
        </h1>
        <Link href="/popular">
          <Button
            placeholder=""
            className="hover:shadow-primary hover:bg-primary hover:border-white hover:text-white border border-black text-black bg-white font-inter text-base leading-[24px] px-6 py-3 rounded-[5px]"
          >
            View all
          </Button>
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[12px] gap-y-[27.21px] mx-auto">
        {popularBlogs.map((item: IPopularBlogs, index: number) => (
          <PopularBlogCard key={index} blog={item} />
        ))}
        {popularBlogs.map((item: IPopularBlogs, index: number) => (
          <PopularBlogCard key={index} blog={item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-[39.8px]">
        <Button
          placeholder=""
          className="h-[65px] border-[1px] rounded-[5px] bg-white text-black border-black flex items-center justify-center gap-1"
        >
          <span className="text-xl font-semibold leading-[28px] font-roboto text-nowrap">
            Load More
          </span>
          {iArrowDown}
        </Button>
      </div>
    </div>
  );
};

export default PopuplarBlogs;
