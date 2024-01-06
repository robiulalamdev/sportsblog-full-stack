import { IRecentBlogs } from "@/lib/types/globals";
import { iDot } from "@/lib/utils/icons";
import Image from "next/image";
import React from "react";

const RecentBlogCard = ({ blog }: any) => {
  return (
    <div>
      <div className="max-h-[353px] h-full overflow-hidden rounded-[10px]">
        <Image
          className="h-full w-full object-cover hover:scale-110 duration-700 rounded-[10px]"
          src={blog.cover_image}
          alt=""
        />
      </div>
      <h1 className="text-[#141A28] text-[36px] font-bold leading-[46px] mt-[21px] font-montserrat">
        {blog.title}
      </h1>
      <div className="mt-[29px] flex items-center gap-2">
        <Image
          className="w-[63px] h-[48px] rounded-full"
          src={blog.author_img}
          alt=""
        />
        <p className="text-[#141A28] text-sm leading-[22.4px]">
          by {blog.author_name}
        </p>
        {iDot}
        <p className="text-[#7E7F81] text-sm leading-[22.4px]">
          {blog.createdAt}
        </p>
      </div>
    </div>
  );
};

export default RecentBlogCard;
