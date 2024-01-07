/* eslint-disable @next/next/no-img-element */
import React from "react";
import img from "../../../assets/images/profile/profile.png";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import Image from "next/image";
import { iLogout, iProfile, iSetting } from "@/lib/utils/icons";
import Link from "next/link";

const ProfileDropdown = () => {
  return (
    <div className="ml-4">
      <Popover placement="bottom-end">
        <PopoverHandler>
          <Image
            className="w-[51px] h-[51px] rounded-full object-cover cursor-pointer"
            src={img}
            alt=""
          />
        </PopoverHandler>
        <PopoverContent
          className="max-w-[327px] w-full min-h-[370px] rounded-[15px] border-none shadow p-0"
          placeholder=""
        >
          <div className="flex items-center px-[23px] gap-[10px] w-full h-[137px] bg-[#F6F7F9] rounded-t-[15px]">
            <Image
              className="w-[51px] h-[51px] rounded-full object-cover"
              src={img}
              alt=""
            />
            <h1 className="text-[#141A28] font-semibold font-montserrat leading-[24px] text-[18px]">
              Gabie Sheber
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-y-[12px] px-[10px] bg-white w-full mt-[35px]">
            <Link href="/profile" className="w-full">
              <Button
                className="flex items-center gap-x-[24px] px-[22px] bg-white border-none shadow-none hover:shadow-none outline-none text-base font-bold font-montserrat text-[#141A28] hover:text-white hover:bg-primary w-full rounded"
                placeholder=""
              >
                {iProfile}
                <span>PROFILE</span>
              </Button>
            </Link>
            <Link href="/account" className="w-full">
              <Button
                className="flex items-center gap-x-[24px] px-[22px] bg-white border-none shadow-none hover:shadow-none outline-none text-base font-bold font-montserrat text-[#141A28] hover:text-white hover:bg-primary w-full rounded"
                placeholder=""
              >
                {iSetting}
                <span>Account settings</span>
              </Button>
            </Link>

            <Button
              className="flex items-center gap-x-[24px] px-[22px] bg-white border-none shadow-none hover:shadow-none outline-none text-base font-bold font-montserrat text-[#141A28] hover:text-white hover:bg-primary w-full rounded"
              placeholder=""
            >
              {iLogout}
              <span>logout</span>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ProfileDropdown;
