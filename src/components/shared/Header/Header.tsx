import React from "react";
import logo from "../../../assets/brand/logo.png";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import ProfileDropdown from "../profile/ProfileDropdown";

const Header = () => {
  return (
    <div className="bg-black border-b-[0.5px] border-white">
      <div className="h-full max-h-[75px] min-h-[75px] md:max-h-[95px] md:min-h-[95px] max-w-theme px-3 mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            className="w-[100px] h-[30px] md:w-[136px] md:h-[41px]"
            src={logo}
            alt=""
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button
              placeholder=""
              className="bg-black rounded-[5px] border border-white leading-[24px] text-sm md:text-base normal-case px-2 md:px-5 h-[30px] md:h-[40px] flex justify-center items-center text-nowrap text-white "
            >
              Log in
            </Button>
          </Link>
          <Link href="/write-blog">
            <Button
              placeholder=""
              className="bg-primary rounded-[5px] leading-[24px] text-base w-[100px] md:w-[120px] h-[30px] md:h-[40px] flex justify-center items-center font-semibold md:font-bold text-black text-[13px] text-nowrap normal-case"
            >
              Write Article
            </Button>
          </Link>
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
