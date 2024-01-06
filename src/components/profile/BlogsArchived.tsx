import { popularBlogs } from "@/lib/utils/globalData";
import React from "react";
import ProfileRecentBlogCard from "../blogs/ProfileRecentBlogCard";
import { IRecentBlogs } from "@/lib/types/globals";

const BlogsArchived = () => {
  return (
    <div className="grid md:grid-cols-3 gap-x-[39px] gap-y-[50px] mb-[96px]">
      {popularBlogs.map((item: IRecentBlogs, index: number) => (
        <ProfileRecentBlogCard key={index} blog={item} />
      ))}
    </div>
  );
};

export default BlogsArchived;
