/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import profile from "../../../assets/images/profile/profile.png";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

const MyProfile = () => {
  const [img, setImg] = useState(null);

  const imgRef = useRef<any>();
  console.log(img);
  return (
    <div>
      <h1 className="text-[36px] font-extrabold font-montserrat text-[#141A28]">
        My profile
      </h1>

      <div className="mt-[42px] flex items-center gap-[10px]">
        {img ? (
          <img
            className="w-[85px] h-[83px] object-contain"
            src={URL.createObjectURL(img)}
            alt=""
          />
        ) : (
          <Image
            className="w-[85px] h-[83px] object-contain"
            src={profile}
            alt=""
          />
        )}
        <Button
          onClick={() => imgRef.current.click()}
          className="border-[2px] border-[#D9DBDF] rounded-[50px] w-[145px] p-0 h-[32px] bg-white text-xs flex justify-center items-center font-bold font-inter text-black shadow-none hover:shadow-primary hover:bg-primary hover:text-white"
          placeholder=""
        >
          Change Avatar
        </Button>
        <input
          onChange={(e: any) => setImg(e.target.files[0])}
          ref={imgRef}
          type="file"
          className="hidden"
          accept=".png, .jpg, jpeg"
          multiple={false}
        />
      </div>

      <form className="max-w-[470px] w-full mt-5 grid grid-cols-1 gap-y-[26px]">
        <div className="bg-[#F6F7F9] w-full h-[60px] rounded-[5px] py-[12px] px-[16px] grid grid-cols-1 gap-y-[6px]">
          <label
            className="text-[#7E7F81] text-sm leading-[12px]"
            htmlFor="Email"
          >
            Email address
          </label>
          <input
            type="email"
            placeholder="Terminator2@super.com"
            className="text-base text-[#292929] placeholder:text-[#292929] leading-[16px] border-none outline-none h-full w-full bg-transparent"
          />
        </div>
        <div>
          <div className="bg-[#F6F7F9] w-full h-[60px] rounded-[5px] py-[12px] px-[16px] grid grid-cols-1 gap-y-[6px]">
            <label
              className="text-[#7E7F81] text-sm leading-[12px]"
              htmlFor="author_name"
            >
              Public Author Name
            </label>
            <input
              type="text"
              placeholder="Mr Smith"
              className="text-base text-[#292929] placeholder:text-[#292929] leading-[16px] border-none outline-none h-full w-full bg-transparent"
            />
          </div>
          <p className="text-[#7E7F81] text-sm leading-[16px] mt-[6px]">
            This is the name that will appear on your <br />
            posts and public profile.
          </p>
        </div>
        <div className="bg-[#F6F7F9] w-full h-[60px] rounded-[5px] py-[12px] px-[16px] grid grid-cols-1 gap-y-[6px]">
          <label
            className="text-[#7E7F81] text-sm leading-[12px]"
            htmlFor="first_name"
          >
            First Name
          </label>
          <input
            type="text"
            placeholder="Gabie"
            className="text-base text-[#292929] placeholder:text-[#292929] leading-[16px] border-none outline-none h-full w-full bg-transparent"
          />
        </div>
        <div className="bg-[#F6F7F9] w-full h-[60px] rounded-[5px] py-[12px] px-[16px] grid grid-cols-1 gap-y-[6px]">
          <label
            className="text-[#7E7F81] text-sm leading-[12px]"
            htmlFor="last_name"
          >
            Last Name
          </label>
          <input
            type="text"
            placeholder="Sheber"
            className="text-base text-[#292929] placeholder:text-[#292929] leading-[16px] border-none outline-none h-full w-full bg-transparent"
          />
        </div>

        <Button
          className="bg-primary font-bold text-black text-sm leading-[16px] h-[50px] w-full rounded-[50px] mt-[6px] shadow-none hover:shadow-none"
          placeholder=""
        >
          save changes
        </Button>
      </form>
    </div>
  );
};

export default MyProfile;
