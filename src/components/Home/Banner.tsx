/* eslint-disable @next/next/no-img-element */
import React from "react";
import bg from "../../assets/images/home/bg.png";
import Header from "../shared/Header/Header";

const Banner = () => {
  return (
    <div
      className="h-full w-full min-h-[920px]"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header className="bg-black/70" />
    </div>
  );
};

export default Banner;
