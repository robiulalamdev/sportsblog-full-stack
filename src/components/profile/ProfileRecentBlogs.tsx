import { IRecentBlogs } from "@/lib/types/globals";
import { popularBlogs, recentBlogs } from "@/lib/utils/globalData";
import React from "react";
import ProfileRecentBlogCard from "../blogs/ProfileRecentBlogCard";

const ProfileRecentBlogs = () => {
  return (
    <div className="grid md:grid-cols-3 gap-x-[39px] !gap-y-[50px] mb-[96px]">
      {popularBlogs.map((item: IRecentBlogs, index: number) => (
        <ProfileRecentBlogCard key={index} blog={item} />
      ))}
    </div>
  );
};

export default ProfileRecentBlogs;
