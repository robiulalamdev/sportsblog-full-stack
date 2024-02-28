import React from "react";
import { iFacebook, iGoogle } from "../../lib/utils/icons";
import Link from "next/link";
import bg from "../../assets/images/login/loginbg.png";

const SignupPage = () => {
  return (
    <div
      className="h-screen flex justify-center items-center md:px-theme w-full overflow-y-auto pb-10 pt-20"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[833px] w-full h-fit backdrop-blur-xl md:border-[1px] border-white/75 rounded-[44px] flex justify-center items-center px-2 md:px-0 mt-32 md:mt-0">
        <div className="">
          <div className="max-w-[410px] w-full mx-auto grid grid-cols-1 gap-[18px] py-8">
            <div className="flex flex-col gap-y-4">
              <label
                className="text-base font-semibold text-white"
                htmlFor="name"
              >
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
              <label
                className="text-base font-semibold text-white"
                htmlFor="email"
              >
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
            <div className="grid grid-cols-1 gap-[18px] mt-[12px]">
              <button className="w-full h-[56px] rounded-[4px] text-[#332C20] text-[18px] font-medium bg-white flex justify-between items-center px-[22px]">
                {iGoogle}
                <span className="flex-grow text-nowrap">
                  Continue with Google
                </span>
                <span></span>
              </button>
              <button className="w-full h-[56px] rounded-[4px] text-[#332C20] text-[18px] font-medium bg-white flex justify-between items-center px-[22px]">
                {iFacebook}
                <span className="flex-grow text-nowrap">
                  Continue with Facebook
                </span>
                <span></span>
              </button>
            </div>
            <p className="text-center font-inter text-white">
              <span className="font-thin">Do You Have Account? </span>{" "}
              <Link href="/login">
                <span className="font-bold">Log In</span>
              </Link>
            </p>
          </div>

          <p className="text-white text-[16px] font-thin text-center mt-[30px] mb-[45px] font-inter">
            <span className="font-thin">
              Click “Sign up” to agree to Wushu’s
            </span>{" "}
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
      </div>
    </div>
  );
};

export default SignupPage;
