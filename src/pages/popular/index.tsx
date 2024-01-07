import PopularBlogCard from "@/components/blogs/PopularBlogCard";
import PopularBlogPageCard from "@/components/blogs/PopularBlogPageCard";
import MainLayout from "@/layout/MainLayout";
import { IPopularBlogs } from "@/lib/types/globals";
import { popularBlogs } from "@/lib/utils/globalData";
import { iArrowDown } from "@/lib/utils/icons";
import { Button } from "@material-tailwind/react";
import React, { ReactElement } from "react";

const PopularPage = () => {
  return (
    <div className="max-w-theme mx-auto px-theme mt-[131px] pb-8">
      <div className="flex justify-between items-center mb-[34px]">
        <div>
          <h1 className="text-[32px] md:text-[48px] font-bold text-black leading-[42px] font-roboto">
            Popular
          </h1>
          <p className="text-black text-[18px] font-roboto leading-[27px] mt-6 hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <Button
          placeholder=""
          className="hover:shadow-primary hover:bg-primary hover:border-white hover:text-white border border-black text-black bg-white font-inter text-base leading-[24px] px-6 py-3 rounded-[5px]"
        >
          View all
        </Button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[32px] gap-y-[80px] mx-auto">
        {popularBlogs.map((item: IPopularBlogs, index: number) => (
          <PopularBlogPageCard key={index} blog={item} />
        ))}
        {popularBlogs.map((item: IPopularBlogs, index: number) => (
          <PopularBlogPageCard key={index} blog={item} />
        ))}
        {popularBlogs.map((item: IPopularBlogs, index: number) => (
          <PopularBlogPageCard key={index} blog={item} />
        ))}
        {popularBlogs.map((item: IPopularBlogs, index: number) => (
          <PopularBlogPageCard key={index} blog={item} />
        ))}
        {popularBlogs.map((item: IPopularBlogs, index: number) => (
          <PopularBlogPageCard key={index} blog={item} />
        ))}
        {popularBlogs.map((item: IPopularBlogs, index: number) => (
          <PopularBlogPageCard key={index} blog={item} />
        ))}
        {popularBlogs.map((item: IPopularBlogs, index: number) => (
          <PopularBlogPageCard key={index} blog={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularPage;

PopularPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
