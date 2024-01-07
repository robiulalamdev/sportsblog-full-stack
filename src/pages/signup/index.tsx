import React from "react";
import { iFacebook, iGoogle } from "../../lib/utils/icons";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#191919] px-theme">
      <div className="max-w-[410px] w-full mx-auto grid grid-cols-1 gap-[18px] pt-[114px]">
        <div className="flex flex-col gap-y-4">
          <label className="text-base font-semibold text-white" htmlFor="name">
            Name
          </label>
          <input
            className="h-[56px] w-full text-black placeholder:text-[#ABABAB] text-base leading-[22px] bg-white rounded-[4px] outline-none px-4"
            type="text"
            placeholder="Write your full name"
            required
          />
        </div>
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
            placeholder="Enter a strong password"
            required
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label
            className="text-base font-semibold text-white"
            htmlFor="Confirm_Password"
          >
            Confirm Password
          </label>
          <input
            className="h-[56px] w-full text-black placeholder:text-[#ABABAB] text-base leading-[22px] bg-white rounded-[4px] outline-none px-4"
            type="password"
            placeholder="Enter password again"
            required
          />
        </div>
        <button className="w-full h-[56px] rounded-[4px] text-black text-[18px] font-medium bg-primary">
          Sign Up
        </button>

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

      <h1 className="text-white text-[18px] text-center mt-5 font-light">
        Do You Have Account?{" "}
        <Link href="/" className="font-semibold">
          Log In
        </Link>
      </h1>
      <p className="text-white text-[18px] text-center mt-[75px] font-light mb-[114px]">
        Click “Sign up” to agree to Wushu’s{" "}
        <Link href="/" className="font-semibold underline">
          Terms of Service
        </Link>{" "}
        and acknowledge <br />
        that Medium’s{" "}
        <Link href="/" className="font-semibold underline">
          Privacy Policy
        </Link>{" "}
        applies to you.
      </p>
    </div>
  );
};

export default SignupPage;
