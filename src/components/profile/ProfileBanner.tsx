import React from "react";
import profile from "../../assets/images/profile/profile.png";
import Image from "next/image";

const ProfileBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-[39px] min-h-[300px]">
      <Image
        className="w-[101px] h-[96px] object-contain"
        src={profile}
        alt=""
      />
      <h1 className="text-[#141A28] text-[48px] font-extrabold font-montserrat leading-[48px]">
        Gabie Sheber
      </h1>
    </div>
  );
};

export default ProfileBanner;
