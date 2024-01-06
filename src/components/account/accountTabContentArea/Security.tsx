/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { Button } from "@material-tailwind/react";

const Security = () => {
  return (
    <div>
      <h1 className="text-[36px] font-extrabold font-montserrat text-[#141A28]">
        Security
      </h1>

      <form className="max-w-[470px] w-full mt-5 grid grid-cols-1 gap-y-[26px]">
        <h1 className="text-[#141A28] font-semibold font-montserrat leading-[16px] text-base">
          Change Password
        </h1>
        <div className="bg-[#F6F7F9] w-full h-[60px] rounded-[5px] py-[12px] px-[16px] grid grid-cols-1 gap-y-[6px]">
          <label
            className="text-[#7E7F81] text-sm leading-[12px]"
            htmlFor="Current_Password"
          >
            Current Password
          </label>
          <input
            type="password"
            placeholder="⚫⚫⚫⚫⚫⚫⚫⚫"
            className="text-base text-[#292929] placeholder:!text-[8px] placeholder:text-[#292929] leading-[16px] border-none outline-none h-full w-full bg-transparent"
          />
        </div>
        <div className="bg-[#F6F7F9] w-full h-[60px] rounded-[5px] py-[12px] px-[16px] grid grid-cols-1 gap-y-[6px]">
          <label
            className="text-[#7E7F81] text-sm leading-[12px]"
            htmlFor="New_Password"
          >
            New Password
          </label>
          <input
            type="password"
            placeholder="⚫⚫⚫⚫⚫⚫⚫⚫"
            className="text-base text-[#292929] placeholder:!text-[8px] placeholder:text-[#292929] leading-[16px] border-none outline-none h-full w-full bg-transparent"
          />
        </div>
        <div className="bg-[#F6F7F9] w-full h-[60px] rounded-[5px] py-[12px] px-[16px] grid grid-cols-1 gap-y-[6px]">
          <label
            className="text-[#7E7F81] text-sm leading-[12px]"
            htmlFor="Confirm_New_Password"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            placeholder="⚫⚫⚫⚫⚫⚫⚫⚫"
            className="text-base text-[#292929] placeholder:!text-[8px] placeholder:text-[#292929] leading-[16px] border-none outline-none h-full w-full bg-transparent"
          />
        </div>

        <Button
          className="bg-primary font-bold text-black text-sm leading-[16px] h-[50px] w-full rounded-[50px] mt-[6px] shadow-none hover:shadow-none"
          placeholder=""
        >
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default Security;
