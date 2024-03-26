import { iArrowRight } from "@/lib/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: any) => {
  // console.log(blog);
  return (
    <>
      <div className="h-fit bg-[#F4F4F4] hover:bg-primary cursor-pointer duration-300 rounded-[12px] md:rounded-[19.82px] px-[8px] md:px-[12px] pt-[8px] md:pt-[12px] group">
        <div className="h-[180px] md:h-[200px] lg:h-[239px] w-full rounded-[12px] md:rounded-[19.82px] overflow-hidden">
          <Image
            src={blog.cover_image}
            alt=""
            className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
        <div className="px-[12px] pt-[18px]">
          <h1 className="text-[#000000] text-[14.48px]">{blog.read_time}</h1>
          <h1 className="text-[#000000] text-[18px] md:text-[21.73px] font-bold font-roboto mt-[12px] md:mt-[18px] twoLine">
            {blog.title}
          </h1>
          <p className="text-[#000000] text-[14.48px] font-roboto mt-[14px] twoLine">
            {blog.description}
          </p>

          <Link
            href={`/blogs/${blog.title
              .toLocaleLowerCase()
              .replaceAll(" ", "-")}`}
          >
            <div className="bg-[#000000] w-[123px] h-[36px] group-hover:flex items-center justify-center gap-x-[8px] rounded-[49px] text-[#FFFFFF] font-roboto text-[14.48px] my-[18px] cursor-pointer group-hover:block hidden duration-300">
              <p>Read more</p> {iArrowRight}
            </div>
            <div className="h-[36px] w-fit flex items-center justify-center gap-x-[8px] rounded-[49px] text-[#000000] font-roboto text-[14.48px] my-[18px] cursor-pointer group-hover:hidden block duration-300">
              <p>Read more</p> {iArrowRight}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
