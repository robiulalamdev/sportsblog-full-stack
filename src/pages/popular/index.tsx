import BlogCard from "@/components/common/BlogCard";
import MainLayout from "@/layout/MainLayout";
import { IPopularBlogs } from "@/lib/types/globals";
import { popularBlogs } from "@/lib/utils/globalData";
import { Button } from "@material-tailwind/react";
import React, { ReactElement } from "react";
import bg from "../../assets/images/popular/bg.png";
import Header from "@/components/shared/Header/Header";

const PopularPage = () => {
  return (
    <div className="bg-[#181818]">
      <Header />
      <div
        className="w-[551px] h-[111px] mx-auto !mt-[100px] hidden sm:block"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center top",
        }}
      ></div>
      <div
        className="w-full max-w-[250px] h-[111px] mx-auto mt-[40px] sm:hidden"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center top",
        }}
      ></div>
      <div className="max-w-theme mx-auto px-theme pb-[100px] mt-[10px] md:mt-[30px]">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[12px] gap-y-[27.21px] md:gap-x-[22px] md:gap-y-[37px] mx-auto">
          {popularBlogs.map((item: IPopularBlogs, index: number) => (
            <BlogCard key={index} blog={item} />
          ))}
          {popularBlogs.map((item: IPopularBlogs, index: number) => (
            <BlogCard key={index} blog={item} />
          ))}
          {popularBlogs.map((item: IPopularBlogs, index: number) => (
            <BlogCard key={index} blog={item} />
          ))}
          {popularBlogs.map((item: IPopularBlogs, index: number) => (
            <BlogCard key={index} blog={item} />
          ))}
          {popularBlogs.map((item: IPopularBlogs, index: number) => (
            <BlogCard key={index} blog={item} />
          ))}
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
    </div>
  );
};

export default PopularPage;

PopularPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
