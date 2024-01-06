import React from "react";
import bg from "../../assets/images/home/sport_bg.png";
import { Button } from "@material-tailwind/react";

const SportSection = () => {
  return (
    <div
      className="min-h-[640px] max-w-theme px-theme mx-auto w-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="91"
        height="70"
        viewBox="0 0 91 70"
        fill="none"
      >
        <path
          d="M82.9791 25.9137C86.962 13.0459 77.3435 0 63.8734 0H36.4123C27.6446 0 19.8991 5.71062 17.3066 14.0863L8.0209 44.0863C4.03801 56.9541 13.6565 70 27.1266 70H54.5877C63.3554 70 71.1009 64.2894 73.6934 55.9137L82.9791 25.9137Z"
          fill="#FFA903"
        />
        <path
          d="M40.6002 32.125H33.4001C33.4001 29.5019 35.5505 27.3751 38.2001 27.3751V25C34.2249 25 31 28.1892 31 32.125V41.6252C31 42.9309 32.0804 44 33.4001 44H40.6002C41.9196 44 43 42.9309 43 41.6252V34.5002C43 33.1941 41.9196 32.125 40.6002 32.125Z"
          fill="#141A28"
        />
        <path
          d="M56.6002 32.125H49.4001C49.4001 29.5019 51.5505 27.3751 54.2001 27.3751V25C50.2249 25 47 28.1892 47 32.125V41.6252C47 42.9309 48.0804 44 49.4001 44H56.6002C57.9196 44 59 42.9309 59 41.6252V34.5002C59 33.1941 57.9196 32.125 56.6002 32.125Z"
          fill="#141A28"
        />
      </svg>

      <h1 className="mt-[34px] max-w-[941px] mx-auto font-bold text-[36px] font-montserrat text-black text-center">
        You’ve got something to say. We’ve got people who want to hear it.
      </h1>
      <Button
        placeholder=""
        className="mt-[53px] rounded-[50px] bg-black text-white w-[236px] h-[50px] text-xs font-bold leading-[16px]"
      >
        Start your SportsBlog
      </Button>
    </div>
  );
};

export default SportSection;
