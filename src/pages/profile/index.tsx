import BlogsArchived from "@/components/profile/BlogsArchived";
import ProfileAllBlogs from "@/components/profile/ProfileAllBlogs";
import ProfileBanner from "@/components/profile/ProfileBanner";
import ProfileRecentBlogs from "@/components/profile/ProfileRecentBlogs";
import ProfileTabs from "@/components/profile/ProfileTabs";
import MainLayout from "@/layout/MainLayout";
import React, { ReactElement, useState } from "react";

const ProfilePage = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="min-h-screen bg-[#181818]">
      <div className="">
        <ProfileBanner />
        <ProfileTabs tab={tab} setTab={setTab} />
      </div>

      <section className="max-w-theme mx-auto px-theme mt-[60px]">
        {tab === 1 && <ProfileRecentBlogs />}
        {tab === 2 && <ProfileAllBlogs />}
        {tab === 3 && <BlogsArchived />}
      </section>
    </div>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
