import { popularBlogs } from "@/lib/utils/globalData";
import React from "react";
import ProfileRecentBlogCard from "../blogs/ProfileRecentBlogCard";
import { IPopularBlogs, IRecentBlogs } from "@/lib/types/globals";
import BlogCard from "../common/BlogCard";

const BlogsArchived = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[12px] gap-y-[27.21px] md:gap-x-[22px] md:gap-y-[37px] pb-[96px] mx-auto">
      {popularBlogs.map((item: IPopularBlogs, index: number) => (
        <BlogCard key={index} blog={item} />
      ))}
    </div>
  );
};

export default BlogsArchived;
