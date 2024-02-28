import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import RecentBlogs from "./RecentBlogs";
import PopuplarBlogs from "./PopularBlogs";
import SportSection from "./SportSection";

const HomePage = () => {
  return (
    <div className="bg-[#181818]">
      <Banner />
      <Categories />
      <RecentBlogs />
      <PopuplarBlogs />
      <SportSection />
    </div>
  );
};

export default HomePage;
