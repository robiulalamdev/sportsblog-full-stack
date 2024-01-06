import BlogsArchived from "@/components/profile/BlogsArchived";
import ProfileAllBlogs from "@/components/profile/ProfileAllBlogs";
import ProfileBanner from "@/components/profile/ProfileBanner";
import ProfileRecentBlogs from "@/components/profile/ProfileRecentBlogs";
import ProfileTabs from "@/components/profile/ProfileTabs";
import React, { useState } from "react";

const ProfilePage = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#F5F7F9]">
        <ProfileBanner />
        <ProfileTabs tab={tab} setTab={setTab} />
      </div>

      <section className="max-w-theme mx-auto px-theme bg-white mt-[60px]">
        {tab === 1 && <ProfileRecentBlogs />}
        {tab === 2 && <ProfileAllBlogs />}
        {tab === 3 && <BlogsArchived />}
      </section>
    </div>
  );
};

export default ProfilePage;
