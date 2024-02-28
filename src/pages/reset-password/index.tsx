import React, { useState } from "react";
import { iFacebook, iGoogle, iPRS } from "../../lib/utils/icons";
import Link from "next/link";

const ResetPasswordPage = () => {
  const [step, setStep] = useState(1);
  return (
    <div
      className="h-screen flex justify-center items-center md:px-theme w-full"
      style={{
        position: "relative",
        background: "linear-gradient(to bottom right, #051b45, #593c04)",
      }}
    >
      <div className="max-w-[833px] w-full h-[688px] backdrop-blur-3xl bg-black/5 md:border-[1px] border-white/75 rounded-[44px] flex justify-center items-center px-2 md:px-0">
        {step === 1 && (
          <div className="max-w-[674px] w-full mx-auto grid grid-cols-1 gap-[18px]">
            <div className="mb-[64px]">
              <h1 className="text-white font-bold text-[38px]">
                Forgot Password
              </h1>
              <p className="text-white text-[21px] mt-[10px] font-inter">
                Enter the email you used to create your account so we can send
                you instructions on how to reset your password.
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <input
                className="h-[56px] w-full text-black placeholder:text-[#ABABAB] text-base leading-[22px] bg-[#F8F8F8] rounded-[4px] outline-none border border-black px-4"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full h-[56px] rounded-[4px] text-black text-[18px] font-semibold bg-primary"
            >
              Send
            </button>
            <button className="w-full h-[56px] rounded-[4px] text-black text-[18px] font-semibold bg-white border">
              Back to Login
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="max-w-[674px] w-full mx-auto grid grid-cols-1 gap-[18px]">
            <div className="mb-[64px]">
              <h1 className="text-white font-bold text-[38px]">
                Check your Email
              </h1>
              <p className="text-white text-[21px] mt-[10px]">
                We have sent an email with password reset information to <br />
                n****e@e***e.com.
              </p>
            </div>
            <div>
              <p className="mb-[14px] text-white text-[21px]">
                Didn’t receive the email? Check spam or promotion folder or
              </p>
              <button
                onClick={() => setStep(3)}
                className="w-full h-[56px] font-semibold rounded-[4px] text-black text-[18px] bg-primary"
              >
                Resend Email
              </button>
            </div>
            <Link href="/login">
              <button className="w-full h-[56px] rounded-[4px] text-black text-[18px] font-semibold bg-white border">
                Back to Login
              </button>
            </Link>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-[674px] w-full mx-auto grid grid-cols-1 gap-[18px]">
            <div className="mb-[64px]">
              <h1 className="text-white font-bold text-[38px]">
                Reset Password
              </h1>
              <p className="text-white text-[21px] mt-[10px]">
                Choose a new password for your account
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <input
                className="h-[56px] w-full text-black placeholder:text-[#ABABAB] text-base leading-[22px] bg-[#F8F8F8] rounded-[4px] outline-none border border-black px-4"
                type="password"
                placeholder="Your new password"
                required
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <input
                className="h-[56px] w-full text-black placeholder:text-[#ABABAB] text-base leading-[22px] bg-[#F8F8F8] rounded-[4px] outline-none border border-black px-4"
                type="password"
                placeholder="Confirm your new password"
                required
              />
            </div>

            <button
              onClick={() => setStep(4)}
              className="w-full h-[56px] rounded-[4px] text-black text-[18px] font-semibold bg-primary"
            >
              Reset Password
            </button>
            <button className="w-full h-[56px] rounded-[4px] text-black text-[18px] font-semibold bg-white border">
              Back to Login
            </button>
          </div>
        )}
        {step === 4 && (
          <div className="max-w-[674px] w-full mx-auto grid grid-cols-1 gap-[18px]">
            <div className="mb-[30px] flex flex-col justify-center items-center gap-[24px]">
              {iPRS}
              <h1 className="text-white text-[24px] font-inter font-semibold">
                Password reset successfully
              </h1>
            </div>

            <Link href="/login">
              <button className="w-full h-[56px] rounded-[4px] text-black text-[18px] font-semibold bg-primary">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
