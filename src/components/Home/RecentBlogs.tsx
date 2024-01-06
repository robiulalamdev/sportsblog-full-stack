import { recentBlogs } from "@/lib/utils/globalData";
import React from "react";
import RecentBlogCard from "../blogs/RecentBlogCard";
import { IRecentBlogs } from "@/lib/types/globals";
import { Button } from "@material-tailwind/react";

const RecentBlogs = () => {
  return (
    <div className="max-w-[1180px] mx-auto px-theme md:px-0 mt-[131px]">
      <div className="flex justify-between items-center mb-[34px]">
        <h1 className="text-[35px] font-bold text-black leading-[42px] font-roboto underline">
          Recent
        </h1>
        <Button className="border border-black text-black bg-white font-inter text-base leading-[24px] px-6 py-3 rounded-[5px]">
          View all
        </Button>
      </div>
      <div className="grid md:grid-cols-2 gap-[70px]">
        {recentBlogs.map((item: IRecentBlogs, index: number) => (
          <RecentBlogCard key={index} blog={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
