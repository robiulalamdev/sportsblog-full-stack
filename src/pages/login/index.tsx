import React from "react";
import { iFacebook, iGoogle } from "../../lib/utils/icons";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#191919]">
      <div className="max-w-[410px] w-full mx-auto grid grid-cols-1 gap-[18px]">
        <div className="flex flex-col gap-y-4">
          <label className="text-base font-semibold text-white" htmlFor="email">
            Email
          </label>
          <input
            className="h-[56px] w-full text-black placeholder:text-[#ABABAB] text-base leading-[22px] bg-white rounded-[4px] outline-none px-4"
            type="email"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label
            className="text-base font-semibold text-white"
            htmlFor="Password"
          >
            Password
          </label>
          <input
            className="h-[56px] w-full text-black placeholder:text-[#ABABAB] text-base leading-[22px] bg-white rounded-[4px] outline-none px-4"
            type="password"
            placeholder="Enter your Password"
            required
          />
        </div>
        <button className="w-full h-[56px] rounded-[4px] text-black text-[18px] font-medium bg-primary">
          Log in
        </button>
        <div>
          <Link href="/reset-password">
            <p className="text-base font-semibold text-white" htmlFor="email">
              Forgot Password?
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-[18px] mt-[34px]">
          <button className="w-full h-[56px] rounded-[4px] text-black text-[18px] font-medium bg-white flex justify-between items-center px-[22px]">
            {iGoogle}
            <span className="flex-grow text-nowrap">Continue with Google</span>
            <span></span>
          </button>
          <button className="w-full h-[56px] rounded-[4px] text-black text-[18px] font-medium bg-white flex justify-between items-center px-[22px]">
            {iFacebook}
            <span className="flex-grow text-nowrap">
              Continue with Facebook
            </span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
