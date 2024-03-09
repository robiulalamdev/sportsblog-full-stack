import { popularBlogs, recentBlogs } from "@/lib/utils/globalData";
import React from "react";
import RecentBlogCard from "../blogs/RecentBlogCard";
import { IPopularBlogs, IRecentBlogs } from "@/lib/types/globals";
import { Button } from "@material-tailwind/react";
import PopularBlogCard from "../blogs/PopularBlogCard";
import { iArrowDown } from "@/lib/utils/icons";
import Link from "next/link";
import bg from "../../assets/images/home/recent.png";
import BlogCard from "../common/BlogCard";

const RecentBlogs = () => {
  return (
    <div
      className="max-w-theme mx-auto px-theme mt-[131px] pb-[100px] "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "90%",
        backgroundPosition: "center top",
      }}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[12px] gap-y-[27.21px] md:gap-x-[22px] md:gap-y-[37px] mx-auto pt-[100px] md:pt-[260px]">
        {popularBlogs.map((item: IPopularBlogs, index: number) => (
          <BlogCard key={index} blog={item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-[39.8px]">
        <Button
          placeholder=""
          className="w-[150px] h-[50px] rounded-[70px] bg-primary flex items-center justify-center gap-1 font-normal normal-case outline-none hover:shadow-none shadow-none"
        >
          <span className="text-[15px] font-roboto text-black font-bold">
            Load More
          </span>
        </Button>
      </div>
    </div>
  );
};

export default RecentBlogs;
